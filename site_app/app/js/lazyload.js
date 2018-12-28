window.addEventListener('load', function () {
    const loading = document.querySelector("#loading");
    loading.classList.add("fadeOut");
    setTimeout(() => {
        loading.remove()
    }, 500);
}); 