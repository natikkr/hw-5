const button = document.querySelector(".btn");
const output = document.querySelector(".out");
const inputArr = document.querySelectorAll(".arr");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let outputHTML = "<p>Введені дані:</p>";

    inputArr.forEach((input) => {
        const label = input.getAttribute("data-form");
        const value = input.value;
        outputHTML += `<p>${label}: ${value}</p><br>`;
    });

    output.innerHTML = outputHTML;
});