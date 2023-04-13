const checkBoxes = Array.from(document.querySelectorAll(".interest__check"));

checkBoxes.forEach(element => element.addEventListener("change", ()=> {
    const childCheckbox = Array.from(element.closest(".interest").querySelectorAll(".interest__check"));

    if ((element.checked) && (element.closest("ul.interests_active") === null)) {
        
        childCheckbox.forEach(childElement => childElement.checked = true);

    } else if ((!element.checked) && (element.closest("ul.interests_active") === null)) {
        
        childCheckbox.forEach(childElement => childElement.checked = false);
    }
}));
