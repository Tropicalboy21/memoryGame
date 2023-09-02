export class Service {
    constructor(controller) {
        this.controller = controller;
        this.baseURL = 'https://backend-ten-orpin.vercel.app';
        if (this.controller.gameManager.IS_DEVELOPMENT) {
            this.baseURL = 'http://localhost:3000';
        }
    }
}