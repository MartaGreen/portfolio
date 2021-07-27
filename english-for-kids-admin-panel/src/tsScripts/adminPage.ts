import { renderCategories, backToCategories, logoutFunc } from "./adminCategories";
import { createNewCategory } from "./adminCategoriesNames"

const createHeader = () => {
  const header: HTMLElement = document.createElement("header");
  header.setAttribute("class", "header");

  const navPanel: HTMLElement = document.createElement("nav");
  navPanel.setAttribute("class", "navPanel");

  const categories: HTMLSpanElement = document.createElement("span");
  categories.setAttribute("class", "categoriesNav navItem");
  categories.innerHTML = "Categories";
  categories.addEventListener("click", backToCategories);
  const words: HTMLSpanElement = document.createElement("span");
  words.setAttribute("class", "words navItem");
  words.innerHTML = "Words";
  navPanel.appendChild(categories);
  navPanel.appendChild(words);

  const logOut: HTMLSpanElement = document.createElement("span");
  logOut.setAttribute("class", "logOut"); 
  logOut.innerHTML = "Log out";
  logOut.addEventListener("click", logoutFunc);

  header.appendChild(navPanel);
  header.appendChild(logOut);

  document.body.appendChild(header);
}

const createMain = () => {
  const main: HTMLElement = document.createElement("main");
  main.setAttribute("class", "main");

  const categoriesBlock: HTMLDivElement = document.createElement("div");
  categoriesBlock.setAttribute("class", "block categoriesBlock visual");

  const cardsBlock: HTMLDivElement = document.createElement("div");
  cardsBlock.setAttribute("class", "block cardsBlock");

  const newCat: createNewCategory = new createNewCategory();
  const renderNewCat: HTMLDivElement = newCat.render();
  categoriesBlock.appendChild(renderNewCat);

  renderCategories(categoriesBlock, renderNewCat);
  main.appendChild(categoriesBlock);
  main.appendChild(cardsBlock);
  document.body.appendChild(main);
}

createHeader();
createMain();