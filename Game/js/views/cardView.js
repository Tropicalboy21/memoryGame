import { div } from '../libs/html.js';
import { View } from './view.js';

export class CardView extends View {
    constructor(parent, card) {
        super(parent);
        this.card = card;
        this.container.className = 'cardView-container';
        this.iconContainer = div({ className: 'cardView cardView-hidden' }, this.container);
        this.container.onclick = this.onSelected.bind(this);

        window.addEventListener('show-card-on-discovered', (event) => {
            this.showOnDiscovered();
        });

        window.addEventListener('hide-selected-card', (event) => {
            this.hide();
        });

        window.addEventListener('show-card-on-selected', (event) => {
            this.showOnSelected();
        });
    }

    onSelected() {
        this.card.isSelected = true;
        var event = new CustomEvent('card-selected', {
            detail: {
                card: this.card,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }

    showOnSelected() {
        if (this.card.isSelected) {
            this.container.classList.add('is-flipped');
            this.container.classList.add('cardView-selected');
            this.iconContainer.innerHTML = this.card.icon;
        }
    }

    showOnDiscovered() {
        if (this.card.isSelected && !this.card.isDiscovered) {
            this.card.isDiscovered = true;
            this.container.classList.add('cardView-discovered');
            this.container.onclick = null;
        }
    }

    hide() {
        if (this.card.isSelected && !this.card.isDiscovered) {
            this.card.isSelected = false;
            this.iconContainer.innerHTML = '';
            this.card.isDiscovered = false;
            this.container.classList.add('is-flipped-back');
            this.container.classList.remove('cardView-selected');
        }
    }
} 