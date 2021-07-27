import { register } from "../../node_modules/ts-node/dist/index";
import { createBtn } from "./shared";
import { createFormField, createCloseFormBtn, createCancelBtn, submitFunc } from "./userForms";

export const createRegisterForm = () => {
  const registerFormCont: HTMLDivElement = document.createElement("div");
  registerFormCont.setAttribute("class", "registerFormCont formContainer");
  
  const userFormBg: HTMLDivElement = document.createElement("div");
  userFormBg.setAttribute("class", "userFormBg");

  const registerForm: HTMLFormElement = document.createElement("form");

  const usernameField: HTMLInputElement = createFormField("email", "username", "usernameField formField", "username");
  const passField: HTMLInputElement = createFormField("password", "password", "formField passwordField", "password");
  const confirmField: HTMLInputElement = createFormField("password", "confirmation", "confirmField formField", "confirmation");

  const submitRegisterFormBtn: HTMLInputElement = createBtn("submitRegisterFormBtn submitFormBtn", "register");
  submitFunc(submitRegisterFormBtn);

  const closeFormBtn: HTMLDivElement = createCloseFormBtn();
  const cancelBtn: HTMLInputElement = createCancelBtn();

  const fieldsCont: HTMLDivElement = document.createElement("div");
  fieldsCont.setAttribute("class", "fieldsCont");

  fieldsCont.appendChild(usernameField);
  fieldsCont.appendChild(passField);
  fieldsCont.appendChild(confirmField);

  registerForm.appendChild(fieldsCont);
  registerForm.appendChild(submitRegisterFormBtn);
  registerForm.appendChild(closeFormBtn);
  registerForm.appendChild(cancelBtn);

  const msg: HTMLDivElement = document.createElement("div");
  msg.classList.add("msg");
  msg.innerHTML = "Доделываю админ панель. Пожалуйста, подождите :)"
  registerFormCont.appendChild(msg);

  registerFormCont.appendChild(registerForm);
  userFormBg.appendChild(registerFormCont)

  document.body.appendChild(userFormBg);
}