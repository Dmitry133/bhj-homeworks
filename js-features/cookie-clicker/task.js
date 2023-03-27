let cookie = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");

cookie.onclick = function() {
        counter.textContent++;
      
        if (counter.textContent % 2 === 0) {
            cookie.width = 200;
        } else {
            cookie.width = 400;
        }
};
