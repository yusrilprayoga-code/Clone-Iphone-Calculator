let display = document.getElementById('screen');
function allclear() {
    display.value = '';
}

function tambah() {
    display.value += '-';
}

function show(n) {
    display.value += n;
}

function calc() {
    display.value = eval(display.value);
}