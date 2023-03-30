const dropDownValue = document.querySelector(".dropdown__value");
const dropDownList = document.querySelector(".dropdown__list");
const dropDownItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropDownValue.addEventListener("click", (evt) => {
    dropDownList.classList.toggle("dropdown__list_active");
    evt.preventDefault();
});


dropDownItem.forEach(element => element.addEventListener("click", (evt) => {
    dropDownValue.textContent = element.textContent;
    dropDownList.classList.remove("dropdown__list_active");
    evt.preventDefault();
}));



