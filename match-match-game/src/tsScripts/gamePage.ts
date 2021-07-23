import { PageRender, CreateInner, CreateHeader } from "../scripts/shared";
import "../styles/style.css"
import "../styles/gamePage.css"
const page = new PageRender();

const header: HTMLElement = new CreateHeader().addInner();
page.render(header);

class GameMain {
  main: HTMLElement;
  constructor() {
    this.main = document.createElement("main");
  }

  addInner(): HTMLElement {
    const gameField: HTMLElement = new CreateInner("div", [
      "gameField",
    ]).createElem();
    const timer: HTMLElement = new CreateInner("div", ["timer"]).createElem();
    const gameCards: HTMLElement = new CreateInner("div", [
      "gameCards",
    ]).createElem();

    gameField.appendChild(timer);
    gameField.appendChild(gameCards);

    this.main.appendChild(gameField);

    return this.main;
  }
}

const main: HTMLElement = new GameMain().addInner();
page.render(main);
