var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SERVER_URL = "https://secure-brushlands-82702.herokuapp.com/";
export const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}getAllCategories`)).json(); });
export const getAllCategoryCards = (categoryName) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}getAllCategoryCards/${categoryName}`)).json(); });
export const getCategoryCardsCount = (categoryName) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}getCategoryCardsCount/${categoryName}`)).json(); });
export const createNewCategoryReq = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch(`${SERVER_URL}createCategory`, {
        method: "post",
        mode: "no-cors",
        body: data,
    }).then((response) => {
        console.log("create new category, ", response.statusText);
        return response.status;
    });
});
export const deleteCategory = (categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${SERVER_URL}deleteCategory/${categoryName}`, {
        method: "delete",
    })).json();
});
export const getCategory = (categoryName) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}getCategory/${categoryName}`)).json(); });
export const updateCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${SERVER_URL}updateCategory`, {
        method: "put",
        body: data,
    }));
});
export const createNewCardReq = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch(`${SERVER_URL}createCard`, {
        method: "post",
        mode: "no-cors",
        body: data,
    }).then((response) => {
        console.log("create new category, ", response.statusText);
        return response.status;
    });
});
export const deleteCard = (category, card) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch(`${SERVER_URL}deleteCard/${category}/${card}`, {
        method: "delete",
    });
});
export const updateCardReq = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield fetch(`${SERVER_URL}updateCard`, {
        method: "put",
        body: data
    });
});
//# sourceMappingURL=requests.js.map