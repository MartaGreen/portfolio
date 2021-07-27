function changePictureFilters(filt_val, filt) {
  const picture = document.getElementById("picture-container");

  if (filt == "blur")
    picture.style.setProperty("--blur", String(filt_val) + "px");
  else if (filt == "hue")
    picture.style.setProperty("--hue", String(filt_val) + "deg");
  else picture.style.setProperty("--" + String(filt), String(filt_val) + "%");
}

function createNewImage(src) {
  const img = new Image();
  img.src = src;
  img.setAttribute("id", "picture");
  img.setAttribute("alt", "image");
  const picture = document.getElementById("picture");

  img.onload = () => {
    document.getElementById("picture-container").replaceChild(img, picture);
    console.log("loaded");
  };
}

function downloadImage() {
  const canvas = document.querySelector("canvas");

  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = document.querySelector("#picture").getAttribute("src");
  img.onload = function () {
    canvas.setAttribute("width", "800px");
    canvas.setAttribute("height", "800px");
    const ctx = canvas.getContext("2d");

    ctx.filter = "blur(" + document.querySelector("#blur").value + "px)";
    ctx.filter = "invert(" + document.querySelector("#invert").value + "%)";
    ctx.filter = "sepia(" + document.querySelector("#sepia").value + "%)";
    ctx.filter = "saturate(" + document.querySelector("#saturate").value + "%)";
    ctx.filter = "hue(" + document.querySelector("#hue").value + "deg)";
    ctx.drawImage(img, 0, 0);

    console.log(canvas.toDataURL());
    const link = document.createElement("a");
    link.download = "download.png";
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  };
}

var sliders = document.querySelectorAll(".slider-inner");

sliders.forEach((elem) => {
  const output = elem.querySelector(".filter-value");

  elem.oninput = function () {
    output.innerText = String(this.querySelector(".slider").value);
    const filt = elem.querySelector(".slider").getAttribute("name");
    changePictureFilters(this.querySelector(".slider").value, filt);
  };
});

const btn_reset = document.getElementsByClassName("btn-reset")[0];
btn_reset.addEventListener("click", () => {
  const picture = document.getElementById("picture-container");

  const variables = ["--blur", "--invert", "--sepia", "--hue"];
  for (let i = 0; i < variables.length; i++) {
    picture.style.setProperty(variables[i], "0");
  }
  picture.style.setProperty("--saturate", "100%");

  const output = document.getElementsByClassName("slider-inner");
  for (let i = 0; i < output.length; i++) {
    if (
      output[i].querySelector(".slider").getAttribute("name") === "saturate"
    ) {
      output[i].querySelector(".filter-value").value = "100";
      output[i].querySelector(".slider").value = "100";
    } else {
      output[i].querySelector(".filter-value").value = "0";
      output[i].querySelector(".slider").value = "0";
    }
  }
});

const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];
let img_counter = -1;

const btn_next = document.getElementsByClassName("btn-next")[0];
btn_next.addEventListener("click", () => {
  if (img_counter === 20) img_counter = 0;
  else img_counter += 1;

  createNewImage(
    "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/" +
      String(images[img_counter])
  );
});

const btn_load = document.querySelector(".btn-load--input");
btn_load.addEventListener("input", () => {
  console.log(btn_load.files);
  const file = btn_load.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    createNewImage(reader.result);
  };

  reader.readAsDataURL(file);
});

const btn_save = document.querySelector(".btn-save");
btn_save.addEventListener("click", () => {
  console.log("click");
  downloadImage();
});

function openFullScreen(e) {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else if (document.exitFullscreen) document.exitFullscreen();
}

const fullscreen = document.querySelector(".fullscreen");
fullscreen.addEventListener("click", openFullScreen);

/* с 6:00 до 11:59 - morning
с 12:00 до 17:59 - day
с 18:00 до 23:59 - evening
с 00:00 до 5:59 - night*/

//https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/01.jpg
//https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/18.jpg