import { cards } from "../scripts/cardsInfo";
class Card {
    constructor(src, name) {
        this.stage = "";
        this.src = src;
        this.canvasContainer = document.createElement("div");
        this.canvasContainer.setAttribute("class", "cardContainer");
        this.name = name;
    }
    render() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.src = this.src;
        image.onload = () => {
            image.width = canvas.width;
            image.height = canvas.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
            this.canvasContainer.appendChild(canvas);
        };
        const cardName = document.createElement("div");
        cardName.setAttribute("class", "cardName");
        cardName.innerHTML = this.name;
        this.canvasContainer.appendChild(cardName);
        return this.canvasContainer;
    }
}
class CategoryCard extends Card {
    constructor(src, name, translate, audioSrc) {
        super(src, name);
        this.translate = translate;
        this.audioSrc = audioSrc;
    }
    flip() {
        this.canvasContainer.addEventListener("click", function clickEvent() {
            console.log("klick");
        });
    }
}
export class Category extends Card {
    loadCategoryCards() {
        this.canvasContainer.addEventListener("click", () => {
            const mainPage = document.querySelector(".mainPage");
            const categoriesPage = document.querySelector(".categoriesPage");
            categoriesPage.innerHTML = "";
            const categoryCardsInfo = cards[this.name].data;
            categoryCardsInfo.forEach((categoryCardInfo) => {
                const createCard = new CategoryCard(categoryCardInfo.image, categoryCardInfo.word, categoryCardInfo.translate, categoryCardInfo.audioSrc);
                const card = createCard.render();
                createCard.flip();
                categoriesPage.appendChild(card);
            });
            mainPage.classList.remove("page");
            categoriesPage.classList.add("page");
        });
    }
}
//# sourceMappingURL=cards.js.map