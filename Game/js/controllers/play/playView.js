import { div } from "../../libs/html.js";
import { View } from "../view.js";

export class PlayView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'playView';
        this.cardsContainer = div({ className: 'playView-cardsContainer' }, this.container);

    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        console.log(cards);
        cards.forEach(card => {
            div({ innerHTML: card.icon, className: 'card' }, this.cardsContainer)
        });
    }
}