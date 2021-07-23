var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCreateCar, getGarageData } from "../scripts/requests.js";
import { renderRace } from "../scripts/races.js";
import { addMoveEvent } from "./moveCarFunc.js";
import { updateCarCount, generatePages } from "./shared.js";
import { CARS_MARK, CARS_MODELS } from "./carsNames.js";
const getCarData = () => {
    const carNameInput = document.querySelector(".createCarName");
    const carName = carNameInput.value;
    const carColorInput = document.querySelector(".createCarColor");
    const carColor = carColorInput.value;
    return [carName, carColor];
};
function addCreateEvent(carName, carColor) {
    const carNameInput = document.querySelector(".createCarName");
    if (carName) {
        getCreateCar(carName, carColor).then((createdCarData) => {
            const RACE_FILED = document.querySelector(".raceField");
            const car = renderRace(createdCarData.color, createdCarData.name, createdCarData.id, RACE_FILED);
            const startBtn = car.getRace().querySelector(".start");
            addMoveEvent(startBtn, car);
            car.removeCar();
            car.updateCar();
            updateCarCount();
            carNameInput.classList.remove("emptyName");
            const pageNum = Number(document.querySelector(".page").getAttribute("value")) - 1;
            generatePages(pageNum * 7, (pageNum + 1) * 7);
        });
    }
    else {
        carNameInput.classList.add("emptyName");
    }
}
const createNewCar = (carData, type) => __awaiter(void 0, void 0, void 0, function* () {
    if (type === "input") {
        const createBtn = document.querySelector(".create");
        createBtn.addEventListener("click", () => {
            const data = getCarData();
            addCreateEvent(data[0], data[1]);
        });
    }
    else if (type === "random") {
        addCreateEvent(carData[0], carData[1]);
    }
});
const startRace = () => __awaiter(void 0, void 0, void 0, function* () {
    const raceBtn = document.querySelector(".race");
    raceBtn.addEventListener("click", () => {
        const races = document.querySelectorAll(".raceTrack:not(.nextPage_race)");
        races.forEach((race) => {
            const btn = race.querySelector(".start");
            btn.click();
        });
    });
});
const resetRace = () => __awaiter(void 0, void 0, void 0, function* () {
    const resetBtn = document.querySelector(".reset");
    resetBtn.addEventListener("click", function resetRaceEvent() {
        const races = document.querySelectorAll(".raceTrack:not(.nextPage_race)");
        races.forEach((race) => {
            const btn = race.querySelector(".stop");
            btn.click();
        });
    });
});
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const randomCarGenerate = () => {
    const generateBtn = document.querySelector(".generate");
    generateBtn.addEventListener("click", () => {
        for (let i = 0; i < 100; i++) {
            const carColor = getRandomColor();
            const carMark = CARS_MARK[getRandomNum(0, CARS_MARK.length - 1)];
            const carModelArr = CARS_MODELS[carMark];
            const carModel = carModelArr[getRandomNum(0, carModelArr.length - 1)];
            const carName = carMark + " " + carModel;
            createNewCar([carName, carColor], "random");
            const createBtn = document.querySelector(".create");
            createBtn.click();
        }
    });
};
const deleteSomeCars = () => {
    const deleteCarCountInput = document.querySelector(".deleteCarCount");
    deleteCarCountInput.setAttribute("placeholder", "delete this amount of cars");
    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        const carsCount = Number(deleteCarCountInput.value);
        const cars = Array.from(document.querySelectorAll(".raceTrack"));
        cars.reverse();
        for (let i = 0; i < carsCount; i++) {
            if (cars[i]) {
                const removeBtn = cars[i].querySelector(".remove");
                removeBtn.click();
            }
        }
    });
};
function waitForRendering() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getGarageData();
        yield startRace();
        yield resetRace();
        yield createNewCar([""], "input");
        yield randomCarGenerate();
        yield deleteSomeCars();
    });
}
waitForRendering();
//# sourceMappingURL=settingsFunc.js.map