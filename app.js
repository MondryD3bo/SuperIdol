let isActive = false;

window.addEventListener('click', function() {
    if (isActive === false) {
        document.body.removeChild(document.querySelector('.click-me'));

        for (let i = 0; i < 25 ; i++) {
            const video = document.createElement('video');
            video.classList.add('video');
            video.src = 'assets/video/superidol.mp4';
            video.autoplay = true;
            video.loop = true;
            document.body.appendChild(video);
        }
    
        isActive = true;

        for (let i = 0; i < 25; i++) {
            const audio = document.createElement('audio');
            audio.classList.add('audio');
            audio.src = 'assets/audio/superidol.mp3';
            audio.autoplay = true;
            audio.loop = true;
            audio.play();
        }
    }
});

// 1500 / 750