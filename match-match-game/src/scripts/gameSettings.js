import { PageRender, CreateInner, CreateHeader } from "../scripts/shared";
import "../styles/settings.css";
import "../styles/style.css";
const page = new PageRender();
const OPTIONS = ["4", "6", "8"];
export let cardsSize;
const header = new CreateHeader().addInner();
page.render(header);
class GameSettingsMain {
    constructor() {
        this.block = document.createElement("main");
        this.block.classList.add("main");
    }
    createMain() {
        const selectField = new CreateInner("div", ["selectField"]).createElem();
        const select = new CreateInner("div", ["selectField-item"]).createElem();
        const title = new CreateInner("h3", ["difficulty-title"]).createElem();
        title.innerHTML = "Choose difficulty";
        const select1 = new CreateInner("select", ["difficulty"]).createElem();
        const disabledOpt = document.createElement("option");
        disabledOpt.classList.add("difficulty-item");
        disabledOpt.setAttribute('disabled', 'disabled');
        disabledOpt.setAttribute('selected', 'true');
        disabledOpt.innerHTML = "select difficulty";
        select1.appendChild(disabledOpt);
        OPTIONS.map(e => {
            const option = document.createElement("option");
            option.classList.add("difficulty-item");
            option.setAttribute("value", e);
            option.innerHTML = e + "x" + e;
            select1.appendChild(option);
        });
        select.appendChild(title);
        select.appendChild(select1);
        selectField.appendChild(select);
        const comingSoon = document.createElement("div");
        comingSoon.classList.add("comingSoon");
        comingSoon.innerHTML = "coming soon";
        selectField.appendChild(comingSoon);
        this.block.appendChild(selectField);
        return this.block;
    }
}
const main = new GameSettingsMain().createMain();
page.render(main);
document.querySelector(".difficulty").addEventListener("change", (e) => {
    localStorage.setItem("value", String(document.querySelector("select").value));
});
//# sourceMappingURL=gameSettings.js.map