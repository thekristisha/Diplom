export class NewsCardList {
    constructor(container, createCard, moreBtn, localStrg) {
        this.createCard = createCard;
        this.container = container;
        this.moreBtn = moreBtn;
        this.localArr = [];
        this.localStrg = localStrg;
    }

    addCard = (element) => {
        this.container.append(element);
    }

    render = (cardsAmount) => {
        this.localArr = JSON.parse(localStorage.getItem('cards'));
        if (this.localArr.length > cardsAmount){
            this.localStrg.setCardsShown(cardsAmount)
            // localStorage.setItem('cardsNumber', JSON.stringify(cardsAmount));
            this.localAmount = JSON.parse(localStorage.getItem('cardsNumber'));
            for (let i = 0; i < cardsAmount; i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            };
        } else if (this.localArr.length <= cardsAmount){
            this.localStrg.setCardsShown(cardsAmount + (this.localArr.length - cardsAmount))
            // localStorage.setItem('cardsNumber', JSON.stringify(cardsAmount + (this.localArr.length - cardsAmount)));

            for (let i=0; i < (this.localArr.length); i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            };
            this.moreBtn.classList.add('card-list__button_is-hidden');
        }

    }
    renderMore = () => {
        this.localArr = JSON.parse(localStorage.getItem('cards'));
        this.localAmount = JSON.parse(localStorage.getItem('cardsNumber'));
        if ((this.localArr.length - this.localAmount) > 6) {
            
            for (let i = this.localAmount; i < this.localAmount+6; i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            }
            this.localStrg.setCardsShown(this.localAmount+6);
            // localStorage.setItem('cardsNumber', JSON.stringify(this.localAmount+6));
            this.counter = JSON.parse(localStorage.getItem('cardsNumber'));

        } else if ((this.localArr.length - this.localAmount) <= 6){
            for (let i = this.localAmount; i < (this.localAmount+ (this.localArr.length - this.localAmount)); i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            };

            this.localStrg.setCardsShown(this.localAmount+ (this.localArr.length - this.localAmount));
            // localStorage.setItem('cardsNumber', JSON.stringify(this.localAmount+ (this.localArr.length - this.localAmount)));
            this.moreBtn.classList.add('card-list__button_is-hidden');
        }
    }

    showRenderedCards = (localCardsNumber, localCardsArr) =>{
        for (let i=0; i<localCardsNumber; i++){
            this.addCard(this.createCard(localCardsArr[i]).create());
        }
    }



}