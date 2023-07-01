import { View } from "../view.js";

export class LevelView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'levelView';

        var lowBtn = document.createElement('div');
        this.container.appendChild(lowBtn);
        lowBtn.innerHTML = 'Low';
        lowBtn.className = 'btn';

        var mediumBtn = document.createElement('div');
        this.container.appendChild(mediumBtn);
        mediumBtn.innerHTML = 'Medium';
        mediumBtn.className = 'btn';

        var hardBtn = document.createElement('div');
        this.container.appendChild(hardBtn);
        hardBtn.innerHTML = 'Hard';
        hardBtn.className = 'btn';
    }
}