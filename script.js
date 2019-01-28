
//get the value of the buttons and display them

const
    calculation = document.getElementById("calculation"),
    buttons = document.querySelectorAll("button");

let result = document.getElementById("result");

buttons.forEach(button => button.addEventListener("click", alterDisplayValue(button)));

function alterDisplayValue(button) {
    return function () {
        result.value += button.value;
    }
};

//press equals button and display the result
//can't divide by 0 or not be a number
//only show two numbers after the comma

let equals = document.getElementById("equals").addEventListener("click", operate);

function operate() {

    if (result.value === 0 / 0) {
        alert("Thou shall not dive to infinity!")
    } else if (!Number.isNaN(eval(result.value))) {
        calculation.innerText = result.value;
        result.value = parseFloat(eval(result.value).toFixed(2));
    } else if (Number.isNaN(eval(result.value))) {
        alert("The input is not a number!");
        result.value = "";
    }
}


// clear

const clear = document.getElementById("clear").addEventListener("click", clearLines);

function clearLines() {
    calculation.innerText = "";
    result.value = "";
   
}

//go back one digit

let back = document.getElementById("back").addEventListener("click", backOne)

function backOne() {
    result.value = Number(result.value.toString().slice(0, -1))
}

//keypad support

document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event)
{
   let KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
      backOne();
      break; 
      case 27:
      clearLines();
      case 13:
      operate();
      
      case 27:
      clearLines();
      break;
      default:
      break;
   }
}