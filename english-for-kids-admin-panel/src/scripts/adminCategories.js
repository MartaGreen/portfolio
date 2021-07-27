var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllCategories, getCategoryCardsCount, } from "./requests";
import { createdCategory } from "./adminCategoriesNames";
export const renderCategories = (container, lastElem) => {
    getAllCategories().then((categoriesData) => {
        categoriesData.forEach((categoryData) => __awaiter(void 0, void 0, void 0, function* () {
            const cardsCount = yield getCategoryCardsCount(categoryData.name).then(data => data);
            console.log("counter: ", cardsCount);
            const newCategory = new createdCategory(categoryData.name, cardsCount, categoryData.imgSrc);
            const renderCategory = newCategory.render();
            container.insertBefore(renderCategory, lastElem);
        }));
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
//# sourceMappingURL=adminCategories.js.map