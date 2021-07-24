export const BODY = document.querySelector("body");
export let cars_arr = [];
export const createInput = (type, className, value) => {
    if (value === "disabled") {
        return `
      <input type='${type}' class='${className}' disabled='${value}'></input>
    `;
    }
    else {
        return `
      <input type='${type}' class='${className}' value='${value}'></input>
  `;
    }
};
export const updateCarCount = () => {
    const garage = document.querySelector(".garage");
    const newCarCount = document.querySelectorAll(".raceTrack").length;
    garage.innerHTML = `Garage (${newCarCount})`;
};
export const generatePages = (start, end) => {
    const races = document.querySelectorAll(".raceTrack");
    const nextBtn = document.querySelector(".next");
    if (!races[end]) {
        nextBtn.setAttribute("disabled", "disabled");
        nextBtn.classList.add("blockedBtn");
    }
    else {
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.remove("blockedBtn");
    }
    const prevBtn = document.querySelector(".prev");
    if (start === 0) {
        prevBtn.setAttribute("disabled", "disabled");
        prevBtn.classList.add("blockedBtn");
    }
    else {
        prevBtn.removeAttribute("disabled");
        prevBtn.classList.remove("blockedBtn");
    }
    races.forEach((race, idx) => {
        race.classList.remove("nextPage_race");
        if (!(idx >= start && idx < end)) {
            race.classList.add("nextPage_race");
        }
    });
};
//# sourceMappingURL=shared.js.map