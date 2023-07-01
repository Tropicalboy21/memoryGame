import { View } from "../view.js";
import { div, p } from "../../libs/html.js"

export class LoginView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginView';

        var welcomeTxt = div({ className: 'welcome-text' }, this.container);
        var loginCaption = p({ innerHTML: 'enter username to play', className: 'login-caption' }, this.container)
        var inputLogin = document.createElement('input');
        this.container.appendChild(inputLogin);
        inputLogin.className = 'input-login';
        inputLogin.setAttribute('id', 'inputLogin');
        document.getElementById('inputLogin').placeHolder = 'username';
        var loginBtn = div({ innerHTML: 'play', className: 'btn' }, this.container);
    }

}