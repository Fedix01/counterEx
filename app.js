let span = document.getElementById("value");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

let counter = 0;

decrease.addEventListener("click", () => {
    span.textContent = counter-- - 1;
    if (counter < 0) {
        span.style.color = "yellow";
    }
})

increase.addEventListener("click", () => {
    span.textContent = counter++ + 1;
    span.style.color = "green";
})

reset.addEventListener("click", () => {
    span.textContent = 0;
    counter = 0;
    span.style.color = "red";
})