console.log('this is main page');
import '../style/main.css';
import { NewsCard } from "./components/NewsCard.js";
import { NewsCardList } from "./components/NewsCardList.js";
import {NewsApi} from "./modules/NewsApi.js";
import {DataStorage} from "./modules/DataStorage";

const today = new Date();
let weekAgo  = new Date();
weekAgo.setDate(weekAgo.getDate()-6);
const cardsAmount = 6;
const todayYear = today.getFullYear();
const weekAgoYear = weekAgo.getFullYear();
const todayMonth = today.getMonth() + 1;
const weekAgoMonth = weekAgo.getMonth() + 1;
const todayDate = today.getDate();
const weekAgoDate = weekAgo.getDate();
const toDate = (todayYear + '-' + todayMonth + '-' + todayDate);
const fromDate = (weekAgoYear + '-' + weekAgoMonth + '-' + weekAgoDate);
const apiKey = 'e0f5e0253b0c468385220f7eaf110575';
const localCardsNumber = JSON.parse(localStorage.getItem('cardsNumber'));
const localCardsArr = JSON.parse(localStorage.getItem('cards'));


const form = document.querySelector('.search-request__form');
const req = document.querySelector('#search');
const cardNewsContainer = document.querySelector('.cards-list__container');
const newsSection = document.querySelector('.news');
const preloader = document.querySelector('.preloader');
const cardsSection = document.querySelector('.cards-list');
const moreBtn = document.querySelector('.card-list__button');
const notFound = document.querySelector('.not-found');


const localStrg = new DataStorage();
const newsApi = new NewsApi(req, toDate, fromDate, apiKey)
const createNewsCard = (...args) => new NewsCard (...args);
const newsList = new NewsCardList(cardNewsContainer, createNewsCard, moreBtn, localStrg);

function renderPreloader (isLoading){
    if (isLoading===true){
        preloader.classList.add('preloader_is-active');
    } else {
        preloader.classList.remove('preloader_is-active');
    }
}

if (localCardsNumber !== null){
    const localReq = JSON.parse(localStorage.getItem('request'));
    req.value = localReq;
    renderPreloader (false);
    newsSection.classList.add('news_is-active');
    cardsSection.classList.add('cards-list_is-active');
    newsList.showRenderedCards(localCardsNumber, localCardsArr);
} else {
    renderPreloader (false);
    newsSection.classList.remove('news_is-active');
    cardsSection.classList.remove('cards-list_is-active');
}

form.addEventListener('submit', function submit(e) {

    e.preventDefault();
    localStrg.clearStorage();
    newsSection.classList.add('news_is-active');
    renderPreloader(true);
    localStrg.setReqValue(req.value);
    newsApi.getNewsCards()
  
.then (res => {
    localStrg.setResults(res.totalResults);

    if (res.articles.length === 0){
        moreBtn.classList.add('card-list__button_is-hidden');
        cardNewsContainer.innerHTML=""; 
        notFound.classList.add('not-found_is-active');
        cardsSection.classList.remove('cards-list_is-active');
    } else {

    moreBtn.classList.remove('card-list__button_is-hidden');
    cardNewsContainer.innerHTML="";
    console.log(res);
    notFound.classList.remove('not-found_is-active');
    cardsSection.classList.add('cards-list_is-active');
    localStrg.setCardsArr(res.articles);
    newsList.render(cardsAmount);
    }   
}
    )
.catch(err => console.log(`Ошибка: ${err}`))
.finally(() =>{
    
    renderPreloader(false);
});
})

moreBtn.addEventListener('click', function(){
    newsList.renderMore(localCardsArr);
    })
