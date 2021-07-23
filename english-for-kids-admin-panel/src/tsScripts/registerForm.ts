import { register } from "../../node_modules/ts-node/dist/index";
import { createBtn } from "./shared";
import { createFormField, createCloseFormBtn, createCancelBtn } from "./userForms";

export const createRegisterForm = () => {
  const registerFormCont: HTMLDivElement = document.createElement("div");
  registerFormCont.setAttribute("class", "registerFormCont formContainer");
  
  const userFormBg: HTMLDivElement = document.createElement("div");
  userFormBg.setAttribute("class", "userFormBg");

  const registerForm: HTMLFormElement = document.createElement("form");
  registerForm.setAttribute("method", "POST");
  registerForm.setAttribute("action", "/createUser");

  const usernameField: HTMLInputElement = createFormField("email", "username", "usernameField formField", "username");
  const passField: HTMLInputElement = createFormField("password", "password", "formField passwordField", "password");
  const confirmField: HTMLInputElement = createFormField("password", "confirmation", "confirmField formField", "confirmation");

  const submitRegisterFormBtn: HTMLButtonElement = document.createElement("button");
  submitRegisterFormBtn.setAttribute("class", "submitRegisterFormBtn submitFormBtn");
  submitRegisterFormBtn.setAttribute("type", "submit");

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

  registerFormCont.appendChild(registerForm);
  userFormBg.appendChild(registerFormCont)

  document.body.appendChild(userFormBg);
}