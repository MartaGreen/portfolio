import { createCard, createBtn } from "./shared";
import { createNewCardReq, deleteCard, updateCardReq } from "./requests";

export class Card {
  cardCont: HTMLDivElement;
  cardName: string;
  imgSrc: string;
  translate: string;
  soundSrc: string;
  categoryName: string;

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
    const fieldsCont: HTMLDivElement = document.createElement("div");
    fieldsCont.setAttribute("class", "fieldsCont");

    this.renderField("fieldCont wordField", "Word", this.cardName, fieldsCont);
    this.renderField(
      "fieldCont translateField",
      "Translation",
      this.translate,
      fieldsCont
    );
    const soundField: HTMLDivElement = this.rednerSound();
    fieldsCont.appendChild(soundField);
    const imageField: HTMLDivElement = this.renderImg();
    fieldsCont.appendChild(imageField);

    this.cardCont.appendChild(fieldsCont);
    this.renderUpdateBtb();
  }

  renderField(
    cls: string,
    fieldName: string,
    fieldValue: string,
    cont: HTMLDivElement
  ) {
    const fieldCont: HTMLDivElement = document.createElement("div");
    fieldCont.setAttribute("class", cls);

    const fontWeight: HTMLElement = document.createElement("b");
    fontWeight.innerHTML = fieldName;
    fieldCont.appendChild(fontWeight);

    const value: HTMLSpanElement = document.createElement("span");
    value.setAttribute("class", "fieldValue");
    value.innerHTML += fieldValue;
    fieldCont.appendChild(value);
    cont.appendChild(fieldCont);
  }

  rednerSound() {
    const fieldCont: HTMLDivElement = document.createElement("div");
    fieldCont.setAttribute("class", "fieldCont soundField");

    const fieldName: HTMLElement = document.createElement("b");
    fieldName.innerHTML = "Sound";
    fieldCont.appendChild(fieldName);

    const sound: HTMLSpanElement = document.createElement("span");
    sound.setAttribute("class", "listenSound");
    sound.innerHTML = `listen ${this.cardName}.mp3`;
    const audio: HTMLAudioElement = document.createElement("audio");
    audio.src = this.soundSrc;
    sound.appendChild(audio);
    this.playSoundFunc(sound, audio);

    fieldCont.appendChild(sound);
    return fieldCont;
  }

  playSoundFunc(field: HTMLSpanElement, sound: HTMLAudioElement) {
    field.addEventListener("click", () => {
      sound.play();
    });
  }

  renderImg() {
    const fieldCont: HTMLDivElement = document.createElement("div");
    fieldCont.setAttribute("class", "fieldCont imageField");

    const fieldName: HTMLElement = document.createElement("b");
    fieldName.innerHTML = "Image";
    fieldCont.appendChild(fieldName);

    const canvContainer: HTMLDivElement = createCard(this.imgSrc);
    fieldCont.appendChild(canvContainer);

    return fieldCont;
  }

  renderUpdateBtb() {
    const updateCardBtn: HTMLInputElement = createBtn("updateBtn", "update");
    this.updateBtnFunc(updateCardBtn);
    this.cardCont.appendChild(updateCardBtn);
  }

  updateBtnFunc(btn: HTMLInputElement) {
    btn.addEventListener("click", () => {
      const updateStructure: updateCard = new updateCard(
        this.categoryName,
        this.cardName
      );
      const updateStructurerender: HTMLDivElement = updateStructure.render();
      updateStructurerender.classList.add("updateSample");

      (<HTMLInputElement>updateStructurerender.querySelector(".name")).value =
        this.cardName;
      (<HTMLInputElement>(
        updateStructurerender.querySelector(".translate")
      )).value = this.translate;

      this.cardCont.appendChild(updateStructurerender);
    });
  }

  rmBtn() {
    const btnIconCont: HTMLDivElement = document.createElement("div");
    btnIconCont.setAttribute("class", "btnIconCont");
    const btnIcon: string = `<?xml version="1.0" ?><svg class="rmCategoryBtn" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>`;
    btnIconCont.innerHTML = btnIcon;
    this.rmFunc(btnIconCont);
    this.cardCont.appendChild(btnIconCont);
  }

  rmFunc(btn: HTMLDivElement) {
    btn.addEventListener("click", async () => {
      console.log(this.categoryName);
      await deleteCard(this.categoryName, this.cardName).then((data) => data);
      this.cardCont.remove();
    });
  }

  render() {
    return this.cardCont;
  }
}

