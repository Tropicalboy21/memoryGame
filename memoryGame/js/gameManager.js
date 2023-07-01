import { MenuController } from "./controllers/menu/menuController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { CreditsController } from "./controllers/credits/creditsController.js";
import { PlayController } from "./controllers/play/playController.js";
import { LevelController } from "./controllers/level/levelController.js";
import { ScoresController } from "./controllers/scores/scoresController.js"
import { MENU_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, LEVEL_STATE, THEMES_STATE, CREDITS_STATE, } from "./libs/constants.js";


export class GameManager {
    constructor() {
        this.controller = null;
        this.navigationContainer = document.getElementById('navigationContainer');
        this.contentContainer = document.getElementById('contentContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.backBtn.onclick = this.goto.bind(this, MENU_STATE);

        this.menuController = new MenuController(this, this.contentContainer);
        this.presenting(MENU_STATE);
    }

    presenting(state) {
        if (this.controller !== null) {
            this.controller.delete();
            this.controller = null;
        }

        this.backBtn.classList.remove('hidden');

        switch (state) {
            case CREDITS_STATE:
                this.title.className = 'title-credits';
                this.controller = new CreditsController(this, this.contentContainer);
                break;
            case LEVEL_STATE:
                this.title.className = 'title-level';
                this.controller = new LevelController(this, this.contentContainer);
                break;
            case MENU_STATE:
                this.backBtn.classList.add('hidden');
                this.title.className = 'title-menu';
                break;
            case LOGIN_STATE:
                this.title.className = 'title-login';
                this.controller = new LoginController(this, this.contentContainer);
                break;
            case PLAY_STATE:
                this.title.className = 'title-play';
                this.controller = new PlayController(this, this.contentContainer);
                break;
            case SCORES_STATE:
                this.title.className = 'title-scores';
                this.controller = new ScoresController(this, this.contentContainer);
                break;
            case THEMES_STATE:
                this.title.className = 'title-themes';
                this.controller = new ThemesController(this, this.contentContainer);
                break;
            default:
                break;
        }
    }

    goto(state) {
        if (this.controller !== null) {
            this.controller.hide(this.presenting.bind(this, state));
        } else {
            this.presenting(state);
        }
    }
}