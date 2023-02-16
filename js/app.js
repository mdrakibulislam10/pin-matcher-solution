function getPin() {
    const pin = generatePin();
    const pinString = pin.toString(); // pin + "";
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // if pin length is not 4 then again call the func
        return getPin(); // recursion
    }
}

function generatePin() {
    random = Math.round(Math.random() * 10000);
    return random;
}

// event handler
document.getElementById("generate-pin").addEventListener("click", function () {
    const pin = getPin();

    // display pin
    const displayPinField = document.getElementById("display-pin");
    displayPinField.value = pin;
});

// calculator
document.getElementById("calculator").addEventListener("click", function (event) {
    // const number = parseInt(event.target.innerText);
    const number = event.target.innerText;

    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === "C") {
            typedNumberField.value = "";
        }
        else if (number === "<") {
            const digits = previousTypedNumber.split(""); // typedNumberField.value;
            digits.pop();
            // digits.shift();
            const remainingDigit = digits.join("");
            typedNumberField.value = remainingDigit;
        }
    }
    else {
        // const typedNumberField = document.getElementById("typed-numbers");
        // const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number; // concat
        typedNumberField.value = newTypedNumber;
        // or,
        // typedNumberField.value = typedNumberField.value + number;
        // or,
        // typedNumberField.value += number;
    }
});

// submit btn
document.getElementById("verify-pin").addEventListener("click", function () {
    const displayPinField = document.getElementById("display-pin");
    const currentPin = displayPinField.value;

    displayPinField.value = "";

    const typedNumberField = document.getElementById("typed-numbers");
    const typedNumber = typedNumberField.value;

    typedNumberField.value = "";

    const pinSuccessMessage = document.getElementById("pin-success");
    const pinFailureMessage = document.getElementById("pin-failure");
    if ((currentPin === typedNumber) && currentPin.length >= 4) { // || typedNumber.length >= 4;
        pinSuccessMessage.style.display = "block";
        pinFailureMessage.style.display = "none";

        document.getElementById("left").style.display = "none";
    }
    else {
        pinFailureMessage.style.display = "block";
        pinSuccessMessage.style.display = "none";
    }
});