const COVER_URL: string = "./images/close_img.png";
let queue: Card[] = [];

export let openedCardsCounter: number = 0;
export let numOfComparisons: number = 0;
export let numOfWrongComparisons: number = 0;

export class Card {
  imgSrc: string;
  canvContainer: HTMLElement;
  constructor(imgSrc: string) {
    this.imgSrc = imgSrc;
    this.canvContainer = document.createElement("div");
  }

  createCard(): HTMLElement {
    this.canvContainer.classList.add("cardContainer");
    this.canvContainer.setAttribute("value", this.imgSrc);

    const canvas: HTMLCanvasElement = createImg(this.imgSrc, ["card", "back"]);
    const closeCanvas: HTMLCanvasElement = createImg(COVER_URL, [
      "card",
      "cover",
      "front",
    ]);

    this.canvContainer.appendChild(canvas);
    this.canvContainer.appendChild(closeCanvas);

    document.querySelector(".gameCards").appendChild(this.canvContainer);
    return this.canvContainer;
  }

  addListener() {
    this.canvContainer.addEventListener("click", (e) => {
      queue.push(this);

      if (queue.length < 2) {
        this.canvContainer.querySelector(".front").classList.remove("cover");
        this.canvContainer.querySelector(".front").classList.add("flip-front");
        this.canvContainer.querySelector(".back").classList.add("flip-back");
      } else if (queue.length == 2) {
        this.canvContainer.querySelector(".front").classList.remove("cover");
        this.canvContainer.querySelector(".front").classList.add("flip-front");
        this.canvContainer.querySelector(".back").classList.add("flip-back");

        if (queue[0].imgSrc != queue[1].imgSrc) {
          //add red color class
          setTimeout(() => {
            queue.forEach((e) => {
              e.canvContainer.querySelector(".front").classList.add("cover");
              e.canvContainer
                .querySelector(".front")
                .classList.remove("flip-front");
              e.canvContainer
                .querySelector(".back")
                .classList.remove("flip-back");
            });
            numOfWrongComparisons += 1;
            queue = [];
          }, 1300);
        } else {
          openedCardsCounter += 2;
          queue = [];
        }
        numOfComparisons += 1;
      }
    });
  }
}

function createImg(imgSrc: string, classArr: string[]): HTMLCanvasElement {
  const canvas: HTMLCanvasElement = document.createElement("canvas");
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

  classArr.forEach((e) => {
    canvas.classList.add(e);
  });

  const image: HTMLImageElement = new Image(168, 168);
  image.src = imgSrc;

  image.onload = function () {
    image.width = canvas.width;
    image.height = canvas.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);
  };

  return canvas;
}