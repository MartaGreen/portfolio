import { cars_arr } from "./shared";

export function addPX(position: string) {
  const posNum: number = Number(position.split("px")[0]);
  return `${posNum + 60}px`;
}

export const getFlagPos: (race) => string = (race: HTMLElement) => {
  const flagElem = race.querySelector(".flag");
  const styles = getComputedStyle(flagElem);
  const flagPos = styles.left;
  return flagPos;
};

export const moveCar = () => {
  cars_arr.forEach((car) => {
    const race = car.getRace();
    const startBtn: HTMLElement = race.querySelector(".start");
    addMoveEvent(startBtn, car);
    car.removeCar();
    car.updateCar();
  });
};

export function addMoveEvent(startBtn: HTMLElement, car) {
  startBtn.addEventListener("click", function moveEvent() {
    startBtn.removeEventListener("click", moveEvent);
    car.move();
  });
}

export function addStopEvent(stopBtn: HTMLElement, car) {
  stopBtn.addEventListener("click", function stopEvent() {
    car.stopMove();
    stopBtn.removeEventListener("click", stopEvent);
  });
}

export function addAnimation(
  car: HTMLElement,
  carFinishPos: string,
  time: number
) {
  return car.animate([{ left: "60px" }, { left: carFinishPos }], {
    duration: time,
    easing: "linear",
    fill: "forwards",
  });
}
