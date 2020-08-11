export  class NewsCard {

  constructor(cardData) {
    this.cardData = cardData;
  }

  create = () => {
    this.template = document.querySelector('#news-card-template').content;
    this.cardElement = this.template.cloneNode(true).querySelector('.card');
    this.cardImg = this.cardElement.querySelector('.card__img');
    this.data = this.cardElement.querySelector('.card__data');
    this.title = this.cardElement.querySelector('.card__title');
    this.text = this.cardElement.querySelector('.card__text');
    this.source = this.cardElement.querySelector('.card__source');
    
    
    this.cardImg.src = this.cardData.image;
    this.data.textContent = this.cardData.data;
    this.title.textContent = this.cardData.title;
    this.text.textContent = this.cardData.text;
    this.source.textContent = this.cardData.sourse;
    return this.cardElement;
  }


}