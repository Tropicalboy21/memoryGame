import { ControllerView } from "../controllerView.js";

export class AlertView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.container.className = 'alertView';
    }
}