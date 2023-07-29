import { ControllerView } from "../controllerView.js";
import { div, p, input } from "../../libs/html.js"

export class LoginView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'loginView';

        var welcomeTxt = div({ className: 'welcome-text' }, this.elementsContainer);
        this.inputLogin = input({ placeholder: 'Username', className: 'input-login' }, this.elementsContainer);
        var loginCaption = p({ innerHTML: 'enter username to play', className: 'login-caption' }, this.elementsContainer)

        var loginBtn = div({ innerHTML: 'play', className: 'btn', onclick: this.playBtn.bind(this) }, this.elementsContainer);
    }

    playBtn() {
        let username = this.inputLogin.value;

        if (username !== '') {
            let event = new CustomEvent('username-entered', {
                detail: {
                    username: username,
                },
                bubbles: true,
                cancelable: true,
                composed: false,
            });
            this.container.dispatchEvent(event);
        } else {

        }
    }

}