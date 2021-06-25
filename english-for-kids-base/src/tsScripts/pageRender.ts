import { Card } from "../scripts/cards";
import { cards } from "../scripts/cardsInfo";
import { openMenu } from "../scripts/pageFunc"

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

const page = () => {
  const main: HTMLElement = document.createElement("main");
  main.setAttribute("class", "main");
  document.body.appendChild(main)

  // header rendering
  const header: HTMLElement = document.createElement("header");
  header.setAttribute("class", "header");

  const burgerMenu: HTMLDivElement = document.createElement("div");
  burgerMenu.setAttribute("class", "burgerMenu");
  for (let i = 0; i < 3; i++) {
    const burgerMenuItem: HTMLDivElement = document.createElement("div");
    burgerMenuItem.setAttribute("class", "burgerMenuItem");
    burgerMenuItem.setAttribute("id", `burgerMenuItem${i+1}`);

    burgerMenu.appendChild(burgerMenuItem);
  }

  header.appendChild(burgerMenu);

  const switchModeContainer : HTMLDivElement = document.createElement("div");
  switchModeContainer.setAttribute("class", "switchModeContainer")

  const switchModeInput: HTMLInputElement = document.createElement("input");
  switchModeInput.setAttribute("class", "switchModeInput");
  switchModeInput.setAttribute("type", "checkbox");

  const switchModeLable: HTMLLabelElement = document.createElement("label");
  switchModeLable.setAttribute("class", "switchModeLable");

  switchModeContainer.appendChild(switchModeInput);
  switchModeContainer.appendChild(switchModeLable);
  header.appendChild(switchModeContainer);

  main.appendChild(header);

  // main page rendering
  const mainPage: HTMLDivElement = document.createElement("div");
  mainPage.setAttribute("class", "page mainPage block");

  CATEGORIES_NAME_CARDS_SRC.forEach((category) => {
    const card: Card = new Card(cards[category].mainImage);
    const cardImg: HTMLCanvasElement = card.render();
    console.log(cards[category].mainImage);

    mainPage.appendChild(cardImg);
    card.flip();
  });

  // categories page rendering
  const categoriesPage: HTMLDivElement = document.createElement("div");
  categoriesPage.setAttribute("class", "categoriesPage block");

  main.appendChild(mainPage);
  main.appendChild(categoriesPage);
};

page();
openMenu();
