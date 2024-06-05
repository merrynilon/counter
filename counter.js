let counter = document.getElementById('counter');
let increaseButton = document.getElementById('increase');
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let count = 0;

function functionIncrease() {
    count ++;
    counter.innerHTML(count);
    color();
}
function functionDecrease() {
    count--;
    counter.innerHTML(count);
    color();
}
function functionReset() {
    count = 0;
    counter.innerHTML(count);
    color();
}
function color() {
    if (count > 0) {
        counter.style.color = "green";
    } else if (count > 0) {
        counter.style.color = "red";
    }
}

increaseButton.addEventListener("click", functionIncrease());
decreaseButton.addEventListener("click", functionDecrease());
resetButton.addEventListener("click", functionReset())
