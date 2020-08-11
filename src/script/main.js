console.log('this is main page');
import '../style/main.css';
const newsCardsArr = [
    {   
        image: './images/card6.png',
        data: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'
    },
    {   
        image: './images/card2.png',
        data: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'

    },
    {   
        image: './images/card3.png',
        data: '2 августа, 2019',
        title: 'Национальное достояние – парки',
        text: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
        sourse: 'Лента.ру'

    }
];
const today = new Date();
const todayYear = today.getFullYear();
const todayMonth = today.getMonth() + 1;
const todayDate = today.getDate();
const toDate = (todayYear + '-' + todayMonth + '-' + todayDate);
const apiKey = 'e0f5e0253b0c468385220f7eaf110575';

const cardNewsContainer = document.querySelector('.cards-list__container');
import { NewsCard } from "./NewsCard.js";
import { NewsCardList } from "./NewsCardList.js";
import {NewsApi} from "./NewsApi.js";

const newsApi = new NewsApi(toDate, apiKey)
const createNewsCard = (...args) => new NewsCard (...args);
const newsList = new NewsCardList(cardNewsContainer, createNewsCard);
newsApi.getNewsCards()
.then(obj => {

    console.log(obj.totalResults)
    console.log(obj.articles)
})
newsList.render(newsCardsArr);