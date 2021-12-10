let isActive = false;

window.addEventListener('click', function() {
    if (isActive === false) {
        document.body.removeChild(document.querySelector('.click-me'));

        document.querySelector('.audio').loop = true;
        document.querySelector('.audio').play();
    
        document.querySelector('.audio1').loop = true;
        document.querySelector('.audio1').play();
    
        document.querySelector('.audio2').loop = true;
        document.querySelector('.audio2').play();
    
        document.querySelector('.audio3').loop = true;
        document.querySelector('.audio3').play();
    
        isActive = true;

        for (let i = 0; i < 100; i++) {
            setTimeout(function() {
                const video = document.createElement('video');
                video.classList.add('video');
                video.src = "https://www.youtube.com/embed/46pra8NwhzU";
                video.autoplay = true;
                video.loop = true;
                document.body.appendChild(video);
                console.log('create video');
            }, 50);
        }
    }
});