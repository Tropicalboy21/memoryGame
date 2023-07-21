import { div } from '../libs/html.js';
import { View } from './view.js';

export class CardView extends View {
    constructor(parent, card) {
        super(parent);
        this.card = card;
        this.container.className = 'cardView-container';
        this.iconContainer = div({ className: 'cardView cardView-hidden' }, this.container);

        this.iconContainer.innerHTML = this.card.icon;

    }
} 