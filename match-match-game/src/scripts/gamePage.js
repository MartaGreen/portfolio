import { PageRender, CreateInner, CreateHeader } from "../scripts/shared";
import "../styles/style.css";
import "../styles/gamePage.css";
const page = new PageRender();
const header = new CreateHeader().addInner();
page.render(header);
class GameMain {
    constructor() {
        this.main = document.createElement("main");
    }
    addInner() {
        const gameField = new CreateInner("div", [
            "gameField",
        ]).createElem();
        const timer = new CreateInner("div", ["timer"]).createElem();
        const gameCards = new CreateInner("div", [
            "gameCards",
        ]).createElem();
        gameField.appendChild(timer);
        gameField.appendChild(gameCards);
        this.main.appendChild(gameField);
        return this.main;
    }
}
const main = new GameMain().addInner();
page.render(main);
//# sourceMappingURL=gamePage.js.map