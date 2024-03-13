let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let ctrlIcon = document.getElementById("ctrl-icon");

audio.onloadedmetadata = function () {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
};

const playPause = () => {
  if (ctrlIcon && ctrlIcon.classList.contains("fa-pause")) {
    audio.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    audio.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};

audio.addEventListener("click", () => {
  audio.play();
});

if (audio.play()) {
  setInterval(() => {
    progress.value = audio.currentTime;
  }, 500);
}

progress.onchange = function () {
  audio.play();
  audio.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};
