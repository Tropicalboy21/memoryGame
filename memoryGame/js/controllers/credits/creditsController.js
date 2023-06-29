import { Controller } from "../controller";

export class CreditsController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new CreditsView(this, parent);
    }
}