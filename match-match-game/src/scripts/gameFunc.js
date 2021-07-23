import "../styles/style.css";
import { Card, openedCardsCounter, numOfComparisons, numOfWrongComparisons } from "../scripts/cards";
import { srcArray } from "../scripts/imagesSrc";
const CARDS_ARR = [];
const CSS_VAR_VAL = {
    4: "148px",
    6: "88px",
    8: "78px",
};
const cardsSize = Number(localStorage["value"]) | 4;
let cardsCount = Math.pow(cardsSize, 2) / 2;
document
    .querySelector("html")
    .style.setProperty("--repeat-val", String(cardsSize));
document
    .querySelector("html")
    .style.setProperty("--grid-size", CSS_VAR_VAL[cardsSize]);
// Перемешиваем массив ссылок
let gameSrcArray = srcArray
    .slice(0, cardsCount)
    .concat(srcArray.slice(0, cardsCount));
function shuffle(gameSrcArray) {
    gameSrcArray.sort(() => Math.random() - 0.5);
}
shuffle(gameSrcArray);
// Создаем массив элементов по перемешанным ссылкам и добавляем их на страницу
for (let i = 0; i < gameSrcArray.length; i++) {
    const card = new Card(gameSrcArray[i]);
    card.createCard();
    CARDS_ARR.push(card);
}
function startTimer() {
    document.querySelector(".gamePage-a").removeAttribute("href");
    document.querySelector(".nav-list").querySelectorAll("a").forEach((e) => {
        e.removeAttribute("href");
    });
    let time = -1;
    document.querySelector(".startGame").setAttribute("value", "stop game");
    var handler = function () {
        if (openedCardsCounter >= cardsCount * 2) {
            finishGame();
            clearInterval(interval);
        }
        else {
            time += 1;
            document.querySelector(".timer").textContent =
                (Math.floor(time / 60) < 10
                    ? "0" + String(Math.floor(time / 60))
                    : String(Math.floor(time / 60))) +
                    ":" +
                    (time % 60 < 10 ? "0" + String(time % 60) : String(time % 60));
        }
    };
    const interval = setInterval(handler, 1000);
    handler();
    startGame();
    stopGame();
}
function startGame() {
    CARDS_ARR.map((e) => {
        e.addListener();
        e.canvContainer.style.cursor = "pointer";
    });
}
function stopGame() {
    document.querySelector(".startGame").addEventListener("click", sureMsg);
}
function sureMsg() {
    const result = confirm("Press OK if you are sure you want to stap a game else press CANCEL");
    if (result) {
        window.location.href = "index.html";
    }
}
function finishGame() {
    const timer = document.querySelector(".timer").innerHTML.split(":");
    const timeInSec = Number(timer[0]) * 60 + Number(timer[1]);
    const userScore = (numOfComparisons - numOfWrongComparisons) * 100 - timeInSec * 10;
    alert(`Congratulations! You've pass the game in ${document.querySelector(".timer").innerHTML}. Your score is ${userScore}`);
    window.location.href = "index.html";
}
startTimer();
//# sourceMappingURL=gameFunc.js.map