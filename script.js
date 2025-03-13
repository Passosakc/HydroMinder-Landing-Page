document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("sticky-header");
    const hero = document.getElementById("hero");

    function checkScroll() {
        if (window.scrollY > hero.offsetHeight - 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", checkScroll);
});