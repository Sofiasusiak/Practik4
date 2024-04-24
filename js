function appendValue(elementId, value) {
    document.getElementById(elementId).value += value;
}

function setValue(elementId, value) {
    document.getElementById(elementId).value = value;
}

function clearAll() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('operator').value = '';
    document.getElementById('result').value = '';
}

function calculate() {
    const num1 = parseInt(document.getElementById('num1').value, 16);
    const num2 = parseInt(document.getElementById('num2').value, 16);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case '+':
            result = (num1 + num2).toString(16).toUpperCase();
            break;
        case '-':
            result = (num1 - num2).toString(16).toUpperCase();
            break;
        case '*':
            result = (num1 * num2).toString(16).toUpperCase();
            break;
        case '/':
            result = num2 !== 0 ? (num1 / num2).toString(16).toUpperCase() : 'Ділення на нуль!';
            break;
        default:
            result = 'Невідома операція!';
            break;
    }

    document.getElementById('result').value = result;
}
