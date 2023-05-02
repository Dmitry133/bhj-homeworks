const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove("loader_active");
        let data = JSON.parse(xhr.responseText).response.Valute;

        for (let key in data) {
            let charCode = data[key].CharCode;
            let value = data[key].Value;

            let valuteResult = document.createElement("div");
                valuteResult.setAttribute("class", "item");
                valuteResult.innerHTML =
                    `<div class="item__code">${charCode}</div>
                    <div class="item__value">${value}</div>
                    <div class="item__currency">руб.</div>`;
            
            items.insertAdjacentElement("beforeEnd", valuteResult);
        };
    };
});