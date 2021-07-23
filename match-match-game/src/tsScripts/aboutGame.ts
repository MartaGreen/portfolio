import { PageRender, CreateInner, createInput, CreateHeader } from "../scripts/shared";

import "../styles/aboutGame.css";
import "../styles/style.css"

const page = new PageRender();
const header: HTMLElement = new CreateHeader().addInner();
page.render(header);

class AboutGameMain {
  block: HTMLElement;
  constructor() {
    this.block = new CreateInner("main", ["main"]).createElem();
  }

  addInner() {
    const title: HTMLElement = new CreateInner("h1", [
      "mainTitle",
    ]).createElem();
    title.innerHTML = "How to play?";

    let instructions: HTMLElement[] = createInstructions([
      "Register new player in game",
      "Configure your game settings",
      "Start you new game! Remember card positions and match it before times up.",
    ]);

    const formContainer: HTMLElement = new CreateInner("div", ["formContainer"]).createElem();
    formContainer.appendChild(createForm());

    const settingsBtn: HTMLElement = new createInput("button", ["settingsBtn"], "game settings").createElem();

    const exampleField: HTMLElement = fillExampleField(new CreateInner("div", ["exampleField"]).createElem());

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

function createInstructions(textsArr: string[]): HTMLElement[] {
  let instructions: HTMLElement[] = [];

  for (let i = 1; i <= 3; i++) {
    const instruct: HTMLElement = new CreateInner("div", [
      "instruct",
      `ìnstruct${i}`,
    ]).createElem();
    const instructNum: HTMLElement = new CreateInner("div", ["instructNum"]).createElem();
    instructNum.innerHTML = String(i);
    const instructText: HTMLElement = new CreateInner("div", ["instructText"]).createElem();
    instructText.innerHTML = textsArr[i-1];

    instruct.appendChild(instructNum);
    instruct.appendChild(instructText);

    instructions.push(instruct);
  }

  return instructions;
}

function fillExampleField(field: HTMLElement): HTMLElement {
  for (let i = 0; i < 16; i++) {
    const img: HTMLImageElement = new Image();
    img.width = 67.5;
    img.height = 67.5;
    if (i != 6 && i != 10) {
      img.src = "./images/close_img.png";
    }
    else img.src = "./images/8.jpg";

    field.appendChild(img);
  }
  return field;
}

function createForm(): HTMLElement {
  const userForm: HTMLElement = new CreateInner("form", ["userForm"]).createElem();

  const firstName: HTMLInputElement = new createInput("text", ["firstName", "formInput"], "first name").createElem();
  const lastName: HTMLInputElement = new createInput("text", ["lastName", "formInput"], "last name").createElem();
  const email: HTMLInputElement = new createInput("text", ["email", "formInput"], "email").createElem();
  email.setAttribute("pattern", "[\w.%+-]+@domain\.com\.ph");

  const btnContainer: HTMLElement = new CreateInner("div", ["btnContainer"]).createElem();
  const addUserBtn: HTMLElement = new createInput("button", ["formBtn", "addUserBtn"], "ADD USER").createElem();
  const cancelBtn: HTMLElement = new createInput("button", ["formBtn", "cancelBtn"], "cancel").createElem();
  btnContainer.appendChild(addUserBtn);
  btnContainer.appendChild(cancelBtn);

  cancelBtn.addEventListener("click", () => {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
  })

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