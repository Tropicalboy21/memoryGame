import { ControllerView } from "../controllerView.js";
import { div, p } from "../../libs/html.js"

export class CreditsView extends ControllerView {
    constructor(controller, parent) {
        super(controller, parent);
        this.elementsContainer.className = 'creditsView';

        var gameName = div({ className: 'game-name' }, this.elementsContainer);

        var link = document.createElement('a');
        link.innerHTML = 'Lenin Ugalde';
        link.className = 'link';
        link.href = "https://github.com/Tropicalboy21?tab=overview&from=2023-06-01&to=2023-06-30";

        var date = document.createElement('a');
        date.innerHTML = ' Jul 1, 2023.';
        date.className = 'date';

        var creditsTxt = document.createElement('h1');
        creditsTxt.className = 'credits-text';
        this.elementsContainer.appendChild(creditsTxt);
        creditsTxt.innerHTML = 'Design & Developed by ';
        creditsTxt.appendChild(link);
        creditsTxt.appendChild(date);

        var footer = div({ innerHTML: 'All Rights reserved © Lenin UGalde 2023', className: 'footer' }, this.elementsContainer)



    }
}