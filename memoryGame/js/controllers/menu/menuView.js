import { View } from "../view.js";
import { div, p } from "../../libs/html.js"

export class MenuView extends View {
    constructor(controller, parent, img) {
        super(controller, parent);
        this.container.className = 'menuView';

        var loginBtn = div({ className: 'login-btn' }, this.container);
        var playBtn = div({ className: 'play-btn' }, this.container);
        var scoresBtn = div({ className: 'scores-btn' }, this.container);
        var levelBtn = div({ className: 'level-btn' }, this.container);
        var themesBtn = div({ className: 'themes-btn' }, this.container);
        var creditsBtn = div({ className: 'credits-btn' }, this.container);


    }
}