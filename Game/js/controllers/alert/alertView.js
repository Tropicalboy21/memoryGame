import { View } from "../../views/view.js";
import { ControllerView } from "../controllerView.js";
import { div, p } from "../../libs/html.js";
import { MENU_STATE, PLAY_STATE } from "../../libs/constants.js";




export class AlertView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'alertView';
        this.alert = div({ className: 'alert' }, this.container);
        this.iconContainer = div({ className: 'buttons-container' }, this.alert)
        this.icon = div({ className: 'icon' }, this.iconContainer)
        this.text = div({ className: 'alert-text', innerHTML: 'Amazing work!' }, this.alert);
        this.buttonsContainer = div({ className: 'buttons-container' }, this.alert)
        this.resetBtn = div({ innerHTML: 'Menu', className: 'reset-btn', onclick: this.onButtonClick.bind(this, MENU_STATE) }, this.buttonsContainer);
        this.resetBtn = div({ innerHTML: 'Reset', className: 'reset-btn', onclick: this.onResetBtn.bind(this, PLAY_STATE) }, this.buttonsContainer);
    }

    onButtonClick(state) {
        var event = new CustomEvent('home-button-click', {
            detail: {
                state: state,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }

    onResetBtn(state) {
        var event = new CustomEvent('reset-button-click', {
            detail: {
                state: state,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }

}