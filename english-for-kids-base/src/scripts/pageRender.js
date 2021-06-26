import { Category } from "../scripts/cards";
import { cards } from "../scripts/cardsInfo";
import { openMenu } from "../scripts/pageFunc";
const CATEGORIES_NAME_CARDS_SRC = [
    "emotions",
    "actions",
    "illnesses",
    "clothes",
    "animals",
    "food",
    "colors",
    "transports",
];
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
    const switchModeContainer = document.createElement("div");
    switchModeContainer.setAttribute("class", "switchModeContainer");
    const switchModeInput = document.createElement("input");
    switchModeInput.setAttribute("class", "switchModeInput");
    switchModeInput.setAttribute("type", "checkbox");
    const switchModeLable = document.createElement("label");
    switchModeLable.setAttribute("class", "switchModeLable");
    switchModeContainer.appendChild(switchModeInput);
    switchModeContainer.appendChild(switchModeLable);
    header.appendChild(switchModeContainer);
    document.body.appendChild(header);
};
const pageMain = () => {
    const main = document.createElement("main");
    main.setAttribute("class", "main");
    document.body.appendChild(main);
    // main page rendering
    const mainPage = document.createElement("div");
    mainPage.setAttribute("class", "page mainPage block");
    CATEGORIES_NAME_CARDS_SRC.forEach((category) => {
        const card = new Category(cards[category].mainImage, category);
        const cardImg = card.render();
        console.log(cards[category].mainImage);
        mainPage.appendChild(cardImg);
        card.loadCategoryCards();
    });
    // categories page rendering
    const categoriesPage = document.createElement("div");
    categoriesPage.setAttribute("class", "categoriesPage block");
    main.appendChild(mainPage);
    main.appendChild(categoriesPage);
};
pageHeader();
pageMain();
openMenu();
//# sourceMappingURL=pageRender.js.map