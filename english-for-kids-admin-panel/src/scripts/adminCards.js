var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createCard, createBtn } from "./shared";
import { createNewCardReq, deleteCard, updateCardReq } from "./requests";
export class Card {
    constructor(name, translate, imgSrc, soundSrc, categoryName) {
        this.cardName = name;
        this.translate = translate;
        this.imgSrc = imgSrc;
        this.soundSrc = soundSrc;
        this.categoryName = categoryName;
        this.cardCont = document.createElement("div");
        this.cardCont.setAttribute("class", "cardCont");
        this.rmBtn();
        this.renderCardStructure();
    }
    renderCardStructure() {
        const fieldsCont = document.createElement("div");
        fieldsCont.setAttribute("class", "fieldsCont");
        this.renderField("fieldCont wordField", "Word", this.cardName, fieldsCont);
        this.renderField("fieldCont translateField", "Translation", this.translate, fieldsCont);
        const soundField = this.rednerSound();
        fieldsCont.appendChild(soundField);
        const imageField = this.renderImg();
        fieldsCont.appendChild(imageField);
        this.cardCont.appendChild(fieldsCont);
        this.renderUpdateBtb();
    }
    renderField(cls, fieldName, fieldValue, cont) {
        const fieldCont = document.createElement("div");
        fieldCont.setAttribute("class", cls);
        const fontWeight = document.createElement("b");
        fontWeight.innerHTML = fieldName;
        fieldCont.appendChild(fontWeight);
        const value = document.createElement("span");
        value.setAttribute("class", "fieldValue");
        value.innerHTML += fieldValue;
        fieldCont.appendChild(value);
        cont.appendChild(fieldCont);
    }
    rednerSound() {
        const fieldCont = document.createElement("div");
        fieldCont.setAttribute("class", "fieldCont soundField");
        const fieldName = document.createElement("b");
        fieldName.innerHTML = "Sound";
        fieldCont.appendChild(fieldName);
        const sound = document.createElement("span");
        sound.setAttribute("class", "listenSound");
        sound.innerHTML = `listen ${this.cardName}.mp3`;
        const audio = document.createElement("audio");
        audio.src = this.soundSrc;
        sound.appendChild(audio);
        this.playSoundFunc(sound, audio);
        fieldCont.appendChild(sound);
        return fieldCont;
    }
    playSoundFunc(field, sound) {
        field.addEventListener("click", () => {
            sound.play();
        });
    }
    renderImg() {
        const fieldCont = document.createElement("div");
        fieldCont.setAttribute("class", "fieldCont imageField");
        const fieldName = document.createElement("b");
        fieldName.innerHTML = "Image";
        fieldCont.appendChild(fieldName);
        const canvContainer = createCard(this.imgSrc);
        fieldCont.appendChild(canvContainer);
        return fieldCont;
    }
    renderUpdateBtb() {
        const updateCardBtn = createBtn("updateBtn", "update");
        this.updateBtnFunc(updateCardBtn);
        this.cardCont.appendChild(updateCardBtn);
    }
    updateBtnFunc(btn) {
        btn.addEventListener("click", () => {
            const updateStructure = new updateCard(this.categoryName, this.cardName);
            const updateStructurerender = updateStructure.render();
            updateStructurerender.classList.add("updateSample");
            updateStructurerender.querySelector(".name").value =
                this.cardName;
            (updateStructurerender.querySelector(".translate")).value = this.translate;
            this.cardCont.appendChild(updateStructurerender);
        });
    }
    rmBtn() {
        const btnIconCont = document.createElement("div");
        btnIconCont.setAttribute("class", "btnIconCont");
        const btnIcon = `<?xml version="1.0" ?><svg class="rmCategoryBtn" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>`;
        btnIconCont.innerHTML = btnIcon;
        this.rmFunc(btnIconCont);
        this.cardCont.appendChild(btnIconCont);
    }
    rmFunc(btn) {
        btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            console.log(this.categoryName);
            yield deleteCard(this.categoryName, this.cardName).then((data) => data);
            this.cardCont.remove();
        }));
    }
    render() {
        return this.cardCont;
    }
}
export class createNewCardSample {
    constructor(category) {
        this.cardCont = document.createElement("div");
        this.cardCont.setAttribute("class", "cardCont");
        this.categoryName = category;
        const title = document.createElement("h3");
        title.setAttribute("class", "cardTitle");
        title.innerHTML = "Add new word";
        this.cardCont.appendChild(title);
        this.createBtn();
    }
    createBtn() {
        const createBtn = document.createElement("div");
        createBtn.setAttribute("class", "newCategoryBtnCont");
        createBtn.innerHTML = `<?xml version="1.0" ?><svg class="newCategoryBtn" data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M90,61H67V38a3,3,0,0,0-6,0V61H38a3,3,0,0,0,0,6H61V90a3,3,0,0,0,6,0V67H90a3,3,0,0,0,0-6Z"/></svg>`;
        this.createBtnFunc(createBtn);
        this.cardCont.appendChild(createBtn);
    }
    createBtnFunc(btn) {
        btn.addEventListener("click", () => {
            const templ = new createNewCard(this.categoryName);
            const renderSample = templ.render();
            this.cardCont.parentNode.insertBefore(renderSample, this.cardCont);
        });
    }
    render() {
        return this.cardCont;
    }
}
class sample {
    constructor(category) {
        this.cardCont = document.createElement("div");
        this.cardCont.setAttribute("class", "cardCont");
        this.categoryName = category;
        this.renderCardStructure();
    }
    renderCardStructure() {
        const wordFieldCont = document.createElement("div");
        wordFieldCont.setAttribute("class", "wordFieldCont");
        this.renderInputField("wordField name", "name", wordFieldCont);
        this.renderInputField("wordField translate", "translation", wordFieldCont);
        const fileFieldCont = document.createElement("div");
        fileFieldCont.setAttribute("class", "fileFieldCont");
        this.renderFiles("fileField soundFile", "Sound", fileFieldCont);
        this.renderFiles("fileField imageFile", "Image", fileFieldCont);
        const cardBtnCont = document.createElement("div");
        cardBtnCont.setAttribute("class", "cardBtnCont");
        this.createBtn = this.renderBtn("confirmBtn cardBtn", "ok", cardBtnCont);
        const cancelBtn = this.renderBtn("cancelBtn cardBtn", "cancel", cardBtnCont);
        this.cancelFunction(cancelBtn);
        this.cardCont.appendChild(wordFieldCont);
        this.cardCont.appendChild(fileFieldCont);
        this.cardCont.appendChild(cardBtnCont);
    }
    cancelFunction(btn) {
        btn.addEventListener("click", () => {
            this.cardCont.remove();
        });
    }
    renderInputField(cls, placeholder, container) {
        const field = document.createElement("input");
        field.setAttribute("class", cls);
        field.setAttribute("placeholder", placeholder);
        container.appendChild(field);
    }
    renderFiles(cls, name, container) {
        const fieled = document.createElement("div");
        fieled.setAttribute("class", cls);
        const fieldName = document.createElement("span");
        fieldName.setAttribute("class", "fileFieldName");
        fieldName.innerHTML = name;
        const fieldInput = document.createElement("input");
        fieldInput.setAttribute("class", "fileFieldFile");
        fieldInput.setAttribute("type", "file");
        fieled.appendChild(fieldName);
        fieled.appendChild(fieldInput);
        container.appendChild(fieled);
    }
    renderBtn(clas, value, container) {
        const btn = createBtn(clas, value);
        container.appendChild(btn);
        return btn;
    }
    render() {
        return this.cardCont;
    }
}
class createNewCard extends sample {
    constructor(category) {
        super(category);
        this.createCardFunc(this.createBtn);
    }
    createCardFunc(btn) {
        btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const msg = this.cardCont.querySelector(".warningMsg");
            if (msg)
                msg.remove();
            const name = (this.cardCont.querySelector(".name")).value;
            const translate = (this.cardCont.querySelector(".translate")).value;
            const imageFile = (this.cardCont
                .querySelector(".imageFile")
                .querySelector(".fileFieldFile")).files[0];
            const soundFile = (this.cardCont
                .querySelector(".soundFile")
                .querySelector(".fileFieldFile")).files[0];
            if (name && translate && imageFile && soundFile) {
                const formData = new FormData();
                formData.append("category", this.categoryName);
                formData.append("cardName", name);
                formData.append("translate", translate);
                formData.append("image", imageFile);
                formData.append("sound", soundFile);
                yield createNewCardReq(formData).then((data) => data);
                const imgSrc = URL.createObjectURL(imageFile);
                const soundSrc = URL.createObjectURL(soundFile);
                const newCard = new Card(name, translate, imgSrc, soundSrc, this.categoryName);
                const renderNewCard = newCard.render();
                this.cardCont.parentNode.insertBefore(renderNewCard, this.cardCont);
                this.cardCont.remove();
            }
            else {
                const warningMsg = document.createElement("span");
                warningMsg.setAttribute("class", "warningMsg");
                warningMsg.innerHTML = "Warning: some fields are empty!";
                this.cardCont.appendChild(warningMsg);
            }
        }));
    }
}
class updateCard extends sample {
    constructor(category, cardName) {
        super(category);
        this.categoryName = category;
        this.oldCardName = cardName;
        this.updateCardFunc(this.createBtn);
    }
    updateCardFunc(btn) {
        btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            const newName = (this.cardCont.querySelector(".name")).value;
            const newTranslate = (this.cardCont.querySelector(".translate")).value;
            const newImageFile = (this.cardCont
                .querySelector(".imageFile")
                .querySelector(".fileFieldFile")).files[0];
            const newSoundFile = (this.cardCont
                .querySelector(".soundFile")
                .querySelector(".fileFieldFile")).files[0];
            const formData = new FormData();
            formData.append("newName", newName);
            formData.append("translate", newTranslate);
            formData.append("imgSrc", newImageFile);
            formData.append("soundSrc", newSoundFile);
            formData.append("oldName", this.oldCardName);
            formData.append("category", this.categoryName);
            yield updateCardReq(formData).then((data) => data);
            if (newImageFile)
                var imgUrl = URL.createObjectURL(newImageFile);
            if (newSoundFile)
                var soundUrl = URL.createObjectURL(newSoundFile);
            this.cardsUpdatedView(soundUrl, imgUrl, newName, newTranslate);
        }));
    }
    cardsUpdatedView(soundUrl, imgUrl, name, translate) {
        if (soundUrl) {
            const updateSound = this.cardCont.parentElement
                .querySelector(".soundField")
                .querySelector("audio");
            updateSound.src = soundUrl;
        }
        if (imgUrl) {
            const updateCanvas = this.cardCont.parentElement.querySelector(".imageField");
            updateCanvas.querySelector("canvas").remove();
            const newCanvas = createCard(imgUrl);
            updateCanvas.appendChild(newCanvas);
        }
        if (name)
            this.cardCont.parentElement
                .querySelector(".wordField")
                .querySelector(".fieldValue").innerHTML = name;
        if (translate)
            this.cardCont.parentElement
                .querySelector(".translateField")
                .querySelector(".fieldValue").innerHTML = translate;
        this.cardCont.remove();
    }
}
//# sourceMappingURL=adminCards.js.map