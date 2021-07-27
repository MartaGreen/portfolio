startBtns.forEach((startBtn) => {
  startBtn.style.width = "100px";
  startBtn.style.height = "100px";
  startBtn.style.borderRadius = "50%";
  startBtn.style.backgroundColor = "rgb(23 214 23)";
  startBtn.style.cursor = "pointer";
  startBtn.style.outline = "none";
  startBtn.style.border = "1px solid #0ce60c";
  startBtn.style.color = "white";
  startBtn.style.fontSize = "24px";
});

const volumeBtns = document.querySelectorAll(".volume");
volumeBtns.forEach(volumeBtn => {
  volumeBtn.style.width = "100px";
  volumeBtn.style.height = "30px";
  volumeBtn.style.backgroundColor = "red";
  volumeBtn.style.borderRadius = "7px";
  volumeBtn.style.outline = "none";
  volumeBtn.style.border = "1px solid red";
  volumeBtn.style.cursor = "pointer";
})
