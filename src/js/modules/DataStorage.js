export class DataStorage {
    constructor(){

    }

    setCardsArr = (arr) => {
        localStorage.setItem('cards', JSON.stringify(arr));
    }

    setNewsDate = (dates) => {
        localStorage.setItem('newsDate', JSON.stringify(dates));
    }

    setCardsShown = (number) => {
        localStorage.setItem('cardsNumber', JSON.stringify(number));
    }

    setReqValue = (req) => {
        localStorage.setItem('request', JSON.stringify(req));
    }

    setResults = (result) => {
        localStorage.setItem('totalResults', JSON.stringify(result));
    }

    setAnalyticsDates = (dates) => {
        localStorage.setItem('analyticsDates', JSON.stringify(dates));
    }

    setTitleMatches = (result) => {
        localStorage.setItem('titleMatches', JSON.stringify(result)); 
    }

    setBarStatistics = (statArr) => {
        localStorage.setItem('barStatistics', JSON.stringify(statArr)); 
    }

    clearStorage = () => {
        localStorage.clear();
    }
}