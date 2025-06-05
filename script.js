// Selecionando os elementos
const video1 = document.getElementById("video-1");
const video2 = document.getElementById("video-2");
const musicButton = document.getElementById("music-button");
const backgroundMusic = document.getElementById("background-music");

// Caminhos dos vídeos
video1.src = "transicao-2.mp4"; // Primeiro vídeo (inicial)
video2.src = "transicao-1.mp4"; // Segundo vídeo

let isMusicPlaying = false;

// Garante que o primeiro vídeo inicie congelado no primeiro frame
video1.addEventListener("loadeddata", () => {
    video1.currentTime = 0; // Congela no primeiro frame
    video1.pause();
});

// Evento de clique no botão
musicButton.addEventListener("click", () => {
    if (isMusicPlaying) {
        // Troca para o vídeo da música desligada
        video2.classList.remove("hidden");
        video1.classList.add("hidden");
        video2.play();

        // Pausa a música imediatamente
        backgroundMusic.pause();
    } else {
        // Troca para o vídeo da música ligada
        video1.classList.remove("hidden");
        video2.classList.add("hidden");
        video1.play();

        // Aguarda 3 segundos antes de iniciar a música
        setTimeout(() => {
            backgroundMusic.play();
        }, 1000); // 3000ms = 3 segundos
    }

    isMusicPlaying = !isMusicPlaying;

    // Congela o vídeo ao terminar a transição
    (isMusicPlaying ? video1 : video2).onended = () => {
        (isMusicPlaying ? video1 : video2).pause();
    };
});
window.addEventListener("DOMContentLoaded", () => {
    const backgroundMusic = document.getElementById("background-music");

    backgroundMusic.muted = false; // Remove mute
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise
            .then(() => console.log("Música iniciada automaticamente!"))
            .catch(() => console.log("Navegador bloqueou o autoplay. Aguardando clique..."));
    }
});

