import '../../style/analitics.css';
import {GetNumbers} from '../utils/GetNumbers.js';
import {Statistics} from '../components/Statistics.js';
import {DataStorage} from '../modules/DataStorage.js';

const askedReq = document.querySelector('.intro__request');
const totalResults = document.querySelector('.intro__news-quantity');
const titleResults = document.querySelector('.intro__mentions-quantity');
const datesColumn = document.querySelector('.statistics__first-column');
const barsColumn = document.querySelector('.statistics__second-column');
const month = document.querySelector('.statistics__month');

const localResults = JSON.parse(localStorage.getItem('totalResults'));
const localCardsArr = JSON.parse(localStorage.getItem('cards'));
const localRequest = JSON.parse(localStorage.getItem('request'));

const localStrg = new DataStorage();
const getFigures = new GetNumbers(localResults, localCardsArr, localRequest, localStrg);
const statisticsRender = new Statistics (getFigures, askedReq, totalResults, titleResults, month)

getFigures.adopteMonth();
statisticsRender.renderHeader(localRequest);
statisticsRender.renderDatesColumn(datesColumn);
statisticsRender.renderChart(barsColumn, localRequest);

