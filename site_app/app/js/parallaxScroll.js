(function () {
    let lastScroll = 0;
    let currentScroll;
    const velocityBG = isMobile() ? 0.5 : 1.2; // Velocidade dos elementos do Background
    const velocityCellPhones = isMobile() ? 45 : 10; // Velocidade dos celulares no Container-3
    const bg_el = document.querySelector(".main"); // Main Container
    const container3_el = document.querySelector(".container-3");
    const container3_img1 = document.querySelector(".container-3-img-1");
    const container3_img2 = document.querySelector(".container-3-img-2");
    const container3_img3 = document.querySelector(".container-3-img-3");

    // Seta valores iniciais dos elementos que serão animados pelo scroll
    container3_img1.style.marginTop = '-400px';
    container3_img2.style.marginTop = '100px';
    container3_img3.style.marginTop = '-400px';
    bg_el.style.backgroundPositionY = Math.round((bg_el.offsetHeight - window.pageYOffset || document.documentElement.scrollTop) * velocityBG) + 'px'; // Muda a posição Y quando carrega a página

    // On Scroll...
    window.addEventListener("scroll", function () {
        // Just background animation 
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        bg_el.style.backgroundPositionY = Math.round((bg_el.offsetHeight - scrollTop) * velocityBG) + 'px'; // Muda a posição Y do Bg

        // Update Current Scroll Value
        currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        // Handle Both Scroll (UP / DOWN)
        if (container3_el.getBoundingClientRect().top <= window.innerHeight * 0.75 && container3_el.getBoundingClientRect().top > 0) {
            if (isScrollingDown()) {
                if (parseFloatMarginTopPx(container3_img1) < 100) {
                    container3_img1.style.marginTop = parseFloatMarginTopPx(container3_img1) + velocityCellPhones + "px";
                    container3_img3.style.marginTop = parseFloatMarginTopPx(container3_img3) + velocityCellPhones + "px";
                }

                if (parseFloatMarginTopPx(container3_img2) > -400) {
                    container3_img2.style.marginTop = parseFloatMarginTopPx(container3_img2) - velocityCellPhones + "px";
                }
            } else {
                if (parseFloatMarginTopPx(container3_img1) > -400) {
                    container3_img1.style.marginTop = parseFloatMarginTopPx(container3_img1) - velocityCellPhones + "px";
                    container3_img3.style.marginTop = parseFloatMarginTopPx(container3_img3) - velocityCellPhones + "px";
                }

                if (parseFloatMarginTopPx(container3_img2) < 100) {
                    container3_img2.style.marginTop = parseFloatMarginTopPx(container3_img2) + velocityCellPhones + "px";
                }
            }
        }
    })

    // transforma valor de MarginTop => input: "10px" , output: 10 
    function parseFloatMarginTopPx(val) {
        return parseFloat(val.style.marginTop.replace(/px/, ""))
    }

    // Retorna TRUE se o usuário estiver  scrollando para baixo
    function isScrollingDown() {
        let retorno;

        if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            retorno = true;
        } else {
            lastScroll = currentScroll;
            retorno = false;
        }

        return retorno;
    }
})();