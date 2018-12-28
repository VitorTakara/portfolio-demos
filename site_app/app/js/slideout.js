(function () {
    let slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70,
        'easing': 'ease'
    });

    // Toggle button
    document.querySelector('.toggle-button').addEventListener('click', function () {
        slideout.toggle();
    });

    // Fecha o menu lateral ao clicar em alguma âncora
    document.querySelector('.sideMenu').querySelectorAll('a').forEach(i => {
        i.addEventListener("click", () => {
            slideout.toggle();
        });
    })
})();