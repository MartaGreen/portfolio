const ctx = new (window.AudioContext || window.webkitAudioContext)();
const volume = ctx.createGain();

const startBtns = document.querySelectorAll(".startBtn");
startBtns.forEach((startBtn) => {
  startBtn.addEventListener("click", () => {
    const osc = ctx.createOscillator();

    volume.connect(ctx.destination);
  
    osc.start();
    osc.connect(volume);
    osc.stop(ctx.currentTime + 2);
  });
});

const volumeUp = document.querySelector(".volumeUp");
const volumeDown = document.querySelector(".volumeDown");

volumeUp.addEventListener("click", () => {
  console.log("test")
  volume.gain.value += 0.5;
})
volumeDown.addEventListener("click", () => {
  volume.gain.value -= 0.5;
})
