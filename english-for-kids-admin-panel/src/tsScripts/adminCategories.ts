import {
  getAllCategories,
  getAllCategoryCards,
  getCategoryCardsCount,
} from "./requests";
import { createdCategory } from "./adminCategoriesNames";

export const renderCategories = (container, lastElem) => {
  getAllCategories().then((categoriesData) => {
    categoriesData.forEach(async (categoryData) => {
      const cardsCount = await getCategoryCardsCount(categoryData.name).then(
        data => data
      );
      console.log("counter: ", cardsCount);
      const newCategory: createdCategory = new createdCategory(
        categoryData.name,
        cardsCount,
        categoryData.imgSrc
      );
      const renderCategory: HTMLDivElement = newCategory.render();
      container.insertBefore(renderCategory, lastElem);
    });
  });
};

export function backToCategories() {
  // const blocks = document.querySelectorAll(".block");
  // blocks[1].classList.remove("visual");
  // blocks[0].classList.add("visual");
  window.location.href = "admin.html";
}

export function logoutFunc() {
  window.location.href = "index.html";
}