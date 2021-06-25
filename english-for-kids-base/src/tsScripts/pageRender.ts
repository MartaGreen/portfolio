import { Card } from "../scripts/cards";
import { cards } from "../scripts/cardsInfo";

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
