import { CategoryName, CategoryCard } from "../scripts/cards";
import { cards } from "../scripts/cardsInfo";
import { openMenu } from "../scripts/pageFunc";
import { createPlayBtn } from "../scripts/playBtn";
import { createAudio } from "./cards";
const CATEGORIES_NAME_CARDS_SRC = [
    "emotions",
    "actions",
    "diseases",
    "clothes",
    "animals",
    "food",
    "colors",
    "transport",
];
export const CATEGORIES_NAMES = [];
export const CATEGORY_CARDS = {};
const createAttemptSound = (cls, audioSrc) => {
    const attempt = document.createElement("audio");
    attempt.setAttribute("class", cls);
    attempt.src = audioSrc;
    return attempt;
};
const createAttemptsSounds = () => {
    const correctAttempt = createAttemptSound("correctAttempt", "./sounds/correctAttemptSound.mp3");
    const failAttempt = createAttemptSound("failAttempt", "./sounds/failAttemptSound.mp3");
    const main = document.querySelector("main");
    main.appendChild(correctAttempt);
    main.appendChild(failAttempt);
};
const renderSitchMode = () => {
    const switchMode = document.createElement("label");
    switchMode.setAttribute("class", "switchMode");
    const switchModeInput = document.createElement("input");
    switchModeInput.setAttribute("class", "switchModeInput");
    switchModeInput.setAttribute("type", "checkbox");
    const switchModeSpan = document.createElement("span");
    switchModeSpan.setAttribute("class", "switchModeSpan");
    switchMode.appendChild(switchModeInput);
    switchMode.appendChild(switchModeSpan);
    return switchMode;
};
const createFinish = () => {
    const finishBlock = document.createElement("div");
    finishBlock.setAttribute("class", "finish");
    const correctFinish = createAudio("./sounds/correctFinishSound.mp3", ["correctFinish"]);
    const failFinish = createAudio("mp3/Ovation-Mike_Koenig-1061486511.mp3", ["failFinish"]);
    finishBlock.appendChild(correctFinish);
    finishBlock.appendChild(failFinish);
    document.body.appendChild(finishBlock);
};
const pageHeader = () => {
    // header rendering
    const header = document.createElement("header");
    header.setAttribute("class", "header");
    const burgerMenu = document.createElement("div");
    burgerMenu.setAttribute("class", "burgerMenu");
    for (let i = 0; i < 3; i++) {
        const burgerMenuItem = document.createElement("div");
        burgerMenuItem.setAttribute("class", "burgerMenuItem");
        burgerMenuItem.setAttribute("id", `burgerMenuItem${i + 1}`);
        burgerMenu.appendChild(burgerMenuItem);
    }
    header.appendChild(burgerMenu);
    const switchMode = renderSitchMode();
    header.appendChild(switchMode);
    document.body.appendChild(header);
};
const createMenuNavItem = (category, navMenu, categoryClass) => {
    const navMenuItem = document.createElement("li");
    navMenuItem.setAttribute("class", categoryClass);
    navMenuItem.setAttribute("id", `${category.split(" ").join("_")}_nav`);
    navMenuItem.innerHTML = category;
    navMenu.appendChild(navMenuItem);
};
const createMenu = () => {
    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    const navMenu = document.createElement("ul");
    navMenu.setAttribute("class", "navMenu");
    createMenuNavItem("Main Page", navMenu, "navMenuItem navMenuItemActive");
    CATEGORIES_NAME_CARDS_SRC.forEach((category) => {
        createMenuNavItem(category, navMenu, "navMenuItem");
    });
    menu.appendChild(navMenu);
    document.body.appendChild(menu);
};
const pageMain = () => {
    const main = document.createElement("main");
    main.setAttribute("class", "main");
    document.body.appendChild(main);
    // main page rendering
    const mainPageCont = document.createElement("div");
    mainPageCont.setAttribute("class", "mainPageCont page blockCont");
    const mainPage = document.createElement("div");
    mainPage.setAttribute("class", "mainPage block");
    mainPageCont.appendChild(mainPage);
    CATEGORIES_NAME_CARDS_SRC.forEach((category) => {
        const card = new CategoryName(cards[category].mainImage, category);
        const cardImg = card.render();
        CATEGORIES_NAMES.push(card);
        CATEGORY_CARDS[category] = [];
        const categoryCardsInfo = cards[category].data;
        categoryCardsInfo.forEach((categoryCardInfo) => {
            const createCard = new CategoryCard(categoryCardInfo.image, categoryCardInfo.word, categoryCardInfo.translation, categoryCardInfo.audioSrc);
            CATEGORY_CARDS[category].push(createCard);
        });
        mainPage.appendChild(cardImg);
        card.loadCategoryCards();
    });
    // categories page rendering
    const categoriesPageCont = document.createElement("div");
    categoriesPageCont.setAttribute("class", "categoriesPageCont blockCont");
    const categoriesPage = document.createElement("div");
    categoriesPage.setAttribute("class", "categoriesPage block");
    main.appendChild(mainPageCont);
    categoriesPageCont.appendChild(categoriesPage);
    main.appendChild(categoriesPageCont);
    const playBtn = createPlayBtn();
    categoriesPageCont.appendChild(playBtn);
    createAttemptsSounds();
};
createFinish();
createMenu();
pageHeader();
pageMain();
openMenu();
//# sourceMappingURL=pageRender.js.map