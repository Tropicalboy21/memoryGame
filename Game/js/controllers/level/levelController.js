import { Controller } from "../controller.js";
import { LevelView } from "./levelView.js";

export class LevelController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new LevelView(this, parent);
    }
}