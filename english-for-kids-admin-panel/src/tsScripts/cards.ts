import { CATEGORY_CARDS, CATEGORIES_NAMES } from "../scripts/pageRender";
import { createCard } from "./shared";

function createCardName(canvContainer: HTMLDivElement, name: string) {
  const cardName: HTMLDivElement = document.createElement("div");
  cardName.setAttribute("class", "cardName");
  cardName.innerHTML = name.split("_").join(" ");

  canvContainer.appendChild(cardName);
}

export function createAudio(src: string, classes: string[]) {
  const newAudio: HTMLAudioElement = document.createElement("audio");
  newAudio.src = src;
  classes.forEach((cls) => newAudio.classList.add(cls));

  return newAudio;
}

function createFlipBtn() {
  const flipBtn: HTMLDivElement = document.createElement("div");
  flipBtn.setAttribute("class", "flipBtn");
  flipBtn.innerHTML = `<?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg class='flipBtnImg' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="25px" height="25px" viewBox="0 0 414.161 414.162" style="enable-background:new 0 0 414.161 414.162;"
     xml:space="preserve">
  <g>
    <path d="M198.708,28.013c-133.206,0-175.424,126.655-175.424,126.655s152.13-117.915,256.945-37.848l-67.693,38.575l162.323,56.046
      l39.302-163.05l-68.419,33.488C345.751,81.879,304.986,28.013,198.708,28.013z"/>
    <path d="M133.932,297.341l67.693-38.575L39.302,202.72L0,365.77l68.419-33.487c0,0,40.765,53.865,147.033,53.865
      c133.206,0,175.425-126.655,175.425-126.655S238.747,377.408,133.932,297.341z"/>
  </g>
  </svg>
  `;
  return flipBtn;
}

class Card {
  src: string;
  cardContainer: HTMLDivElement;
  name: string;
  constructor(src, name) {
    this.src = src;
    this.name = name;
  }

  render() {
    this.cardContainer = document.createElement("div");
    this.cardContainer.setAttribute("class", "cardContainer");

    const canvContainer: HTMLDivElement = createCard(this.src);
    this.cardContainer.appendChild(canvContainer);

    return this.cardContainer;
  }
}

export class CategoryCard extends Card {
  stage: string;
  src: string;
  name: string;
  translate: string;
  audioSrc: string;
  sound: HTMLAudioElement;
  constructor(src, name, translate, audioSrc) {
    super(src, name);
    this.translate = translate;
    this.audioSrc = audioSrc;
  }

  render() {
    super.render();

    const backCanvContainer: HTMLDivElement = createCard(this.src);
    this.cardContainer.appendChild(backCanvContainer);

    const canvConts = this.cardContainer.querySelectorAll(".canvContainer");
    canvConts[0].classList.add("frontCard");
    canvConts[1].classList.add("backCard");

    const checkerdBg: HTMLDivElement = document.createElement("div");
    checkerdBg.setAttribute("class", "checkedBg");
    this.cardContainer.appendChild(checkerdBg);

    return this.cardContainer;
  }

  renderPlay() {
    this.render();

    this.sound = createAudio(this.audioSrc, ["sound"]);
    this.cardContainer.appendChild(this.sound);

    return this.cardContainer;
  }

  renderTrain() {
    this.render();

    const canvConts = this.cardContainer.querySelectorAll(".canvContainer");

    createCardName(<HTMLDivElement>canvConts[0], this.name);
    createCardName(<HTMLDivElement>canvConts[1], this.translate);

    this.sound = createAudio(this.audioSrc, ["sound"]);
    this.cardContainer.appendChild(this.sound);

    const flipBtn = createFlipBtn();
    canvConts[0].appendChild(flipBtn);

    this.flip();
    this.playSound();

    return this.cardContainer;
  }

  playSound() {
    this.cardContainer.addEventListener("click", (event) => {
      const flipBtn: HTMLElement =
        this.cardContainer.querySelector(".flipBtnImg");
      if (
        event.target !== flipBtn &&
        !flipBtn.contains(<HTMLElement>event.target)
      ) {
        this.sound.play();
      }
    });
  }

  flip() {
    const flipBtn: HTMLButtonElement =
      this.cardContainer.querySelector(".flipBtn");
    const cardContainer: HTMLDivElement = this.cardContainer;
    flipBtn.addEventListener("click", function clickEvent() {
      const frontCard: HTMLButtonElement =
        cardContainer.querySelector(".frontCard");
      const backCard: HTMLButtonElement =
        cardContainer.querySelector(".backCard");

      frontCard.classList.add("flipBack");
      backCard.classList.add("flipFront");

      cardContainer.addEventListener("mouseleave", () => {
        frontCard.classList.remove("flipBack");
        backCard.classList.remove("flipFront");
      });
    });
  }
}

export class CategoryName extends Card {
  stage: string;
  src: string;
  name: string;
  status: string;
  constructor(src, name) {
    super(src, name);
    this.stage = "train";
    this.status = "static";
  }

  render() {
    super.render();
    const canvContainer: HTMLDivElement =
      this.cardContainer.querySelector(".canvContainer");
    createCardName(canvContainer, this.name);

    return this.cardContainer;
  }

  loadCategoryCards() {
    const navPage: HTMLElement = document.getElementById(`${this.name}_nav`);
    const addEventItems = [this.cardContainer, navPage];
    addEventItems.forEach((item) => {
      item.addEventListener("click", () => {
        const lastLoaded = CATEGORIES_NAMES.find(category => category.status === "loaded");
        if (lastLoaded) lastLoaded.status = "static";
        this.status = "loaded";

        const activeNavPage: HTMLElement =
          document.querySelector(".navMenuItemActive");
        activeNavPage.classList.remove("navMenuItemActive");
        navPage.classList.add("navMenuItemActive");

        const mainPageCont: HTMLDivElement = document.querySelector(".mainPageCont");
        const categoriesPageCont: HTMLDivElement =
          document.querySelector(".categoriesPageCont");
        const categoriesPage: HTMLDivElement =
          document.querySelector(".categoriesPage");

        categoriesPage.innerHTML = "";

        const categoryCards = CATEGORY_CARDS[this.name];
        categoryCards.forEach((categoryCard) => {
          categoryCard.stage = this.stage;
          const card =
            this.stage === "train"
              ? categoryCard.renderTrain()
              : categoryCard.renderPlay();

          categoriesPage.appendChild(card);
        });

        mainPageCont.classList.remove("page");
        categoriesPageCont.classList.add("page");
      });
    });
  }
}
