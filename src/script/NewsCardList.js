export class NewsCardList {
    constructor(container, createCard) {
        this.createCard = createCard;
        this.container = container;
    }

    addCard = (element) => {
        this.container.append(element);
    }

    render = (arr) => {
        arr.forEach(item => this.addCard(this.createCard(item).create()));
    }
}