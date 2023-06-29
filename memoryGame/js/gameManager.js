import { MenuController } from "./controllers/menu/menuController.js";
import { ThemesController } from "./controllers/themes/themesController.js";

export class GameManager {
    constructor() {
        var navigationContainer = document.getElementById('navigationContainer');
        var contentContainer = document.getElementById('contentContainer');
        this.title = document.getElementById('navigationContainer-title');
        this.goTo(1);
    }

    goTo(controllerID) {
        switch (controllerID) {
            case 1:
                this.title.innerHTML = 'Home';
                this.controller = new MenuController(this, contentContainer);
                break;
            case 2:
                this.title.innerHTML = 'Difficulty';
                this.controller = new DifficultyController(this, contentContainer);
                break;
            case 3:
                this.title.innerHTML = 'Themes';
                this.controller = new ThemesController(this, contentContainer);
                break;
            default:
                break;
        }
    }
}