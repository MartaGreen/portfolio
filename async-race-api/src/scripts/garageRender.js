import { BODY, generatePages, createInput } from "../scripts/shared.js";
import { getGarageData } from "../scripts/requests.js";
import { createSettings } from "../scripts/settingsRender.js";
import { moveCar } from "../scripts/moveCarFunc.js";
import { renderRace } from "../scripts/races.js";
import "../styles/races.scss";
let pageNum = 1;
const pagesBtns = () => {
    const btnsCont = document.createElement("div");
    btnsCont.classList.add("pagesBtns");
    btnsCont.innerHTML = `
    ${createInput("button", "pageBtn prev", "prev")}
    ${createInput("button", "pageBtn next", "next")}
  `;
    return btnsCont;
};
getGarageData().then((garageData) => {
    createSettings();
    const RACE_FIELD = document.createElement("div");
    RACE_FIELD.classList.add("raceField");
    BODY.appendChild(RACE_FIELD);
    for (let i = 0; i < garageData.length; i++) {
        renderRace(garageData[i].color, garageData[i].name, garageData[i].id);
    }
    const len = document.querySelectorAll(".raceTrack").length;
    BODY.innerHTML += `
      <div class='garageTitles'>
        <h1 class='garage'>Garage (${len})</h1>
        <h2 class='page' value=${pageNum}>Page #${pageNum}</h2>
      </div>
      `;
    moveCar();
    BODY.appendChild(pagesBtns());
    generatePages((pageNum - 1) * 7, pageNum * 7);
    const nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", () => {
        pageNum += 1;
        generatePages((pageNum - 1) * 7, (pageNum) * 7);
        document.querySelector(".page").setAttribute("value", String(pageNum));
        document.querySelector(".page").innerHTML = `Page #${pageNum}`;
    });
    const prevBtn = document.querySelector(".prev");
    prevBtn.addEventListener("click", () => {
        pageNum -= 1;
        generatePages((pageNum - 1) * 7, (pageNum) * 7);
        document.querySelector(".page").setAttribute("value", String(pageNum));
        document.querySelector(".page").innerHTML = `Page #${pageNum}`;
    });
});
//# sourceMappingURL=garageRender.js.map