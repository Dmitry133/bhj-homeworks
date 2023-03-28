const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");
const sliderItems = Array.from(document.querySelectorAll(".slider__item"));

function swapPrev() {
    let slideIndex = sliderItems.findIndex(element => element.classList.contains("slider__item_active"));
    sliderItems[slideIndex].classList.remove("slider__item_active");

    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = sliderItems.length - 1;
    };

    return sliderItems[slideIndex].classList.add("slider__item_active");
};

function swapNext() {
    let slideIndex = sliderItems.findIndex(element => element.classList.contains("slider__item_active"));
    sliderItems[slideIndex].classList.remove("slider__item_active");

    if (slideIndex < sliderItems.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    };

    return sliderItems[slideIndex].classList.add("slider__item_active");
};

sliderArrowPrev.addEventListener("click", swapPrev);
sliderArrowNext.addEventListener("click", swapNext);