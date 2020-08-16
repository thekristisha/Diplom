export class CommitCard {

    constructor(cardData) {
        this.cardData = cardData;
    }

    create = () => {
        this.template = document.querySelector('#git-card-template').content;
        this.cardElement = this.template.cloneNode(true).children[0];
        this.cardImg = this.cardElement.querySelector('.git-card__photo');
        this.data = this.cardElement.querySelector('.git-card__date');
        this.name = this.cardElement.querySelector('.git-card__name');
        this.mail = this.cardElement.querySelector('.git-card__mail');
        this.commit = this.cardElement.querySelector('.git-card__commit');


        this.cardImg.src = this.cardData.photo;
        this.data.textContent = this.cardData.date;
        this.name.textContent = this.cardData.name;
        this.mail.textContent = this.cardData.mail;
        this.commit.textContent = this.cardData.commit;
        return this.cardElement;
    }

}