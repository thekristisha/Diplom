export  class NewsCard {

  constructor(cardData) {
    this.cardData = cardData;
  }

  dateAdaptation = (elem) => {
    this.dateStr = elem.substr(0, 10);
    this.re = /\W+/gi
    this.newDateStr = this.dateStr.replace(this.re, ',');
    this.editedDate = new Date(this.newDateStr);
    this.dateFormatter = new Intl.DateTimeFormat("ru",
        {
        day: "numeric",
        month: "long"
        });
        
      return (this.dateFormatter.format(this.editedDate)).toString() + ", " + this.editedDate.getFullYear().toString() ;
  }

  titleAdaptation = (elem) => {
    if(elem.length>=75){
      return this.textElem = `${elem.substr(0, 76)}...`
    } else {
      return elem;
    }
  }
 

  create = () => {
    this.template = document.querySelector('#news-card-template').content;
    this.cardElement = this.template.cloneNode(true).querySelector('.card');
    
    
    this.link = this.cardElement.querySelector('.card__link');
    this.cardImg = this.cardElement.querySelector('.card__img');
    this.data = this.cardElement.querySelector('.card__data');
    this.title = this.cardElement.querySelector('.card__title');
    this.text = this.cardElement.querySelector('.card__text');
    this.source = this.cardElement.querySelector('.card__source');

    
    this.link.href = this.cardData.url;
    this.cardImg.src = this.cardData.urlToImage;
    this.data.textContent = this.dateAdaptation(this.cardData.publishedAt);
    this.title.textContent = this.titleAdaptation(this.cardData.title);
    this.text.textContent = this.cardData.description;
    this.source.textContent = this.cardData.source.name;
    return this.cardElement;
  }


}