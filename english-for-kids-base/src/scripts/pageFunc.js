import { CATEGORIES_NAMES } from "../scripts/pageRender";
const changeMode = () => {
    const slider = document.querySelector(".switchModeInput");
    slider.addEventListener("change", (e) => {
        const modeInput = e.target;
        const mode = modeInput.checked ? "play" : "train";
        CATEGORIES_NAMES.forEach((category) => {
            category.stage = mode;
        });
        document.body.classList.toggle("playMode");
    });
};
const openMainPage = () => {
    const mainPageNav = document.getElementById("Main_Page_nav");
    const mainPage = document.querySelector(".mainPage");
    const categoriesPage = document.querySelector(".categoriesPage");
    mainPageNav.addEventListener("click", () => {
        const activeNavPage = document.querySelector(".navMenuItemActive");
        activeNavPage.classList.remove("navMenuItemActive");
        mainPageNav.classList.add("navMenuItemActive");
        mainPage.classList.add("page");
        categoriesPage.classList.remove("page");
    });
};
export const openMenu = () => {
    const menuBtn = document.querySelector(".burgerMenu");
    menuBtn.addEventListener("click", () => {
        document.body.classList.toggle("openedMenu");
        const main = document.querySelector(".main");
        // const header: HTMLElement = document.querySelector(".header");
        if (document.querySelector(".openedMenu")) {
            main.addEventListener("click", hideMenu);
            // header.addEventListener("click", hideMenu);
        }
        else {
            main.removeEventListener("click", hideMenu);
            // header.removeEventListener("click", hideMenu);
        }
    });
    openMainPage();
    changeMode();
};
function hideMenu() {
    document.body.classList.remove("openedMenu");
    console.log("hide");
}
//# sourceMappingURL=pageFunc.js.map