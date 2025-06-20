let display = document.querySelector('.display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate(operator) {
    try {
        if (operator === '%') {
            display.value = eval(display.value) / 100;
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}