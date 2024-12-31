let count = 0;

function incre() {
    ++count;
    let counter = document.getElementById("counter").textContent = count;
}

function decre() {
    --count;
    let counter = document.getElementById("counter").textContent = count;
}

function reset() {
    count = 0;
    let counter = document.getElementById("counter").textContent = count;
}