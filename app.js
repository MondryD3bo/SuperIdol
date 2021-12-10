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
                video.src = "https://r5---sn-u2oxu-fgvs.googlevideo.com/videoplayback?expire=1639191543&ei=l7-zYdbbCcH3yQXd-464Cg&ip=217.97.127.185&id=o-AGQDQtIUUcq86zB03TAX9RKt8_v5nhfhc1lbv_yQE7C7&itag=18&source=youtube&requiressl=yes&mh=7y&mm=31%2C29&mn=sn-u2oxu-fgvs%2Csn-u2oxu-f5fe7&ms=au%2Crdu&mv=m&mvi=5&pl=24&initcwndbps=641250&vprv=1&mime=video%2Fmp4&ns=eXwNSb8GU4Lwo7nV4ZiNzK0G&gir=yes&clen=1692315&ratebypass=yes&dur=14.805&lmt=1637389211670872&mt=1639169575&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=5430434&n=hU70B1OBVMJSME&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAP-2TX9ev0Wl9kRxl7W6D6Yx3URgjuUO13MyaC37j5ftAiEAicpvjWiHdwarRCeArbAJ9J5yMHDrNJEj8shSJ2Wq7eQ%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgPX05KSt_4aQ2WBtPZcR2CrNmT-8m6ZJ8rIVVvmaEJDkCIQDvfoUW9wDrdPybg2YSskFrUCvRCV0rjrxV8rRFE15dqw%3D%3D";
                video.autoplay = true;
                video.loop = true;
                document.body.appendChild(video);
            }, 250);
        }
    }
});