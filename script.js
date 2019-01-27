//const one = Number(document.getElementById("one").innerHTML);

//document.getElementById("one").addEventListener("click", oneCalc);

/*let result = 0;

function oneCalc() {
    result += 1;
}
*/

//get the value of the buttons and display them

const
    calculation = document.getElementById("calculation"),
    buttons = document.querySelectorAll("button");

let result = document.getElementById("result");

buttons.forEach(button => button.addEventListener("click", alterDisplayValue(button)));

function alterDisplayValue(button) {
    return function() {
        result.value += button.value;
    }
};

//press equals button and display the result

const equals = document.getElementById("equals").addEventListener("click", operate);

function operate() {
    calculation.innerText = result.value;
    result.value = eval(result.value);
    return eval(result.value);
}

// clear

const clear = document.getElementById("clear").addEventListener("click", clearLines);

function clearLines() {
    calculation.innerText = "";
    display.value = "";
}

//go back one digit

const back = document.getElementById("back").addEventListener("click", backOne)

function backOne() {
    result = result.innerText.slice(0, -1);
}
