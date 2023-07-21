import { ControllerView } from "../controllerView.js";
import { div } from "../../libs/html.js";
import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MEDIUM } from "../../libs/constants.js";

export class LevelView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'levelView';

        div({ innerHTML: 'Low', className: 'btn', onclick: this.onButtonClick.bind(this, DIFFICULTY_LOW) }, this.elementsContainer);


        div({ innerHTML: 'Medium', className: 'btn', onclick: this.onButtonClick.bind(this, DIFFICULTY_MEDIUM) }, this.elementsContainer);


        div({ innerHTML: 'Hard', className: 'btn', onclick: this.onButtonClick.bind(this, DIFFICULTY_HIGH) }, this.elementsContainer);
    }

    onButtonClick(difficulty) {
        var event = new CustomEvent('save-difficulty', {
            detail: {
                difficulty: difficulty,
            },
            bubbles: true,
            cancelable: true,
            composed: false,
        });
        this.container.dispatchEvent(event);
    }
}