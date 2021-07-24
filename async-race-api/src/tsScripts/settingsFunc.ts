import { getCreateCar, getGarageData } from "../scripts/requests.js";
import { updateCarCount, generatePages } from "./shared.js";
import { Car } from "../scripts/imagesRender.js";
import { renderRace } from "../scripts/races.js";
import { addMoveEvent } from "./moveCarFunc.js";
import { CARS_MARK, CARS_MODELS } from "./carsNames.js";

const getCarData = () => {
  const carNameInput: HTMLInputElement =
    document.querySelector(".createCarName");
  const carName: string = carNameInput.value;

  const carColorInput: HTMLInputElement =
    document.querySelector(".createCarColor");
  const carColor: string = carColorInput.value;

  return [carName, carColor];
};

function addCreateEvent(carName, carColor) {
  const carNameInput: HTMLInputElement =
    document.querySelector(".createCarName");

  if (carName) {
    getCreateCar(carName, carColor).then((createdCarData) => {
      const RACE_FILED: HTMLElement = document.querySelector(".raceField");
      const car: Car = renderRace(
        createdCarData.color,
        createdCarData.name,
        createdCarData.id,
        RACE_FILED
      );

      const startBtn: HTMLButtonElement = car.getRace().querySelector(".start");
      addMoveEvent(startBtn, car);

      car.removeCar();
      car.updateCar();
      updateCarCount();

      carNameInput.classList.remove("emptyName");

      const pageNum: number =
        Number(
          (<HTMLElement>document.querySelector(".page")).getAttribute("value")
        ) - 1;
      generatePages(pageNum * 7, (pageNum + 1) * 7);
    });
  } else {
    carNameInput.classList.add("emptyName");
  }
}

const createNewCar = async (carData: string[], type: string) => {
  if (type === "input") {
    const createBtn: HTMLElement = document.querySelector(".create");
    createBtn.addEventListener("click", () => {
      const data: string[] = getCarData();
      addCreateEvent(data[0], data[1]);
    });
  } else if (type === "random") {
    addCreateEvent(carData[0], carData[1]);
  }
};

const startRace = async () => {
  const raceBtn: HTMLButtonElement = document.querySelector(".race");
  raceBtn.addEventListener("click", () => {
    const races = document.querySelectorAll(".raceTrack:not(.nextPage_race)");
    races.forEach((race) => {
      const btn: HTMLButtonElement = race.querySelector(".start");
      btn.click();
    });
  });
};

const resetRace = async () => {
  const resetBtn: HTMLButtonElement = document.querySelector(".reset");
  resetBtn.addEventListener("click", function resetRaceEvent() {
    const races = document.querySelectorAll(".raceTrack:not(.nextPage_race)");
    races.forEach((race) => {
      const btn: HTMLButtonElement = race.querySelector(".stop");
      btn.click();
    });
  });
};

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
  const generateBtn: HTMLButtonElement = document.querySelector(".generate");
  generateBtn.addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
      const carColor: string = getRandomColor();
      const carMark: string = CARS_MARK[getRandomNum(0, CARS_MARK.length - 1)];
      const carModelArr: string[] = CARS_MODELS[carMark];
      const carModel: string =
        carModelArr[getRandomNum(0, carModelArr.length - 1)];

      const carName = carMark + " " + carModel;
      createNewCar([carName, carColor], "random");
      const createBtn: HTMLButtonElement = document.querySelector(".create");
      createBtn.click();
    }
  });
};

const deleteSomeCars = () => {
  const deleteCarCountInput =
    document.querySelector<HTMLInputElement>(".deleteCarCount");
  deleteCarCountInput.setAttribute("placeholder", "delete this amount of cars");
  const deleteBtn: HTMLButtonElement = document.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    const carsCount: number = Number(deleteCarCountInput.value);
    const cars = Array.from(document.querySelectorAll(".raceTrack"));
    cars.reverse();
    for (let i = 0; i < carsCount; i++) {
      if (cars[i]) {
        const removeBtn: HTMLButtonElement = cars[i].querySelector(".remove");
        removeBtn.click();
      }
    }
  });
};

async function waitForRendering() {
  await getGarageData();
  await startRace();
  await resetRace();
  await createNewCar([""], "input");
  await randomCarGenerate();
  await deleteSomeCars();
}

waitForRendering();
