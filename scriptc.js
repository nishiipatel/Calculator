const display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    display.innerText += operator;
}

function clearDisplay() {
    display.innerText = '';
}

function toggleSign() {
    display.innerText = display.innerText.startsWith('-')
        ? display.innerText.slice(1)
        : '-' + display.innerText;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    } catch {
        display.innerText = 'Error';
    }
}
