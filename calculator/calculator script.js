let currentInput = "";  // Stores current input value

// Append value to display
function appendValue(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = "";
    document.getElementById("display").value = "";
}

// Calculate the result
function calculateResult() {
    try {
        // Use eval to evaluate the expression
        currentInput = eval(currentInput).toString();
        document.getElementById("display").value = currentInput;
    } catch (error) {
        // If there is an error in the expression, reset the display
        currentInput = "";
        document.getElementById("display").value = "Error";
    }
}