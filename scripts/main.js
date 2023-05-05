(function () {
  "use strict";

  // alert("Hello!");

  function pushNumber(event) {
    alert(event.target.value);
  }

  const numberButtons = document.querySelectorAll(".number");
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", pushNumber);
  }

  enterNumber();

  function pushOperator(event) {
    alert(event.target.value);
  }

  const operatorButtons = document.querySelectorAll(".operator, .clear");
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", pushOperator);
  }

  enterOperator();

  function calculate() {
    alert("Calculate");
    let total = 0;
    let value = 0;
    let calculation = [];
    if (pushNumber() && pushOperator()) {
      calculation.push(value);
    }
    if (operatorButtons.classList.contains(""))
      for (i = 0; i < calculation.length; i++) {
        total += calculation[i];
      }
  }
  const equalsButton = document.querySelectorAll(".equal-sign");
  for (let i = 0; i < equalsButton.length; i++) {
    equalsButton[i].addEventListener("click", calculate);
  }

  startCalculation();
})();
