import { MenuController } from "./controllers/menu/menuController.js";
import { ThemesController } from "./controllers/themes/themesController.js";
import { LoginController } from "./controllers/login/loginController.js";
import { CreditsController } from "./controllers/credits/creditsController.js";
import { PlayController } from "./controllers/play/playController.js";
import { LevelController } from "./controllers/level/levelController.js";
import { ScoresController } from "./controllers/scores/scoresController.js"
import { MENU_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE, LEVEL_STATE, THEMES_STATE, CREDITS_STATE, DIFFICULTY_LOW, DIFFICULTY_MEDIUM, DIFFICULTY_HIGH, THEME_FACES, THEME_FOOD, THEME_FLAGS } from "./libs/constants.js";


export class GameManager {
    constructor() {
        this.difficulty = DIFFICULTY_LOW;
        this.theme = THEME_FOOD;
        this.username = '';

        this.controller = null;
        this.navigationContainer = document.getElementById('navigationContainer');
        this.contentContainer = document.getElementById('contentContainer');
        this.backBtn = document.getElementById('navigationContainer-back-button');
        this.title = document.getElementById('navigationContainer-title');
        this.backBtn.onclick = this.goto.bind(this, MENU_STATE);

        this.menuController = new MenuController(this, this.contentContainer);
        this.presenting(MENU_STATE);

        window.contentContainer.addEventListener('home-button-click', (event) => {
            this.presenting(event.detail.state);
        })

        window.contentContainer.addEventListener('hide-complete', (event) => {
            this.presenting(event.detail.state);
        });

        window.contentContainer.addEventListener('save-difficulty', (event) => {
            this.difficulty = event.detail.difficulty;
            this.saveDifficulty()
        });

        window.contentContainer.addEventListener('save-theme', (event) => {
            this.theme = event.detail.theme;
            this.saveTheme();
            this.loadTheme();

        })

        window.addEventListener('username-entered', (event) => {
            this.username = event.detail.username;
            this.saveUsername();
            this.goto(MENU_STATE);
        })

        this.loadDifficulty();
        this.loadTheme();
        this.loadUsername();

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
                this.title.className = 'title-menu';
                this.backBtn.classList.add('hidden');
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
            this.presenting(state);

        } else {
            this.controller.hide(state);

        }
    }

    loadDifficulty() {
        if (localStorage.getItem('difficulty')) {
            this.difficulty = localStorage.getItem('difficulty');
        }
    }

    saveDifficulty() {
        localStorage.setItem('difficulty', this.difficulty);
    }

    loadTheme() {
        if (localStorage.getItem('theme')) {
            this.theme = localStorage.getItem('theme');
        }
    }

    saveTheme() {
        localStorage.setItem('theme', this.theme);
    }

    saveUsername() {
        localStorage.setItem('username', this.username);
    }

    loadUsername() {
        if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
            console.log('USERNAME:', this.username);
        }
    }

}