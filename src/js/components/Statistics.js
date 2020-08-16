export class Statistics{
    constructor(getFigures, askedValue, totalResults, titleResults){
        this.getFigures = getFigures;
        this.askedValue = askedValue;
        this.totalResults = totalResults;
        this.titleResults = titleResults;
    }

    renderHeader = (localRequest) =>{   
        this.getFigures.countTitleMatches(localRequest);
        this.totalLocal = JSON.parse(localStorage.getItem('totalResults'))
        this.titleLocal = JSON.parse(localStorage.getItem('titleMatches'));
        this.askedValue.textContent = `«${localRequest}»`;
        this.totalResults.textContent = this.totalLocal;
        this.titleResults.textContent = this.titleLocal;
    }

    createDatesColumn = (elem) => {
        this.dateTemplate = document.querySelector('#statistics__day-template').content;
        this.dateContainer = this.dateTemplate.cloneNode(true).querySelector('#day');
        this.date = this.dateContainer.querySelector('.statistics__day');
        this.date.textContent = elem;
        return this.date;
    }

    renderDatesColumn = (container) => {
        this.getFigures.adopteDate();
        this.analyticsDates = JSON.parse(localStorage.getItem('analyticsDates'));
        this.analyticsDates.forEach(item => {
            container.append(this.createDatesColumn(item));            
        });
    }

    createBarColumn = (elem) => {
        this.barTemplate = document.querySelector('#statistics__bar-template').content;
        this.barContainer = this.barTemplate.cloneNode(true).querySelector('#bar');
        this.bar = this.barContainer.querySelector('.statistics__bar');
        this.bar.textContent = elem;
        this.bar.style.maxWidth = `${elem}%`;
        return this.bar;
    }

    renderChart = (container, localRequest) => {
        this.getFigures.countMatchesForBars(localRequest);
        this.localBars = JSON.parse(localStorage.getItem('barStatistics'));
        this.localBars.forEach(item => {
            container.append(this.createBarColumn(item));            
        });
    }
}