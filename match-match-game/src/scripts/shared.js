export class PageRender {
    constructor() {
        this.root = document.querySelector("body");
    }
    render(addChild) {
        this.root.appendChild(addChild);
    }
}
export class CreateInner {
    constructor(elemType, className) {
        this.elemType = elemType;
        this.className = className;
    }
    createElem() {
        const newElem = document.createElement(this.elemType);
        this.className.forEach((e) => {
            newElem.classList.add(e);
        });
        return newElem;
    }
}
export class createInput {
    constructor(elemType, className, msg) {
        this.elemType = elemType;
        this.className = className;
        this.msg = msg;
    }
    createElem() {
        const newElem = document.createElement("input");
        this.className.forEach((e) => {
            newElem.classList.add(e);
        });
        newElem.setAttribute("type", this.elemType);
        if (this.elemType == "text")
            newElem.setAttribute("placeholder", this.msg);
        else
            newElem.setAttribute("value", this.msg);
        return newElem;
    }
}
export class CreateHeader {
    constructor() {
        this.block = document.createElement("header");
        this.block.classList.add("header");
    }
    addInner() {
        const gamePageA = new CreateInner("a", ["gamePage-a"]).createElem();
        gamePageA.setAttribute("href", "./gamePage.html");
        const matchBtn = new createInput("button", ["matchMatch"], "match match").createElem();
        const startGameBtn = new createInput("button", ["startGame"], "start game").createElem();
        gamePageA.appendChild(startGameBtn);
        const nav = "<nav><ul class='nav-list'><a href='./index.html'><li class='nav-item' value='about_game.html'>about game</li></a> <li class='nav-item' value='best_score.html'>best score</li> <a href='./settings.html'><li class='nav-item' value='game_settings.html'>game settings</li></a> </ul></nav>";
        this.block.appendChild(matchBtn);
        this.block.appendChild(gamePageA);
        this.block.innerHTML += nav;
        return this.block;
    }
}
//# sourceMappingURL=shared.js.map