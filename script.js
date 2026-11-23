const button = document.getElementById("myButton");
const text = document.getElementById("text");
let isAltBackground = false;

if (button && text) {
    button.addEventListener("click", function () {
        text.textContent = "Кнопка была нажата! Текст и стиль обновлены через JavaScript.";
        text.style.color = "#15803D";
        text.style.fontSize = "20px";
    });
}

function changeBackground() {
    isAltBackground = !isAltBackground;
    document.body.style.backgroundColor = isAltBackground ? "#E2E8F0" : "#F4F7FB";
}

const userForm = document.getElementById("userForm");
const formMessage = document.getElementById("formMessage");

if (userForm && formMessage) {
    userForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formMessage.textContent = "Данные прошли проверку HTML5 и готовы к отправке.";
        formMessage.style.color = "#15803D";
    });
}