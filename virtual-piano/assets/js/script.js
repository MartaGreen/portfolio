// piano buttons
// functions
function playSound_keyboard(e) {
  // params
  const audio = document.querySelector(`audio[data-code="${e.keyCode}"`);
  const key = document.querySelector(`.piano-key[data-code="${e.keyCode}"`);
  if (!audio) return;

  // styles
  const get_before_elem = document.querySelector(
    `.piano-key[data-code="${e.keyCode}"`
  );
  key.classList.add("playing-sound");
  get_before_elem.classList.add("playing-sound-letters");

  // music
  audio.currentTime = 0;
  audio.play();

  key.classList.add("piano-key-on-keyboard");
  window.removeEventListener("keydown", playSound_keyboard);
}

function playSound_mouse(e) {
  //console.log(window.getComputedStyle(e.target, '::before').content);
  console.log(e);
  const audio = document.querySelector(
    `audio[data-code="${e.target.dataset.code}"`
  );
  if (!audio) return;

  // styles
  const get_before_elem = document.querySelector(
    `.piano-key[data-code="${e.target.dataset.code}"`
  );
  e.target.classList.add("playing-sound");
  get_before_elem.classList.add("playing-sound-letters");
  e.target.classList.add("piano-key-on");

  // music
  audio.currentTime = 0;
  audio.play();
}

function removePlaySoundStyles(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing-sound");
  e.target.classList.remove("playing-sound-letters");
}

// main part
window.addEventListener("keydown", playSound_keyboard);
window.addEventListener("keyup", function (e) {
  const key = document.querySelector(`.piano-key[data-code="${e.keyCode}"`);
  key.classList.remove("piano-key-on-keyboard");
  window.addEventListener("keydown", playSound_keyboard);
});

const piano = document.querySelector("body");
//body.addEventListener('mousedown', playSound_mouse);
piano.addEventListener("mousedown", function (e) {
  if (e.path[0].classList.contains("piano-key")) {
    playSound_mouse(e);
    document
      .querySelector(".piano")
      .addEventListener("mouseover", playSound_mouse);
    document.querySelector(".piano").addEventListener("mouseout", function (e) {
      e.target.classList.remove("piano-key-on");
    });
  }
});

piano.addEventListener("mouseup", function (e) {
  document
    .querySelector(".piano")
    .removeEventListener("mouseover", playSound_mouse);
  e.target.classList.remove("piano-key-on");
});

const keys = document.querySelectorAll(".piano-key");
keys.forEach((key) =>
  key.addEventListener("transitionend", removePlaySoundStyles)
);


// change notes to letters
// functions
function changeToLetters(e) {
  document.querySelector(".btn-letters").classList.add("btn-active");
  document.querySelector(".btn-notes").classList.remove("btn-active");
  const elems_to_change = document.querySelectorAll(".piano-key");
  elems_to_change.forEach(function (elem) {
    elem.classList.remove("change-to-notes");
    elem.classList.add("change-to-letters");
  });
}

function changeToNotes(e) {
  document.querySelector(".btn-notes").classList.add("btn-active");
  document.querySelector(".btn-letters").classList.remove("btn-active");
  const elems_to_change = document.querySelectorAll(".piano-key");
  elems_to_change.forEach(function (elem) {
    elem.classList.remove("change-to-letters");
    elem.classList.add("change-to-notes");
  });
}

// main part
const change_letter = document.querySelector(".btn-letters");
change_letter.addEventListener("click", changeToLetters);

const change_notes = document.querySelector(".btn-notes");
change_notes.addEventListener("click", changeToNotes);

// fullscreen
// functions
function openFullScreen(e) {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else if (document.exitFullscreen) document.exitFullscreen();
}

const fullscreen = document.querySelector(".fullscreen");
fullscreen.addEventListener("click", openFullScreen);
