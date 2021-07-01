import { CATEGORY_CARDS } from "../scripts/pageRender";
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
function createFlipBtn() {
    const flipBtn = document.createElement("div");
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
export class CategoryCard extends Card {
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
        const flipBtn = createFlipBtn();
        canvConts[0].appendChild(flipBtn);
        return this.cardContainer;
    }
    playSound() {
        this.cardContainer.addEventListener("click", (event) => {
            const flipBtn = this.cardContainer.querySelector(".flipBtnImg");
            if (event.target !== flipBtn) {
                this.sound.play();
            }
        });
    }
    flip() {
        const flipBtn = this.cardContainer.querySelector(".flipBtn");
        const cardContainer = this.cardContainer;
        flipBtn.addEventListener("click", function clickEvent() {
            const frontCard = cardContainer.querySelector(".frontCard");
            const backCard = cardContainer.querySelector(".backCard");
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
    constructor(src, name) {
        super(src, name);
        this.stage = "static";
    }
    loadCategoryCards() {
        const navPage = document.getElementById(`${this.name}_nav`);
        const addEventItems = [
            this.cardContainer,
            navPage
        ];
        addEventItems.forEach((item) => {
            item.addEventListener("click", () => {
                this.stage = "loaded";
                const activeNavPage = document.querySelector(".navMenuItemActive");
                activeNavPage.classList.remove("navMenuItemActive");
                navPage.classList.add("navMenuItemActive");
                const mainPage = document.querySelector(".mainPage");
                const categoriesPage = document.querySelector(".categoriesPage");
                categoriesPage.innerHTML = "";
                const categoryCards = CATEGORY_CARDS[this.name];
                categoryCards.forEach((categoryCard) => {
                    const card = categoryCard.render();
                    categoryCard.flip();
                    categoryCard.playSound();
                    categoriesPage.appendChild(card);
                });
                mainPage.classList.remove("page");
                categoriesPage.classList.add("page");
            });
        });
    }
}
//# sourceMappingURL=cards.js.map