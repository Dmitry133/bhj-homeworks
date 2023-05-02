const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e)=> {
   
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

    xhr.upload.onprogress = function(evt) {
        progress.value = evt.loaded / evt.total;
      };
    
      xhr.send(formData);

      e.preventDefault();
});