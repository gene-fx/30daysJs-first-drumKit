window.addEventListener("keydown", keyDownEvt);

function keyDownEvt(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;
  if (!key) return;

  key.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".key");

keys.forEach((element) =>
  element.addEventListener("transitionend", removeTransition)
);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
