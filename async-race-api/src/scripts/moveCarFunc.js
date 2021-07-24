import { cars_arr } from "./shared";
export function addPX(position) {
    const posNum = Number(position.split("px")[0]);
    return `${posNum + 60}px`;
}
export const getFlagPos = (race) => {
    const flagElem = race.querySelector(".flag");
    const styles = getComputedStyle(flagElem);
    const flagPos = styles.left;
    return flagPos;
};
export const moveCar = () => {
    cars_arr.forEach((car) => {
        const race = car.getRace();
        const startBtn = race.querySelector(".start");
        addMoveEvent(startBtn, car);
        car.removeCar();
        car.updateCar();
    });
};
export function addMoveEvent(startBtn, car) {
    startBtn.addEventListener("click", function moveEvent() {
        startBtn.removeEventListener("click", moveEvent);
        car.move();
    });
}
export function addStopEvent(stopBtn, car) {
    stopBtn.addEventListener("click", function stopEvent() {
        car.stopMove();
        stopBtn.removeEventListener("click", stopEvent);
    });
}
export function addAnimation(car, carFinishPos, time) {
    return car.animate([{ left: "60px" }, { left: carFinishPos }], {
        duration: time,
        easing: "linear",
        fill: "forwards",
    });
}
//# sourceMappingURL=moveCarFunc.js.map