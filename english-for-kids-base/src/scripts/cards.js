export class Card {
    constructor(src) {
        this.stage = "";
        this.src = src;
        this.canvasContainer = document.createElement("div");
        this.canvasContainer.setAttribute("class", "imgContainer");
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
        return this.canvasContainer;
    }
    flip() {
        this.stage = "flipped";
        this.canvasContainer.addEventListener("click", () => {
            console.log("click");
        });
    }
}
//# sourceMappingURL=cards.js.map