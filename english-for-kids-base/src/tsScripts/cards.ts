import { cards } from "../scripts/cardsInfo";

function createCard(src: string, name: string) {
  const canvContainer:HTMLDivElement = document.createElement("div");
    canvContainer.setAttribute("class", "canvContainer");

    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

    const image = new Image();
    image.src = src;

    image.onload = () => {
      image.width = canvas.width;
      image.height = canvas.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      canvContainer.appendChild(canvas);
    };

    const cardName: HTMLDivElement = document.createElement("div");
    cardName.setAttribute("class", "cardName");
    cardName.innerHTML = name;
    
    canvContainer.appendChild(cardName);
    return canvContainer;
}

function createAudio(src: string, classes: string[]) {
  const newAudio: HTMLAudioElement = document.createElement("audio");
  newAudio.src = src;
  classes.forEach(cls => newAudio.classList.add(cls));

  return newAudio;
}

class Card {
  stage: string;
  src: string;
  cardContainer: HTMLDivElement;
  name: string;
  constructor(src, name) {
    this.stage = "";
    this.src = src;
    this.cardContainer = document.createElement("div");
    this.cardContainer.setAttribute("class", "cardContainer");
    this.name = name;
  }

  render() {
    const canvContainer: HTMLDivElement = createCard(this.src, this.name);
    this.cardContainer.appendChild(canvContainer);

    return this.cardContainer;
  }
}

class CategoryCard extends Card {
  src: string;
  name: string;
  translate: string;
  audioSrc: string;
  sound: HTMLAudioElement
  constructor(src, name, translate, audioSrc) {
    super(src, name);
    this.translate = translate;
    this.audioSrc = audioSrc;
  }

  render() {
    super.render();
    const backCanvContainer: HTMLDivElement = createCard(this.src, this.translate);
    this.cardContainer.appendChild(backCanvContainer);

    this.sound = createAudio(this.audioSrc, ["sound"]);
    this.cardContainer.appendChild(this.sound);

    const canvConts = this.cardContainer.querySelectorAll(".canvContainer");
    canvConts[0].classList.add("frontCard");
    canvConts[1].classList.add("backCard");

    const flipBtn: HTMLButtonElement = document.createElement("button");
    flipBtn.setAttribute("class", "flipBtn");
    canvConts[0].appendChild(flipBtn);

    return this.cardContainer;
  }

  playSound() {
    this.cardContainer.addEventListener("click", (event) => {
      const flipBtn = this.cardContainer.querySelector(".flipBtn");
      if (event.target !== flipBtn) {
        console.log(event.target);
        console.log("play sound");
        this.sound.play();
      }
    })
  }

  flip() {
    const flipBtn: HTMLButtonElement = this.cardContainer.querySelector(".flipBtn");
    const cardContainer: HTMLDivElement = this.cardContainer;
    flipBtn.addEventListener("click", function clickEvent() {
      console.log("klick");
      const frontCard: HTMLButtonElement = cardContainer.querySelector(".frontCard");
      const backCard: HTMLButtonElement = cardContainer.querySelector(".backCard");

      frontCard.classList.remove("frontCard");
      backCard.classList.remove("backCard");
      backCard.classList.add("frontCard");
      frontCard.classList.add("backCard");
      frontCard.classList.add("flipBack");
      backCard.classList.add("flipFront");
    })
  }
}

export class Category extends Card {
  loadCategoryCards() {
    this.cardContainer.addEventListener("click", () => {
      const mainPage: HTMLDivElement = document.querySelector(".mainPage");
      const categoriesPage: HTMLDivElement =
        document.querySelector(".categoriesPage");

      categoriesPage.innerHTML = "";
      const categoryCardsInfo = cards[this.name].data;
      categoryCardsInfo.forEach((categoryCardInfo) => {
        const createCard = new CategoryCard(
          categoryCardInfo.image,
          categoryCardInfo.word,
          categoryCardInfo.translation,
          categoryCardInfo.audioSrc
        );
        const card = createCard.render();
        createCard.flip();
        createCard.playSound();

        categoriesPage.appendChild(card);
      });

      mainPage.classList.remove("page");
      categoriesPage.classList.add("page");
    });
  }
}
