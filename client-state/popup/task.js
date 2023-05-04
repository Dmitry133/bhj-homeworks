const modalClose = document.querySelector(".modal__close");
const subModal = document.getElementById("subscribe-modal");


if (getCookie("popup") != 'close') {
    subModal.classList.add('modal_active');
};  
  
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
};

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));

    if(cookie) {
        return cookie.substring(name.length + 1);
    };
};

modalClose.addEventListener("click", () => {
    subModal.classList.remove('modal_active');
    setCookie("popup", 'close');
    
  });