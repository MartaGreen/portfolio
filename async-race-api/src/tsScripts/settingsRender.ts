import { BODY, createInput } from "../scripts/shared.js";

import "../styles/settings.scss";

export const createSettings = () => {
  BODY.innerHTML += createInput("button", "navBtn toGarage", "to garage");
  BODY.innerHTML += createInput("button", "navBtn toWinners", "to winners");

  const setFields: HTMLElement = document.createElement("div");
  setFields.classList.add("settingsFields");

  setFields.innerHTML += `<div class='createCar settingsField'>
  ${createInput("text", "carName createCarName", "")}
  ${createInput("color", "carColor createCarColor", "")}
  ${createInput("button", "carBtn create", "create")}
</div>`;
  setFields.innerHTML += `<div class='updateCar settingsField notActive'>
  ${createInput("text", "carName updateCarName", "")}
  ${createInput("color", "carColor updateCarColor", "")}
  ${createInput("button", "carBtn update", "update")}
</div>`;
setFields.innerHTML += `<div class='deleteCars settingsField'>
  ${createInput("text", "carName deleteCarCount", "")}
  ${createInput("button", "carBtn delete", "delete")}
</div>`;
  setFields.innerHTML += `<div class='settingsBtnContainer'>
  ${createInput("button", "settingsBtn race", "race")}
  ${createInput("button", "settingsBtn reset", "reset")}
  ${createInput("button", "settingsBtn generate", "generate cars")}
</div>`;

  BODY.appendChild(setFields);
};
