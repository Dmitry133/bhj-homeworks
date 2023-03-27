let deads = document.getElementById("dead");
let losts = document.getElementById("lost");

const getHole = function(index) {
    return document.getElementById(`hole${index}`);
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes("hole_has-mole")) {
            deads.textContent ++;
          } else {
            losts.textContent ++;
          };

          if (deads.textContent == 10) {
            alert("Вы выйграли!");
            deads.textContent = 0;
            losts.textContent = 0;
          } else if (losts.textContent == 5) {
            alert("Вы проиграли!");
            deads.textContent = 0;
            losts.textContent = 0;
          };
    };
};
 

