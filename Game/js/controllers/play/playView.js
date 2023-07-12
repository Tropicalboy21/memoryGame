import { div } from "../../libs/html.js";
import { View } from "../view.js";

export class PlayView extends View {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'playView';

    }
}