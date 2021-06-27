import { cards } from "../scripts/cardsInfo";
function createCard(src, name) {
    const canvContainer = document.createElement("div");
    canvContainer.setAttribute("class", "canvContainer");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = src;
    image.onload = () => {
        image.width = canvas.width;
        image.height = canvas.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        canvContainer.appendChild(canvas);
    };
    const cardName = document.createElement("div");
    cardName.setAttribute("class", "cardName");
    cardName.innerHTML = name;
    canvContainer.appendChild(cardName);
    return canvContainer;
}
function createAudio(src, classes) {
    const newAudio = document.createElement("audio");
    newAudio.src = src;
    classes.forEach((cls) => newAudio.classList.add(cls));
    return newAudio;
}
class Card {
    constructor(src, name) {
        this.stage = "";
        this.src = src;
        this.cardContainer = document.createElement("div");
        this.cardContainer.setAttribute("class", "cardContainer");
        this.name = name;
    }
    render() {
        const canvContainer = createCard(this.src, this.name);
        this.cardContainer.appendChild(canvContainer);
        return this.cardContainer;
    }
}
class CategoryCard extends Card {
    constructor(src, name, translate, audioSrc) {
        super(src, name);
        this.translate = translate;
        this.audioSrc = audioSrc;
    }
    render() {
        super.render();
        const backCanvContainer = createCard(this.src, this.translate);
        this.cardContainer.appendChild(backCanvContainer);
        this.sound = createAudio(this.audioSrc, ["sound"]);
        this.cardContainer.appendChild(this.sound);
        const canvConts = this.cardContainer.querySelectorAll(".canvContainer");
        canvConts[0].classList.add("frontCard");
        canvConts[1].classList.add("backCard");
        const flipBtn = document.createElement("button");
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
        });
    }
    flip() {
        const flipBtn = this.cardContainer.querySelector(".flipBtn");
        const cardContainer = this.cardContainer;
        flipBtn.addEventListener("click", function clickEvent() {
            console.log("klick");
            const frontCard = cardContainer.querySelector(".frontCard");
            const backCard = cardContainer.querySelector(".backCard");
            frontCard.classList.add("flipBack");
            backCard.classList.add("flipFront");
            cardContainer.addEventListener("mouseleave", () => {
                console.log("mouse out");
                frontCard.classList.remove("flipBack");
                backCard.classList.remove("flipFront");
            });
        });
    }
}
export class Category extends Card {
    loadCategoryCards() {
        this.cardContainer.addEventListener("click", () => {
            const mainPage = document.querySelector(".mainPage");
            const categoriesPage = document.querySelector(".categoriesPage");
            categoriesPage.innerHTML = "";
            const categoryCardsInfo = cards[this.name].data;
            categoryCardsInfo.forEach((categoryCardInfo) => {
                const createCard = new CategoryCard(categoryCardInfo.image, categoryCardInfo.word, categoryCardInfo.translation, categoryCardInfo.audioSrc);
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
//# sourceMappingURL=cards.js.map