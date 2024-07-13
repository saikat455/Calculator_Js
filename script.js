function clearDisplay() {
    document.getElementById('display').value = '';
    adjustFontSize();
}

function deleteLastChar() {
    let display = document.getElementById('display');
    display.value = display.value.toString().slice(0, -1);
    adjustFontSize();
}

function addToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
    adjustFontSize();
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
    adjustFontSize();
}

function adjustFontSize() {
    let display = document.getElementById('display');
    let length = display.value.length;

    if (length > 12) {
        display.style.fontSize = '20px';
    } else if (length > 8) {
        display.style.fontSize = '30px';
    } else {
        display.style.fontSize = '45px';
    }
}
