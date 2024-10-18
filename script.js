// Append number or operator to display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = '';
}

// Delete the last character
function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

// Perform the calculation
function calculate() {
    let display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch {
        document.getElementById("display").value = 'Error';
    }
}
