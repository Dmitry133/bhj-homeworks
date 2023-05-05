const signinForm = document.getElementById("signin__form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const signin = document.getElementById("signin");



function auth() {
    signinForm.addEventListener("submit", (evt) => {
        evt.preventDefault();

        let formData = new FormData(signinForm);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
        xhr.responseType = 'json';
        xhr.send(formData);

        xhr.addEventListener("load", () => {
           
                let data = xhr.response;

                if (data.success) {
                    signin.classList.remove("signin_active");
                    welcome.classList.add("welcome_active");
                    localStorage.userId = data.user_id;
                    userId.innerHTML = localStorage.userId;
                } else {
                    alert("Неверный логин/пароль!");
                };
            
        });

        signinForm.reset();
    });
};

if (localStorage.userId) {
    signin.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
    userId.innerHTML = localStorage.userId;
}

auth();