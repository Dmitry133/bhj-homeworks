const reveals = Array.from(document.querySelectorAll(".reveal"));

function isVisible() {

    reveals.forEach(element => {
        if ((element.getBoundingClientRect().bottom < 0 || element.getBoundingClientRect().top > window.innerHeight) && element.classList.contains("reveal_active")) {
            element.classList.remove("reveal_active");
        } else {
            element.classList.add("reveal_active");
        }
})};

window.addEventListener("scroll", () => isVisible());