export class createNewCardSample {
  cardCont: HTMLDivElement;
  categoryName: string;
  constructor(category) {
    this.cardCont = document.createElement("div");
    this.cardCont.setAttribute("class", "cardCont");
    this.categoryName = category;

    const title: HTMLElement = document.createElement("h3");
    title.setAttribute("class", "cardTitle");
    title.innerHTML = "Add new word";
    this.cardCont.appendChild(title);

    this.createBtn();
  }

  createBtn() {
    const createBtn: HTMLDivElement = document.createElement("div");
    createBtn.setAttribute("class", "newCategoryBtnCont");
    createBtn.innerHTML = `<?xml version="1.0" ?><svg class="newCategoryBtn" data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M90,61H67V38a3,3,0,0,0-6,0V61H38a3,3,0,0,0,0,6H61V90a3,3,0,0,0,6,0V67H90a3,3,0,0,0,0-6Z"/></svg>`;
    this.createBtnFunc(createBtn);
    this.cardCont.appendChild(createBtn);
  }

  createBtnFunc(btn: HTMLDivElement) {
    btn.addEventListener("click", () => {
      const templ: createNewCard = new createNewCard(this.categoryName);
      const renderSample: HTMLDivElement = templ.render();
      this.cardCont.parentNode.insertBefore(renderSample, this.cardCont);
    });
  }

  render() {
    return this.cardCont;
  }
}

class sample {
  cardCont: HTMLDivElement;
  categoryName: string;
  createBtn: HTMLInputElement;
  constructor(category) {
    this.cardCont = document.createElement("div");
    this.cardCont.setAttribute("class", "cardCont");
    this.categoryName = category;

    this.renderCardStructure();
  }

  renderCardStructure() {
    const wordFieldCont: HTMLDivElement = document.createElement("div");
    wordFieldCont.setAttribute("class", "wordFieldCont");
    this.renderInputField("wordField name", "name", wordFieldCont);
    this.renderInputField("wordField translate", "translation", wordFieldCont);

    const fileFieldCont: HTMLDivElement = document.createElement("div");
    fileFieldCont.setAttribute("class", "fileFieldCont");
    this.renderFiles("fileField soundFile", "Sound", fileFieldCont);
    this.renderFiles("fileField imageFile", "Image", fileFieldCont);

    const cardBtnCont: HTMLDivElement = document.createElement("div");
    cardBtnCont.setAttribute("class", "cardBtnCont");
    this.createBtn = this.renderBtn("confirmBtn cardBtn", "ok", cardBtnCont);
    const cancelBtn: HTMLInputElement = this.renderBtn(
      "cancelBtn cardBtn",
      "cancel",
      cardBtnCont
    );
    this.cancelFunction(cancelBtn);

    this.cardCont.appendChild(wordFieldCont);
    this.cardCont.appendChild(fileFieldCont);
    this.cardCont.appendChild(cardBtnCont);
  }

  cancelFunction(btn: HTMLInputElement) {
    btn.addEventListener("click", () => {
      this.cardCont.remove();
    });
  }

  renderInputField(cls, placeholder, container) {
    const field: HTMLInputElement = document.createElement("input");
    field.setAttribute("class", cls);
    field.setAttribute("placeholder", placeholder);
    container.appendChild(field);
  }

  renderFiles(cls, name: string, container) {
    const fieled: HTMLDivElement = document.createElement("div");
    fieled.setAttribute("class", cls);

    const fieldName: HTMLSpanElement = document.createElement("span");
    fieldName.setAttribute("class", "fileFieldName");
    fieldName.innerHTML = name;

    const fieldInput: HTMLInputElement = document.createElement("input");
    fieldInput.setAttribute("class", "fileFieldFile");
    fieldInput.setAttribute("type", "file");

    fieled.appendChild(fieldName);
    fieled.appendChild(fieldInput);

    container.appendChild(fieled);
  }

