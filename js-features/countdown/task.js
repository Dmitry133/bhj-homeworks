function countdown() {
    let timer = document.getElementById("timer");

    if (timer.textContent > 0) {
        timer.textContent--;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
    };
};

let interval = setInterval(countdown, 1000);