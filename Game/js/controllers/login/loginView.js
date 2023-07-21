import { ControllerView } from "../controllerView.js";
import { div, p } from "../../libs/html.js"

export class LoginView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'loginView';

        var welcomeTxt = div({ className: 'welcome-text' }, this.elementsContainer);
        var loginCaption = p({ innerHTML: 'enter username to play', className: 'login-caption' }, this.elementsContainer)
        var inputLogin = document.createElement('input');
        this.elementsContainer.appendChild(inputLogin);
        inputLogin.className = 'input-login';
        inputLogin.setAttribute('id', 'inputLogin');
        document.getElementById('inputLogin').placeholder = 'username';
        var loginBtn = div({ innerHTML: 'play', className: 'btn' }, this.elementsContainer);
    }

}