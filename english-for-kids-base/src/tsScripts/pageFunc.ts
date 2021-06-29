import { CATEGORY_CARDS } from "../scripts/pageRender";

const openMainPage = () => {
  const mainPageNav: HTMLElement = document.getElementById("Main_Page_nav");
  const mainPage: HTMLDivElement = document.querySelector(".mainPage");
  const categoriesPage: HTMLDivElement =
    document.querySelector(".categoriesPage");

  mainPageNav.addEventListener("click", () => {
    const activeNavPage: HTMLElement =
      document.querySelector(".navMenuItemActive");
    activeNavPage.classList.remove("navMenuItemActive");
    mainPageNav.classList.add("navMenuItemActive");

    mainPage.classList.add("page");
    categoriesPage.classList.remove("page");
  });
};

const changeMode = () => {
  const slider: HTMLLabelElement = document.querySelector(".switchModeInput");
  slider.addEventListener("change", (e) => {
    const modeInput: HTMLInputElement = <HTMLInputElement>e.target;
    console.log(modeInput.checked);
    if (modeInput.checked) {
      const loadedCategory = CATEGORY_CARDS.find(card => card.stage === "loaded");
      console.log(loadedCategory);
    }
  })
}

export const openMenu = () => {
  const menuBtn = document.querySelector(".burgerMenu");
  menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("openedMenu");
    const main: HTMLElement = document.querySelector(".main");
    // const header: HTMLElement = document.querySelector(".header");

    if (document.querySelector(".openedMenu")) {
      main.addEventListener("click", hideMenu);
      // header.addEventListener("click", hideMenu);
    } else {
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
