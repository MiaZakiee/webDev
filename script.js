// access textbox "field" in html
var field = document.getElementById("field");

// functions for the actual button in the site
// adds characters to string expression
function add (x) {
    
    // prevents double operators
    var check = field.value.slice(-1);

    if (isOperator(check) && isOperator(x) || x == '=') {
        return;
    }

    field.value += x;
}

// removes last character from string expression
function backspace () {
    field.value = field.value.slice(0, -1);
}

// empties string expression
function clearField () {
    field.value = "";
}

// calculate string expression and update textbox value
function calculate () {
    field.value = eval(field.value);
}

// functions to be used when using keyboard
// when pressing enter key calculate() gets called
field.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === '=') {
        calculate();
    }
});

// checks recently added character added when using keyboard
field.addEventListener("input", function () {
    autoFormat();
});

function autoFormat() {
    var inputValue = field.value;


    // prevents adding letters/irrelevant characters from expression
    inputValue = inputValue.replace(/([*+\/-])\1+/g, "$1");
    inputValue = inputValue.replace(/[a-zA-Z]/g, "");

    var lastChar = inputValue.slice(-1);
    var sencondLastChar = inputValue.slice(-2);

    if (isOperator(lastChar) && isOperator(sencondLastChar) || lastChar == '=') {
        // If the last character is an operator, removes any new operator at the end
        inputValue = inputValue.slice(0, -1);
    }

    field.value = inputValue;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// focuses on textbox when using keyboard
function focus () {
    field.focus();
    field.setSelectionRange(field.value.length, field.value.length);
}

document.addEventListener("keydown",focus);

//hehe
function hehe() {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=tQbg3GnD5Rn1N3TH';
}