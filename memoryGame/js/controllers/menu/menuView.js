import { View } from "../view.js";

export class MenuView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'menuView';

        var loginBtn = document.createElement('div');
        loginBtn.className = 'menuView-btn';
        this.container.appendChild(loginBtn);

        var img = document.createElement('div');
        img.className = 'icon';
        loginBtn.appendChild(img);


    }
}