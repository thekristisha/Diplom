export class CommitCardList {

    constructor(arr, container, createCard) {
        this.arr = arr;
        this.createCard = createCard;
        this.container = container;
    }

    addCard = (element) => {
        this.container.append(element);
    }

    render = () => {
        this.arr.forEach(item => this.addCard(this.createCard(item).create()));
    }
}