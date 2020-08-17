console.log('this is about page');
import '../../style/about.css';
import {GithubApi} from '../modules/GithubApi.js';
import {CommitCardList} from '../components/CommitCardList.js';
import {CommitCard} from '../components/CommitCard.js';

const cardsContainer = document.querySelector('.git-history__swiper');

const gitApi = new GithubApi();
const createCommitCard = (...args) => new CommitCard(...args);
const commitsList = new CommitCardList(cardsContainer, createCommitCard);

gitApi.getCommitCards()
.then(res => {
  console.log(res)
  commitsList.render(res);
  var flkty = new Flickity( cardsContainer, {
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    draggable: true,
  });
})
.catch(err => console.log(`Ошибка: ${err}`));
