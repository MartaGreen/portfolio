export const openMenu = () => {
    const menuBtn = document.querySelector(".burgerMenu");
    menuBtn.addEventListener("click", () => {
        const main = document.querySelector(".main");
        main.classList.toggle("openedMenu");
    });
};
//# sourceMappingURL=pageFunc.js.map