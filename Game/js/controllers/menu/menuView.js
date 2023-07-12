import { View } from "../view.js";
import { div } from "../../libs/html.js"
import { CREDITS_STATE, LEVEL_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, THEMES_STATE } from "../../libs/constants.js";


export class MenuView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuView';

        var loginBtn = div({ className: 'login-btn', onclick: this.onButtonClick.bind(this, LOGIN_STATE) }, this.container);
        var playBtn = div({ className: 'play-btn', onclick: this.onButtonClick.bind(this, PLAY_STATE) }, this.container);
        var scoresBtn = div({ className: 'scores-btn', onclick: this.onButtonClick.bind(this, SCORES_STATE) }, this.container);
        var levelBtn = div({ className: 'level-btn', onclick: this.onButtonClick.bind(this, LEVEL_STATE) }, this.container);
        var themesBtn = div({ className: 'themes-btn', onclick: this.onButtonClick.bind(this, THEMES_STATE) }, this.container);
        var creditsBtn = div({ className: 'credits-btn', onclick: this.onButtonClick.bind(this, CREDITS_STATE) }, this.container);


    }

    onButtonClick(state, event) {
        this.controller.goto(state);
    }
}