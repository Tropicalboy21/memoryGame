import { div } from "../../libs/html.js";
import { ControllerView } from "../controllerView.js";
import { CardView } from '../../views/cardView.js'

export class PlayView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'playView';
        this.elementsContainer.className = 'playView-elementsContainer';
        this.hudContainer = div({ className: 'playView-hudContainer' }, this.elementsContainer)
        this.cardsContainer = div({ className: 'playView-cardsContainer' }, this.elementsContainer);

        this.clicksText = div({ innerHTML: 'Clicks: 0', className: 'playView-text' }, this.hudContainer);
        this.timerText = div({ innerHTML: 'Time: 0', className: 'playView-text' }, this.hudContainer);
        this.resetBtn = div({ innerHTML: 'reset', className: 'reset-btn' }, this.hudContainer);

    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        cards.forEach(card => {
            let cardView = new CardView(this.cardsContainer, card);
        });
    }

    onResetBtn() {
        this.controller.resetGame();
    }

    updateHUD(clicks, time) {
        this.clicksText.innerHTML = `Clicks: ${clicks}`;
        this.timerText.innerHTML = `Time: ${time}`;
    }
}