import { View } from "../view.js";

export class LoginView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'loginView';

        var loginBtn = document.createElement('div');
        this.container.appendChild(loginBtn);
        loginBtn.innerHTML = 'play';
        loginBtn.className = 'btn';
    }

}