export const openMenu = () => {
  const menuBtn = document.querySelector(".burgerMenu");
  menuBtn.addEventListener("click", () => {
    const main: HTMLElement = document.querySelector(".main");
    main.classList.toggle("openedMenu");
  })
}