const menuLink = Array.from(document.getElementsByClassName("menu__link"));

menuLink.forEach(element => element.addEventListener("click", function(dis) {
     if (element.closest('.menu__item').querySelector(".menu_sub")) {
        const menuSub = Array.from(element.parentElement.getElementsByClassName('menu_sub'));
        menuSub.forEach(element => element.classList.toggle('menu_active'));
        dis.preventDefault();
    };
}));
