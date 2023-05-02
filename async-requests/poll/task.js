const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        let result = JSON.parse(xhr.responseText);

        pollTitle.innerText = result.data.title;
        
        for (let i = 0; i < result.data.answers.length; i++) {
            pollAnswers.insertAdjacentHTML('beforeEnd',
            `<button class = "poll__answer">${result.data.answers[i]}</button>`)
          };

          const pollAnswer = document.querySelectorAll(".poll__answer");

          pollAnswer.forEach(element => element.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!");
            location.reload();
            //решил добавить перезагрузку страницы и добавил отступ в css чтоб кнопки не слипались 
          }));
    };
});