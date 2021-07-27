var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createBtn } from "./shared";
import { createNewCategoryReq, deleteCategory, getAllCategoryCards, getCategory, updateCategory, } from "./requests";
import { Card, createNewCardSample } from "./adminCards";
class category {
    constructor() {
        this.categoryCont = document.createElement("div");
        this.categoryCont.setAttribute("class", "categoryCont");
        this.title = document.createElement("h3");
        this.title.setAttribute("class", "categoryTitle");
        this.categoryCont.appendChild(this.title);
    }
    render() {
        return this.categoryCont;
    }
}
export class createdCategory extends category {
    constructor(name, count, imgSrc) {
        super();
        this.wordsCount = count;
        this.categoryName = name;
        this.title.innerHTML = this.categoryName;
        this.imgSrc = imgSrc;
        this.renderCategoryCont();
        this.createBtns();
        this.seeCategoryPic();
        this.rmBtn();
    }
    rmBtn() {
        const btnIconCont = document.createElement("div");
        btnIconCont.setAttribute("class", "btnIconCont");
        const btnIcon = `<?xml version="1.0" ?><svg class="rmCategoryBtn" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>`;
        btnIconCont.innerHTML = btnIcon;
        this.categoryCont.appendChild(btnIconCont);
        this.rmBtnFunc(btnIconCont);
    }
    rmBtnFunc(btn) {
        btn.addEventListener("click", () => {
            deleteCategory(this.categoryName).then((data) => console.log("category was successfully deleted"));
            this.categoryCont.remove();
        });
    }
    renderCategoryCont() {
        const wordsCont = document.createElement("span");
        wordsCont.setAttribute("class", "wordsCount");
        wordsCont.innerHTML = `WORDS: ${this.wordsCount}`;
        this.categoryCont.appendChild(wordsCont);
    }
    seeCategoryPic() {
        const picture = document.createElement("a");
        picture.setAttribute("class", "seeCategoryPic");
        picture.innerHTML = "see picture";
        picture.href = this.imgSrc;
        this.categoryCont.appendChild(picture);
    }
    createBtns() {
        const updateBtn = createBtn("updateBtn categoryBtn", "update");
        this.updateFunc(updateBtn);
        const addWordBtn = createBtn("addWordBtn categoryBtn", "add word");
        this.addWordFunc(addWordBtn);
        const categoryBtnsCont = document.createElement("div");
        categoryBtnsCont.setAttribute("class", "categoryBtnsCont");
        categoryBtnsCont.appendChild(updateBtn);
        categoryBtnsCont.appendChild(addWordBtn);
        this.categoryCont.appendChild(categoryBtnsCont);
    }
    addWordFunc(btn) {
        btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const cards = yield getAllCategoryCards(this.categoryName).then((cards) => cards);
            console.log("card", cards);
            const blocks = document.querySelectorAll(".block");
            blocks.forEach((block) => block.classList.toggle("visual"));
            const visualBlock = document.querySelector(".visual");
            visualBlock.innerHTML = "";
            cards.forEach((card) => {
                const newCard = new Card(card.cardName, card.translate, card.imgSrc, card.soundSrc, this.categoryName);
                const newCardRender = newCard.render();
                visualBlock.appendChild(newCardRender);
            });
            const createNewWord = new createNewCardSample(this.categoryName);
            const createNewWordSample = createNewWord.render();
            visualBlock.appendChild(createNewWordSample);
        }));
    }
    updateFunc(btn) {
        btn.addEventListener("click", () => {
            console.log("update");
            const updateSample = new categoryUpdate(this);
            this.categoryCont.appendChild(updateSample.render());
        });
    }
}
class sample extends category {
    constructor() {
        super();
        this.categoryCont.classList.add("creation");
        const creationForm = document.createElement("form");
        creationForm.setAttribute("class", "creationForm");
        this.categoryNameField = document.createElement("input");
        this.categoryNameField.setAttribute("class", "categoryNameField");
        this.categoryNameField.setAttribute("placeholder", "category name");
        const uploadCategoryImg = document.createElement("input");
        uploadCategoryImg.setAttribute("class", "uploadCategoryImg");
        uploadCategoryImg.setAttribute("type", "file");
        this.actionCancel = createBtn("cancelCreation creationBtn", "cancel");
        this.actionConfirm = createBtn("confirmCreation creationBtn", "create");
        const creationBtnCont = document.createElement("div");
        creationBtnCont.setAttribute("class", "creationBtnCont");
        creationBtnCont.appendChild(this.actionCancel);
        creationBtnCont.appendChild(this.actionConfirm);
        creationForm.appendChild(this.categoryNameField);
        creationForm.appendChild(creationBtnCont);
        creationForm.appendChild(uploadCategoryImg);
        this.categoryCont.appendChild(creationForm);
    }
}
class categoryCreation extends sample {
    constructor() {
        super();
        this.cancelCreationFunc(this.actionCancel);
        this.confirmCreationFunc(this.actionConfirm, this.categoryCont.querySelector(".creationForm"));
        this.title.innerHTML = "Creation";
    }
    cancelCreationFunc(btn) {
        btn.addEventListener("click", () => {
            this.categoryCont.remove();
        });
    }
    confirmCreationFunc(btn, form) {
        btn.onclick = (e) => __awaiter(this, void 0, void 0, function* () {
            const msg = this.categoryCont.querySelector(".warningMsg");
            if (msg)
                msg.remove();
            const newName = (this.categoryCont.querySelector(".categoryNameField")).value;
            const imgFile = (this.categoryCont.querySelector(".uploadCategoryImg")).files[0];
            if (newName && imgFile) {
                const formData = new FormData(form);
                formData.append("name", newName);
                formData.append("image", imgFile);
                yield createNewCategoryReq(formData).then((data) => data);
                const data = yield getCategory(newName).then((categoryData) => {
                    return categoryData;
                });
                const newCategory = new createdCategory(newName, 0, data.imgSrc);
                this.categoryCont.parentNode.insertBefore(newCategory.render(), this.categoryCont);
                this.categoryCont.remove();
            }
            else {
                const warningMsg = document.createElement("span");
                warningMsg.setAttribute("class", "warningMsg");
                warningMsg.innerHTML = "Warning: some fields are empty!";
                this.categoryCont.appendChild(warningMsg);
            }
        });
    }
}
class categoryUpdate extends sample {
    constructor(categoryClass) {
        super();
        this.categoryClass = categoryClass;
        this.actionConfirm.value = "update";
        this.categoryNameField.value = categoryClass.categoryName;
        this.categoryCont.classList.add("updateSample");
        this.title.innerHTML = "Update";
        this.cancelFunc();
        this.updateFunc();
    }
    cancelFunc() {
        this.actionCancel.addEventListener("click", () => {
            this.categoryCont.remove();
        });
    }
    updateFunc() {
        this.actionConfirm.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            console.log("clickckdocwdicygiwducbwbocwy9cg");
            const newName = (this.categoryCont.querySelector(".categoryNameField")).value;
            const newFile = (this.categoryCont.querySelector(".uploadCategoryImg")).files[0];
            const formData = new FormData(this.categoryCont.querySelector(".creationForm"));
            formData.append("oldName", this.categoryClass.categoryName);
            formData.append("newName", newName ? newName : this.categoryClass.categoryName);
            if (newFile)
                formData.append("image", newFile, newFile.name);
            yield updateCategory(formData).then((data) => {
                this.categoryClass.categoryName = newName
                    ? newName
                    : this.categoryClass.categoryName;
                this.categoryClass.categoryCont.querySelector(".categoryTitle").innerHTML = newName ? newName : this.categoryClass.categoryName;
                if (newFile) {
                    const newUrl = URL.createObjectURL(newFile);
                    this.categoryClass.imgSrc = newUrl;
                    (this.categoryClass.categoryCont.querySelector(".seeCategoryPic")).href = newUrl;
                }
            });
            this.categoryCont.remove();
        }));
    }
}
export class createNewCategory extends category {
    constructor() {
        super();
        this.title.innerHTML = "Create new Category";
        this.newCategoryBtn();
    }
    newCategoryBtn() {
        this.createBtn = document.createElement("div");
        this.createBtn.setAttribute("class", "newCategoryBtnCont");
        this.createBtn.innerHTML = `<?xml version="1.0" ?><svg class="newCategoryBtn" data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M90,61H67V38a3,3,0,0,0-6,0V61H38a3,3,0,0,0,0,6H61V90a3,3,0,0,0,6,0V67H90a3,3,0,0,0,0-6Z"/></svg>`;
        this.categoryCont.appendChild(this.createBtn);
        this.createFunc();
    }
    createFunc() {
        this.createBtn.addEventListener("click", () => {
            const creationField = new categoryCreation().render();
            this.categoryCont.parentNode.insertBefore(creationField, this.categoryCont);
        });
    }
}
//# sourceMappingURL=adminCategoriesNames.js.map