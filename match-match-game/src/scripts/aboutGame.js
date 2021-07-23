import { PageRender, CreateInner, createInput, CreateHeader } from "../scripts/shared";
import "../styles/aboutGame.css";
import "../styles/style.css";
const page = new PageRender();
const header = new CreateHeader().addInner();
page.render(header);
class AboutGameMain {
    constructor() {
        this.block = new CreateInner("main", ["main"]).createElem();
    }
    addInner() {
        const title = new CreateInner("h1", [
            "mainTitle",
        ]).createElem();
        title.innerHTML = "How to play?";
        let instructions = createInstructions([
            "Register new player in game",
            "Configure your game settings",
            "Start you new game! Remember card positions and match it before times up.",
        ]);
        const formContainer = new CreateInner("div", ["formContainer"]).createElem();
        formContainer.appendChild(createForm());
        const settingsBtn = new createInput("button", ["settingsBtn"], "game settings").createElem();
        const exampleField = fillExampleField(new CreateInner("div", ["exampleField"]).createElem());
        this.block.appendChild(title);
        instructions.forEach((e) => {
            this.block.appendChild(e);
        });
        this.block.appendChild(formContainer);
        this.block.appendChild(settingsBtn);
        this.block.appendChild(exampleField);
        return this.block;
    }
}
function createInstructions(textsArr) {
    let instructions = [];
    for (let i = 1; i <= 3; i++) {
        const instruct = new CreateInner("div", [
            "instruct",
            `ìnstruct${i}`,
        ]).createElem();
        const instructNum = new CreateInner("div", ["instructNum"]).createElem();
        instructNum.innerHTML = String(i);
        const instructText = new CreateInner("div", ["instructText"]).createElem();
        instructText.innerHTML = textsArr[i - 1];
        instruct.appendChild(instructNum);
        instruct.appendChild(instructText);
        instructions.push(instruct);
    }
    return instructions;
}
function fillExampleField(field) {
    for (let i = 0; i < 16; i++) {
        const img = new Image();
        img.width = 67.5;
        img.height = 67.5;
        if (i != 6 && i != 10) {
            img.src = "./images/close_img.png";
        }
        else
            img.src = "./images/8.jpg";
        field.appendChild(img);
    }
    return field;
}
function createForm() {
    const userForm = new CreateInner("form", ["userForm"]).createElem();
    const firstName = new createInput("text", ["firstName", "formInput"], "first name").createElem();
    const lastName = new createInput("text", ["lastName", "formInput"], "last name").createElem();
    const email = new createInput("text", ["email", "formInput"], "email").createElem();
    email.setAttribute("pattern", "[\w.%+-]+@domain\.com\.ph");
    const btnContainer = new CreateInner("div", ["btnContainer"]).createElem();
    const addUserBtn = new createInput("button", ["formBtn", "addUserBtn"], "ADD USER").createElem();
    const cancelBtn = new createInput("button", ["formBtn", "cancelBtn"], "cancel").createElem();
    btnContainer.appendChild(addUserBtn);
    btnContainer.appendChild(cancelBtn);
    cancelBtn.addEventListener("click", () => {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
    });
    userForm.appendChild(firstName);
    userForm.appendChild(lastName);
    userForm.appendChild(email);
    userForm.appendChild(btnContainer);
    return userForm;
}
page.render(new AboutGameMain().addInner());
document.querySelector(".settingsBtn").addEventListener("click", (e) => {
    window.location.href = "settings.html";
});
//# sourceMappingURL=aboutGame.js.map