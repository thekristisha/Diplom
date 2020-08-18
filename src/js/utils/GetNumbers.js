export class GetNumbers {
    constructor(results, cardsArr, request, localStrg) {
        this.results = results;
        this.cardsArr = cardsArr;
        this.request = request;
        this.localStrg = localStrg;
    };

    adopteDate = () => {
        this.dateArr = [];
        this.localDatesArr = [];
        this.cardsArr.sort(function (x,y){
            if(Date.parse(x.publishedAt) < Date.parse(y.publishedAt)){
                return -1
            };
            if(Date.parse(x.publishedAt) > Date.parse(y.publishedAt)){
                return 1
            };
            if(Date.parse(x.publishedAt) == Date.parse(y.publishedAt)){
                return 0
            }; 
        })

        this.cardsArr.forEach(element => {
            this.dateStr = element.publishedAt.substr(0, 10);
            this.re = /\W+/gi
            this.newDateStr = this.dateStr.replace(this.re, ',');
            this.editedDate = new Date(this.newDateStr);
            this.dateFormatter = new Intl.DateTimeFormat("ru",
                {
                    weekday: "short",
                    day: "2-digit"
                });
            
            this.formatedDate = (this.dateFormatter.format(this.editedDate)).toString();
            this.localDatesArr.push(this.dateStr);
            this.dateArr.push(this.formatedDate.substr(4, )+ ', ' +this.formatedDate.substr(0, 2));
        });
        this.uniqueDates = Array.from(new Set(this.dateArr));
        this.localStrg.setAnalyticsDates(this.uniqueDates);
        this.localStrg.setNewsDate(this.localDatesArr);
    }

    countTitleMatches = (request) => {
        let result = this.cardsArr.reduce(function(titleMatches, element) {
            if(element.title.toLowerCase().includes(request.toLowerCase())){
                return titleMatches+1;
            } else {
                return titleMatches
            }
          }, 0);
          this.localStrg.setTitleMatches(result);
    }

    adopteMonth = () =>{
        this.monthArr = [];
        this.cardsArr.sort(function (x,y){
            if(Date.parse(x.publishedAt) < Date.parse(y.publishedAt)){
                return -1
            };
            if(Date.parse(x.publishedAt) > Date.parse(y.publishedAt)){
                return 1
            };
            if(Date.parse(x.publishedAt) == Date.parse(y.publishedAt)){
                return 0
            }; 
        })

        this.cardsArr.forEach(element => {
            this.dateStr = element.publishedAt.substr(0, 10);
            this.re = /\W+/gi
            this.newDateStr = this.dateStr.replace(this.re, ',');
            this.editedDate = new Date(this.newDateStr);
            this.dateFormatter = new Intl.DateTimeFormat("ru",
                {
                    month: "long",
                });
            
            this.formatedDate = (this.dateFormatter.format(this.editedDate)).toString().toUpperCase();;
            this.monthArr.push(this.formatedDate);
            this.uniqueMonths = Array.from(new Set(this.monthArr));
        });
        this.localStrg.setMonthStatistics(this.uniqueMonths);
    }

    countMatchesForBars = (request) => {        
        const newsDates = JSON.parse(localStorage.getItem('newsDate'));
        this.analyticsDates = Array.from (new Set(newsDates));
        let barResults = [];
          
        this.analyticsDates.forEach(item =>{

            this.result = this.cardsArr.reduce(function(titleMatches, element) {
                
                if(element.publishedAt.includes(item) && element.title.toLowerCase().includes(request.toLowerCase())){
                    return titleMatches+1;
                } else {
                    return titleMatches
                }
              }, 0);  
              barResults.push(this.result);
        });
        this.localStrg.setBarStatistics(barResults);
    };

}