import { CategoryName, CategoryCard } from "../scripts/cards";
import { cards } from "../scripts/cardsInfo";
import { openMenu } from "../scripts/pageFunc";
import { createPlayBtn } from "../scripts/playBtn";

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

const renderSitchMode = () => {
  const switchMode: HTMLLabelElement = document.createElement("label");
  switchMode.setAttribute("class", "switchMode");

  const switchModeInput: HTMLInputElement = document.createElement("input");
  switchModeInput.setAttribute("class", "switchModeInput");
  switchModeInput.setAttribute("type", "checkbox");

  const switchModeSpan: HTMLSpanElement = document.createElement("span");
  switchModeSpan.setAttribute("class", "switchModeSpan");

  switchMode.appendChild(switchModeInput);
  switchMode.appendChild(switchModeSpan);

  return switchMode;
};

const pageHeader = () => {
  // header rendering
  const header: HTMLElement = document.createElement("header");
  header.setAttribute("class", "header");

  const burgerMenu: HTMLDivElement = document.createElement("div");
  burgerMenu.setAttribute("class", "burgerMenu");
  for (let i = 0; i < 3; i++) {
    const burgerMenuItem: HTMLDivElement = document.createElement("div");
    burgerMenuItem.setAttribute("class", "burgerMenuItem");
    burgerMenuItem.setAttribute("id", `burgerMenuItem${i + 1}`);

    burgerMenu.appendChild(burgerMenuItem);
  }

  header.appendChild(burgerMenu);

  const switchMode: HTMLLabelElement = renderSitchMode();
  header.appendChild(switchMode);

  document.body.appendChild(header);
};

const createMenuNavItem = (
  category: string,
  navMenu: HTMLElement,
  categoryClass: string
) => {
  const navMenuItem = document.createElement("li");
  navMenuItem.setAttribute("class", categoryClass);
  navMenuItem.setAttribute("id", `${category.split(" ").join("_")}_nav`);
  navMenuItem.innerHTML = category;

  navMenu.appendChild(navMenuItem);
};

const createMenu = () => {
  const menu: HTMLDivElement = document.createElement("div");
  menu.setAttribute("class", "menu");
  const navMenu: HTMLElement = document.createElement("ul");
  navMenu.setAttribute("class", "navMenu");

  createMenuNavItem("Main Page", navMenu, "navMenuItem navMenuItemActive");

  CATEGORIES_NAME_CARDS_SRC.forEach((category) => {
    createMenuNavItem(category, navMenu, "navMenuItem");
  });
  menu.appendChild(navMenu);

  document.body.appendChild(menu);
};

const pageMain = () => {
  const main: HTMLElement = document.createElement("main");
  main.setAttribute("class", "main");
  document.body.appendChild(main);

  // main page rendering
  const mainPageCont: HTMLDivElement = document.createElement("div");
  mainPageCont.setAttribute("class", "mainPageCont page blockCont");
  const mainPage: HTMLDivElement = document.createElement("div");
  mainPage.setAttribute("class", "mainPage block");
  mainPageCont.appendChild(mainPage);

  CATEGORIES_NAME_CARDS_SRC.forEach((category) => {
    const card: CategoryName = new CategoryName(
      cards[category].mainImage,
      category
    );
    const cardImg: HTMLCanvasElement = card.render();
    CATEGORIES_NAMES.push(card);

    CATEGORY_CARDS[category] = [];

    const categoryCardsInfo = cards[category].data;
    categoryCardsInfo.forEach((categoryCardInfo) => {
      const createCard = new CategoryCard(
        categoryCardInfo.image,
        categoryCardInfo.word,
        categoryCardInfo.translation,
        categoryCardInfo.audioSrc
      );
      CATEGORY_CARDS[category].push(createCard);
    });

    mainPage.appendChild(cardImg);
    card.loadCategoryCards();
  });

  // categories page rendering
  const categoriesPageCont: HTMLDivElement = document.createElement("div");
  categoriesPageCont.setAttribute("class", "categoriesPageCont blockCont");
  const categoriesPage: HTMLDivElement = document.createElement("div");
  categoriesPage.setAttribute("class", "categoriesPage block");

  const playBtn: HTMLInputElement = createPlayBtn();
  categoriesPageCont.appendChild(playBtn);

  main.appendChild(mainPageCont);
  categoriesPageCont.appendChild(categoriesPage);
  main.appendChild(categoriesPageCont);
};

createMenu();
pageHeader();
pageMain();
openMenu();
