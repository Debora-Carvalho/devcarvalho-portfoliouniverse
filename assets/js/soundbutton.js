const audio = document.getElementById('background-music');
const soundButton = document.querySelector('.sound-button');

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        soundButton.classList.add('playing');
    } else {
        audio.pause();
        soundButton.classList.remove('playing');
    }
}
