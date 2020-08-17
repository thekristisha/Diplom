export class CommitCard {

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

      emailAdaptation = (elem) =>{
          this.email = elem.substr(9, );
          return this.email;
      }

    create = () => {
        
        this.template = document.querySelector('#git-card-template').content;
        this.cardElement = this.template.cloneNode(true).children[0];
        this.authorPhoto = this.cardElement.querySelector('.git-card__photo');
        this.data = this.cardElement.querySelector('.git-card__date');
        this.name = this.cardElement.querySelector('.git-card__name');
        this.mail = this.cardElement.querySelector('.git-card__mail');
        this.commit = this.cardElement.querySelector('.git-card__commit');


        this.authorPhoto.src = this.cardData.author.avatar_url;
        this.data.textContent = this.dateAdaptation(this.cardData.commit.committer.date);
        this.name.textContent = this.cardData.commit.author.name;
        this.mail.textContent = this.emailAdaptation(this.cardData.commit.author.email);
        this.commit.textContent = this.cardData.commit.message;
        return this.cardElement;
    }

}