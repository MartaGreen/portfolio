export class PageRender {
  root: HTMLElement;
  constructor() {
    this.root = document.querySelector("body");
  }

  render(addChild: HTMLElement): void {
    this.root.appendChild(addChild);
  }
}

export class CreateInner {
  elemType: string;
  className: string[];
  constructor(elemType: string, className: string[]) {
    this.elemType = elemType;
    this.className = className;
  }
  createElem(): HTMLElement {
    const newElem: HTMLElement = document.createElement(this.elemType);
    this.className.forEach((e) => {
      newElem.classList.add(e);
    });
    return newElem;
  }
}

export class createInput {
  elemType: string;
  className: string[];
  msg: string;
  constructor(elemType: string, className: string[], msg: string) {
    this.elemType = elemType;
    this.className = className;
    this.msg = msg;
  }
  createElem(): HTMLElement {
    const newElem: HTMLElement = document.createElement("input");
    this.className.forEach((e) => {
      newElem.classList.add(e);
    });
    newElem.setAttribute("type", this.elemType);
    if (this.elemType == "text") newElem.setAttribute("placeholder", this.msg);
    else newElem.setAttribute("value", this.msg);
    return newElem;
  }
}

export class CreateHeader {
  block: HTMLElement;
  constructor() {
    this.block = document.createElement("header");
    this.block.classList.add("header");
  }

  addInner(): HTMLElement {
    const gamePageA: HTMLElement = new CreateInner(
      "a",
      ["gamePage-a"],
    ).createElem();
    gamePageA.setAttribute("href", "./gamePage.html");
    const matchBtn: HTMLElement = new createInput(
      "button",
      ["matchMatch"],
      "match match"
    ).createElem();
    const startGameBtn: HTMLElement = new createInput(
      "button",
      ["startGame"],
      "start game"
    ).createElem();
    gamePageA.appendChild(startGameBtn);
    const nav: string =
      "<nav><ul class='nav-list'><a href='./index.html'><li class='nav-item' value='about_game.html'>about game</li></a> <li class='nav-item' value='best_score.html'>best score</li> <a href='./settings.html'><li class='nav-item' value='game_settings.html'>game settings</li></a> </ul></nav>";
    this.block.appendChild(matchBtn);
    this.block.appendChild(gamePageA);
    this.block.innerHTML += nav;
    return this.block;
  }
}