  renderBtn(clas, value, container) {
    const btn: HTMLInputElement = createBtn(clas, value);
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

  createCardFunc(btn: HTMLInputElement) {
    btn.addEventListener("click", async () => {
      const msg: HTMLSpanElement = this.cardCont.querySelector(".warningMsg");
      if (msg) msg.remove();

      const name: string = (<HTMLInputElement>(
        this.cardCont.querySelector(".name")
      )).value;
      const translate: string = (<HTMLInputElement>(
        this.cardCont.querySelector(".translate")
      )).value;

      const imageFile = (<HTMLInputElement>(
        this.cardCont
          .querySelector(".imageFile")
          .querySelector(".fileFieldFile")
      )).files[0];
      const soundFile = (<HTMLInputElement>(
        this.cardCont
          .querySelector(".soundFile")
          .querySelector(".fileFieldFile")
      )).files[0];

      if (name && translate && imageFile && soundFile) {
        const formData = new FormData();
        formData.append("category", this.categoryName);
        formData.append("cardName", name);
        formData.append("translate", translate);
        formData.append("image", imageFile);
        formData.append("sound", soundFile);

        await createNewCardReq(formData).then((data) => data);

        const imgSrc: string = URL.createObjectURL(imageFile);
        const soundSrc: string = URL.createObjectURL(soundFile);
        const newCard: Card = new Card(
          name,
          translate,
          imgSrc,
          soundSrc,
          this.categoryName
        );
        const renderNewCard: HTMLDivElement = newCard.render();
        this.cardCont.parentNode.insertBefore(renderNewCard, this.cardCont);
        this.cardCont.remove();
      } else {
        const warningMsg: HTMLSpanElement = document.createElement("span");
        warningMsg.setAttribute("class", "warningMsg");
        warningMsg.innerHTML = "Warning: some fields are empty!";
        this.cardCont.appendChild(warningMsg);
      }
    });
  }
}

class updateCard extends sample {
  categoryName: string;
  oldCardName: string;
  constructor(category, cardName) {
    super(category);
    this.categoryName = category;
    this.oldCardName = cardName;
    this.updateCardFunc(this.createBtn);
  }

  updateCardFunc(btn: HTMLInputElement) {
    btn.addEventListener("click", async () => {
      const newName: string = (<HTMLInputElement>(
        this.cardCont.querySelector(".name")
      )).value;
      const newTranslate: string = (<HTMLInputElement>(
        this.cardCont.querySelector(".translate")
      )).value;

      const newImageFile = (<HTMLInputElement>(
        this.cardCont
          .querySelector(".imageFile")
          .querySelector(".fileFieldFile")
      )).files[0];
      const newSoundFile = (<HTMLInputElement>(
        this.cardCont
          .querySelector(".soundFile")
          .querySelector(".fileFieldFile")
      )).files[0];

      const formData = new FormData();
      formData.append("newName", newName);
      formData.append("translate", newTranslate);
      formData.append("imgSrc", newImageFile);
      formData.append("soundSrc", newSoundFile);
      formData.append("oldName", this.oldCardName);
      formData.append("category", this.categoryName);

      await updateCardReq(formData).then((data) => data);

      if (newImageFile) var imgUrl = URL.createObjectURL(newImageFile);
      if (newSoundFile) var soundUrl = URL.createObjectURL(newSoundFile);
      this.cardsUpdatedView(soundUrl, imgUrl, newName, newTranslate);
    });
  }

  cardsUpdatedView(soundUrl, imgUrl, name, translate) {
    if (soundUrl) {
      const updateSound: HTMLAudioElement = this.cardCont.parentElement
        .querySelector(".soundField")
        .querySelector("audio");
      updateSound.src = soundUrl;
    }
    if (imgUrl) {
      const updateCanvas: HTMLCanvasElement =
        this.cardCont.parentElement.querySelector(".imageField");
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
