import { ControllerView } from "../controllerView.js";
import { div } from "../../libs/html.js"
import { CREDITS_STATE, LEVEL_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "../../libs/constants.js";


export class MenuView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.id = 'menuView';
        this.elementsContainer.className = 'menuView-elementsContainer';

        var loginBtn = div({ className: 'login-btn', onclick: this.onButtonClick.bind(this, LOGIN_STATE) }, this.elementsContainer);
        var playBtn = div({ className: 'play-btn', onclick: this.onButtonClick.bind(this, PLAY_STATE) }, this.elementsContainer);
        var scoresBtn = div({ className: 'scores-btn', onclick: this.onButtonClick.bind(this, SCORES_STATE) }, this.elementsContainer);
        var levelBtn = div({ className: 'level-btn', onclick: this.onButtonClick.bind(this, LEVEL_STATE) }, this.elementsContainer);
        var themesBtn = div({ className: 'themes-btn', onclick: this.onButtonClick.bind(this, THEMES_STATE) }, this.elementsContainer);
        var creditsBtn = div({ className: 'credits-btn', onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, this.elementsContainer);


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
}