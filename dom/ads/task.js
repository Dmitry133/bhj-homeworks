const rotatorCases = Array.from(document.querySelectorAll(".rotator__case"));


function changeAds() {

let index = rotatorCases.findIndex(element => element.classList.contains("rotator__case_active"));

    rotatorCases.forEach(element => {
        if (index < rotatorCases.length - 1) {
            element.classList.remove("rotator__case_active");
        } else {
            index = -1;
        }

        rotatorCases[index + 1].classList.add("rotator__case_active");
    });
};


setInterval(changeAds, 1000);
