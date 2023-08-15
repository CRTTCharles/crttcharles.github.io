var currentAudio = null;

function playAudioForDuration(audioSrc, duration) {
    var audio = new Audio(audioSrc);
    audio.play();

    // Arrêter l'audio après la durée spécifiée
    setTimeout(function() {
        audio.pause();
    }, duration);

    // Stocker la référence de l'audio en cours
    currentAudio = audio;
}

var audioLinks = document.getElementsByClassName('audioLink');
for (var i = 0; i < audioLinks.length; i++) {
    audioLinks[i].addEventListener('click', function() {
        if (currentAudio) {
            currentAudio.pause(); // Arrêtez l'audio en cours s'il y en a un
        }

        var audioSrc = this.getAttribute('data-audio-src');
        playAudioForDuration(audioSrc, 15000); // 15 secondes (15000 millisecondes)
    });
}