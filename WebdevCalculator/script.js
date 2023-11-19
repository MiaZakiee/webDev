var field = document.getElementById("field");

function add (x) {
    var check = field.value.slice(-1);

    if (isOperator(check) && isOperator(x)) {
        return;
    }

    field.value += x;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function backspace () { 
    field.value = field.value.slice(0, -1);
}

function clearField () {
    field.value = "";
}

function calculate () {
    field.value = eval(field.value);
}

field.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculate();
    }
});

field.addEventListener("input", function () {
    autoFormat();
});

function autoFormat() {
    var inputValue = field.value;

    inputValue = inputValue.replace(/([*+\/-])\1+/g, "$1");
    inputValue = inputValue.replace(/[a-zA-Z]/g, "");

    field.value = inputValue;
}

function hehe() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
}