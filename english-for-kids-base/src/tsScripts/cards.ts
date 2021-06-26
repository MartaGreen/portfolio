import { cards } from "../scripts/cardsInfo";

class Card {
  stage: string;
  src: string;
  canvasContainer: HTMLDivElement;
  name: string;
  constructor(src, name) {
    this.stage = "";
    this.src = src;
    this.canvasContainer = document.createElement("div");
    this.canvasContainer.setAttribute("class", "cardContainer");
    this.name = name;
  }

  render() {
    const canvas: HTMLCanvasElement = document.createElement("canvas");
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

    const image = new Image();
    image.src = this.src;

    image.onload = () => {
      image.width = canvas.width;
      image.height = canvas.height;
      ctx.drawImage(image, 0, 0, image.width, image.height);

      this.canvasContainer.appendChild(canvas);
    };

    const cardName: HTMLDivElement = document.createElement("div");
    cardName.setAttribute("class", "cardName");
    cardName.innerHTML = this.name;
    this.canvasContainer.appendChild(cardName);

    return this.canvasContainer;
  }
}

class CategoryCard extends Card {
  src: string;
  name: string;
  translate: string;
  audioSrc: string;
  constructor(src, name, translate, audioSrc) {
    super(src, name);
    this.translate = translate;
    this.audioSrc = audioSrc;
  }
  flip() {
    this.canvasContainer.addEventListener("click", function clickEvent() {
      console.log("klick");
    })
  }
}

export class Category extends Card {
  loadCategoryCards() {
    this.canvasContainer.addEventListener("click", () => {
      const mainPage: HTMLDivElement = document.querySelector(".mainPage");
      const categoriesPage: HTMLDivElement =
        document.querySelector(".categoriesPage");

      categoriesPage.innerHTML = "";
      const categoryCardsInfo = cards[this.name].data;
      categoryCardsInfo.forEach((categoryCardInfo) => {
        const createCard = new CategoryCard(
          categoryCardInfo.image,
          categoryCardInfo.word,
          categoryCardInfo.translate,
          categoryCardInfo.audioSrc
        );
        const card = createCard.render();
        createCard.flip();

        categoriesPage.appendChild(card);
      });

      mainPage.classList.remove("page");
      categoriesPage.classList.add("page");
    });
  }
}
