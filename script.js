const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");
const musicButton = document.getElementById("music-button");
const backgroundMusic = document.getElementById("background-music");

video1.src = "transicao-2.mp4";
video2.src = "transicao-1.mp4";

let isMusicPlaying = false;

video1.addEventListener("loadeddata", () => {
  video1.currentTime = 0;
  video1.pause();
});

musicButton.addEventListener("click", () => {
  if (isMusicPlaying) {
    video2.classList.remove("hidden");
    video1.classList.add("hidden");
    video2.play();
    backgroundMusic.pause();
  } else {
    video1.classList.remove("hidden");
    video2.classList.add("hidden");
    video1.play();
    setTimeout(() => {
      backgroundMusic.play();
    }, 1000);
  }

  isMusicPlaying = !isMusicPlaying;

  (isMusicPlaying ? video1 : video2).onended = () => {
    (isMusicPlaying ? video1 : video2).pause();
  };
});

window.addEventListener("DOMContentLoaded", () => {
  backgroundMusic.muted = false;
  const playPromise = backgroundMusic.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => console.log("Música iniciada automaticamente!"))
      .catch(() => console.log("Navegador bloqueou o autoplay. Aguardando clique..."));
  }
});
