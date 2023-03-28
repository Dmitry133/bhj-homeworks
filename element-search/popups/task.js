const modalMain = document.getElementById("modal_main");
const modalClose = Array.from(document.getElementsByClassName("modal__close"));
const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");


modalMain.classList.add("modal_active");

modalClose.forEach(element => element.onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.remove('modal_active');
});

showSuccess.onclick = () => {
    modalSuccess.classList.add("modal_active");
};