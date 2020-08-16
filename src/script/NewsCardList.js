export class NewsCardList {
    constructor(container, createCard, moreBtn) {
        this.createCard = createCard;
        this.container = container;
        this.moreBtn = moreBtn;
        this.localArr = [];
    }

    addCard = (element) => {
        this.container.append(element);
    }

    localStorage = (arr) => {
        localStorage.setItem('cards', JSON.stringify(arr));
        this.localArr = JSON.parse(localStorage.getItem('cards'));
        return this.localArr;
    }

    render = (cardsAmount) => {

        if (this.localArr.length > cardsAmount){
            localStorage.setItem('cardsNumber', JSON.stringify(cardsAmount));
            this.localAmount = JSON.parse(localStorage.getItem('cardsNumber'));
            for (let i = 0; i < cardsAmount; i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            };
        } else if (this.localArr.length <= cardsAmount){
            localStorage.setItem('cardsNumber', JSON.stringify(cardsAmount + (this.localArr.length - cardsAmount)));

            for (let i=0; i < (this.localArr.length); i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            };
            this.moreBtn.classList.add('card-list__button_is-hidden');
        }
        
        // this.localArr.forEach(item => {
        //     this.addCard(this.createCard(item).create());
        // });
    }
    renderMore = () => {
        this.localArr = JSON.parse(localStorage.getItem('cards'));
        this.localAmount = JSON.parse(localStorage.getItem('cardsNumber'));
        if ((this.localArr.length - this.localAmount) > 6) {
            
            for (let i = this.localAmount; i < this.localAmount+6; i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            }

            localStorage.setItem('cardsNumber', JSON.stringify(this.localAmount+6));
            this.counter = JSON.parse(localStorage.getItem('cardsNumber'));

        } else if ((this.localArr.length - this.localAmount) <= 6){
            for (let i = this.localAmount; i < (this.localAmount+ (this.localArr.length - this.localAmount)); i++) {
                this.addCard(this.createCard(this.localArr[i]).create());
            };

 
            localStorage.setItem('cardsNumber', JSON.stringify(this.localAmount+ (this.localArr.length - this.localAmount)));
            this.moreBtn.classList.add('card-list__button_is-hidden');
        }
    }

    showRenderedCards = (localCardsNumber, localCardsArr) =>{
        for (let i=0; i<localCardsNumber; i++){
            this.addCard(this.createCard(localCardsArr[i]).create());
        }
    }



}