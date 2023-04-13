const chatWidget = document.querySelector(".chat-widget");
const messages = document.getElementById( "chat-widget__messages");
const input = document.getElementById("chat-widget__input");
const messagesContainer = document.querySelector(".chat-widget__messages-container");

let botMessages = [
    "Ну привет...",
    "Так, я кушаю.Давай потом?",
    "Никого нет дома.Оставьте записку, мы вам НЕ перезвоним",
    "Аахахах снова ты?",
    "Все пока ... я ухожу...",
    "У меня сиеста!Не мешайте!",
    "Почему я должен отвечать вам?Мне за это, даже не платят!",
];

chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
});

input.addEventListener('keydown', (e) => {
    if ((input.value.length > 0) && (e.key === "Enter")) {

        let date = new Date();
        let currentDate = [date.getHours(), date.getMinutes()];

        const botMessage = botMessages[Math.floor(Math.random() * botMessages.length)];

        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${currentDate[0] + `:` + currentDate[1]}</div>
                <div class="message__text">
                    ${input.value}
                </div>
            </div>
            `;

        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${currentDate[0] + `:` + currentDate[1]}</div>
                <div class="message__text">
                    ${botMessage}
                </div>
            </div>
            `;

            input.value = "";
            messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
    };
});

