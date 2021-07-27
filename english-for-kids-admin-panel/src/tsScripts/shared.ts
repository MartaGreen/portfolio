export function createBtn(cls: string, value: string) {
  const button: HTMLInputElement = document.createElement("input");
  button.setAttribute("class", cls);
  button.setAttribute("type", "button");
  button.setAttribute("value", value);

  return button;
}

export function createCard(src: string) {
  const canvContainer: HTMLDivElement = document.createElement("div");
  canvContainer.setAttribute("class", "canvContainer");

  setTimeout(() => {const canvas: HTMLCanvasElement = document.createElement("canvas");
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

  const image = new Image();
  image.src = src;

  image.onload = () => {
    image.width = canvas.width;
    image.height = canvas.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);

    canvContainer.appendChild(canvas);
  };}, 0);

  return canvContainer;
}