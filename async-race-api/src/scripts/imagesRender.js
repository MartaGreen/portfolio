import { getFlagPos, addPX, addAnimation, addStopEvent, addMoveEvent, } from "./moveCarFunc";
import { getCarEngine, getDriveStatus, getStopCar, getRemoveCar, getUpdateCar, } from "../scripts/requests.js";
import { updateCarCount, generatePages } from "./shared.js";
export class Car {
    constructor(color, name, id) {
        this.color = color;
        this.name = name;
        this.id = String(id);
    }
    renderCar() {
        const CAR_HTML = `<?xml version="1.0" encoding="iso-8859-1"?>
      <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <svg version="1.1" id="${this.id}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 612.001 612.001" style="enable-background:new 0 0 612.001 612.001;" xml:space="preserve" fill='${this.color}' class='car'>
      <g>
        <path d="M589.333,276.033c-11.234-3.756-89.378-20.834-89.378-20.834s-144.86-82.375-162.245-82.375s-136.639,0.053-136.639,0.053
          c-29.137,0-53.487,22.203-81.68,47.909c-13.287,12.112-27.953,25.442-44.13,37.299l-60.249,8.011
          C6.306,268.872,0,277.018,0,286.643v69.03c0,11.913,9.656,21.571,21.57,21.571h41.401c3.007,34.65,32.153,61.932,67.57,61.932
          c35.415,0,64.563-27.283,67.57-61.931h197.687c3.007,34.65,32.153,61.931,67.57,61.931s64.563-27.283,67.57-61.931h34.013
          c26.95,0,40.119-11.64,43.426-22.566C616.739,327.03,610.724,283.185,589.333,276.033z M130.541,406.48
          c-19.38,0-35.148-15.766-35.148-35.146s15.766-35.148,35.148-35.148c19.38,0,35.146,15.766,35.146,35.148
          C165.688,390.714,149.921,406.48,130.541,406.48z M261.008,255.201H143.134c8.526-6.736,16.409-13.886,23.671-20.505
          c19.086-17.402,35.57-32.432,55.294-32.432c0,0,17.85-0.008,38.91-0.017V255.201z M289.711,202.236
          c14.588-0.005,27.592-0.009,34.116-0.009c16.245,0,82.135,38.264,106.864,52.975h-140.98L289.711,202.236L289.711,202.236z
          M463.367,406.48c-19.38,0-35.146-15.766-35.146-35.146s15.766-35.148,35.146-35.148c19.38,0,35.148,15.766,35.148,35.148
          C498.515,390.714,482.747,406.48,463.367,406.48z"/>
      </g>
      </svg>`;
        return CAR_HTML;
    }
    move() {
        const race = this.getRace();
        const car = this.getRendredCar();
        getCarEngine(this.id)
            .then((data) => {
            const startBtn = race.querySelector(".start");
            const stopBtn = race.querySelector(".stop");
            startBtn.classList.add("notActiveMoveBtn");
            stopBtn.classList.remove("notActiveMoveBtn");
            const time = data.distance / data.velocity;
            const flagPos = getFlagPos(race);
            const carFinishPos = addPX(flagPos);
            this.carAnim = addAnimation(car, carFinishPos, time);
            addStopEvent(stopBtn, this);
            getDriveStatus(this.id).catch((err) => {
                this.carAnim.pause();
            });
        })
            .catch((err) => console.log("error", err));
    }
    stopMove() {
        getStopCar(this.id).then(() => {
            if (this.carAnim)
                this.carAnim.cancel();
            const race = this.getRace();
            const startBtn = race.querySelector(".start");
            const stopBtn = race.querySelector(".stop");
            addMoveEvent(startBtn, this);
            startBtn.classList.remove("notActiveMoveBtn");
            stopBtn.classList.add("notActiveMoveBtn");
        });
        return "done";
    }
    getRace() {
        return document.querySelector(`.raceTrack${this.id}`);
    }
    getRendredCar() {
        return document.getElementById(String(this.id));
    }
    removeCar() {
        const race = this.getRace();
        const removeBtn = race.querySelector(".remove");
        removeBtn.addEventListener("click", () => {
            getRemoveCar(this.id).then((garageData) => {
                race.remove();
                updateCarCount();
                const pageNum = Number(document.querySelector(".page").getAttribute("value"));
                generatePages((pageNum - 1) * 7, pageNum * 7);
            });
        });
    }
    updateCar() {
        const race = this.getRace();
        const updateBtn = document.querySelector(".update");
        const selectBtn = race.querySelector(".select");
        const carID = this.id;
        const theCar = this;
        selectBtn.addEventListener("click", () => {
            const createCarField = document.querySelector(".createCar");
            const updateCarField = document.querySelector(".updateCar");
            createCarField.classList.add("notActive");
            updateCarField.classList.remove("notActive");
            const createBtn = (document.querySelector(".create"));
            createBtn.setAttribute("disabled", "disabled");
            const updateInput = updateCarField.querySelector(".carName");
            const updateColor = updateCarField.querySelector(".carColor");
            updateInput.focus();
            updateInput.value = this.name;
            updateColor.value = this.color;
            document.querySelector(".createCarName").value = "";
            document.querySelector(".createCarColor").value =
                "black";
            updateBtn.addEventListener("click", function addUpdateEvent() {
                updateBtn.removeEventListener("click", addUpdateEvent);
                const newName = updateInput.value || theCar.name;
                const newColor = updateColor.value;
                getUpdateCar(carID, newName, newColor).then((carData) => {
                    const car = race.querySelector(".car");
                    car.style.fill = carData.color;
                    const carTitle = race.querySelector(".carTitle");
                    carTitle.innerHTML = carData.name;
                    createCarField.classList.remove("notActive");
                    updateCarField.classList.add("notActive");
                    updateInput.value = "";
                    updateColor.value = "black";
                    theCar.color = carData.color;
                    theCar.name = carData.name || theCar.name;
                    createBtn.removeAttribute("disabled");
                });
            });
        });
    }
}
export class Flag {
    constructor() { }
    renderFlag() {
        const FLAG_HTML = `<?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg class='flag' fill='red' enable-background="new 0 0 64 64" height="64px" id="Layer_1" version="1.1" viewBox="0 0 64 64" width="64px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M54.227,12.611c-0.338-0.336-0.736-0.505-1.196-0.505c-0.229,0-0.712,0.188-1.446,0.559  c-0.735,0.372-1.515,0.786-2.336,1.248c-0.823,0.459-1.797,0.875-2.921,1.247c-1.123,0.371-2.163,0.559-3.12,0.559  c-0.884,0-1.664-0.168-2.336-0.505c-2.229-1.044-4.168-1.823-5.814-2.337c-1.646-0.513-3.416-0.771-5.311-0.771  c-3.272,0-6.999,1.064-11.177,3.188c-0.862,0.43-1.48,0.763-1.88,1.007l-0.397-2.911c0.897-0.779,1.476-1.914,1.476-3.195  c0-2.347-1.902-4.249-4.249-4.249c-2.347,0-4.249,1.902-4.249,4.249c0,1.531,0.818,2.862,2.032,3.61l5.74,42.09  c0.171,1.253,1.243,2.162,2.474,2.162c0.112,0,0.226-0.007,0.341-0.022c1.368-0.188,2.326-1.447,2.139-2.815L19.69,38.303  c4.186-2.077,7.807-3.124,10.853-3.124c1.293,0,2.554,0.193,3.783,0.583c1.23,0.391,2.253,0.815,3.067,1.274  c0.814,0.46,1.775,0.886,2.88,1.274c1.107,0.39,2.2,0.585,3.279,0.585c2.726,0,5.991-1.027,9.796-3.08  c0.478-0.248,0.828-0.492,1.049-0.731c0.221-0.239,0.332-0.579,0.332-1.021V13.806C54.729,13.347,54.562,12.948,54.227,12.611z"/></svg>`;
        return FLAG_HTML;
    }
}
//# sourceMappingURL=imagesRender.js.map