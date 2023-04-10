const reveals = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", () => {
    reveals.forEach(element => {
        const {top, bottom} = element.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            element.classList.remove("reveal_active");
        } else {
            element.classList.add("reveal_active");
        }
    });
});

