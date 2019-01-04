(function () {
    document.querySelector("#play-video").addEventListener("click", function (e) {
        e.preventDefault();
        const videoOverlayID = document.querySelector("#video-overlay");
        const videoOverlayClass = document.querySelector(".video-overlay");
        const videoOverlayCloseClass = document.querySelector(".video-overlay-close");
        const videoIframe = document.querySelector("#video-iframe");
        const bodyWidth = document.querySelector('body').offsetWidth;

        if (bodyWidth > 740) {
            videoIframe.style.width = "700px";
            videoIframe.style.height = "394px";
        } else if (bodyWidth > 1200) {
            videoIframe.style.width = "1000px";
            videoIframe.style.height = "563px";
        } else if (bodyWidth > 1440) {
            videoIframe.style.width = "1300px";
            videoIframe.style.height = "731px";
        } else {
            videoIframe.style.width = "320px";
            videoIframe.style.height = "180px";
        }

        videoOverlayID.classList.add("open");

        videoOverlayClass.addEventListener("click", function (e) {
            e.preventDefault();
            videoOverlayClass.classList.remove("open");
        })

        videoOverlayCloseClass.addEventListener("click", function (e) {
            e.preventDefault();
            videoOverlayClass.classList.remove("open");
        })
    })
})();