const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"))

tabs.forEach(element => element.addEventListener("click", (evt) => {
    let tabIndex = tabs.indexOf(element);

        tabs.forEach(elem => elem.classList.remove("tab_active"));
        
        tabContent.forEach(item => item.classList.remove("tab__content_active")); 

        element.classList.add('tab_active');
        tabContent[tabIndex].classList.add("tab__content_active");
        evt.preventDefault();
}));