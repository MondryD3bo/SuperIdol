let isActive = false;

window.addEventListener('click', () => {
    if (isActive === false) {
        const a = document.createElement('a');
        a.href = '/assets/img/super_idol.jpg';
        a.setAttribute('download', 'super-idol.jpg');
        document.body.appendChild(a);

        document.body.removeChild(document.querySelector('.click-me'));

        const elem = document.createElement('video');
        elem.classList.add('video');
        elem.src = '/assets/video/superidol.mp4';
        elem.autoplay = true;
        elem.loop = true;
        document.body.appendChild(elem);

        const openFullscreen = () => {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }
    
        isActive = true;

        for (let i = 0; i < 25; i++) {
            const audio = document.createElement('audio');
            audio.classList.add('audio');
            audio.src = '/assets/audio/superidol.mp3';
            audio.autoplay = true;
            audio.loop = true;
            audio.play();
        }

        openFullscreen();
    }
});

// 1500 / 750