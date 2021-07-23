const COVER_URL = "./images/close_img.png";
let queue = [];
export let openedCardsCounter = 0;
export let numOfComparisons = 0;
export let numOfWrongComparisons = 0;
export class Card {
    constructor(imgSrc) {
        this.imgSrc = imgSrc;
        this.canvContainer = document.createElement("div");
    }
    createCard() {
        this.canvContainer.classList.add("cardContainer");
        this.canvContainer.setAttribute("value", this.imgSrc);
        const canvas = createImg(this.imgSrc, ["card", "back"]);
        const closeCanvas = createImg(COVER_URL, [
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
            }
            else if (queue.length == 2) {
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
                }
                else {
                    openedCardsCounter += 2;
                    queue = [];
                }
                numOfComparisons += 1;
            }
        });
    }
}
function createImg(imgSrc, classArr) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    classArr.forEach((e) => {
        canvas.classList.add(e);
    });
    const image = new Image(168, 168);
    image.src = imgSrc;
    image.onload = function () {
        image.width = canvas.width;
        image.height = canvas.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
    };
    return canvas;
}
//# sourceMappingURL=cards.js.map