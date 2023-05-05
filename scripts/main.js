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

  function pushOperator() {
    alert("Operator");
    document.querySelector.addEventListener("click", operatorButtons);
  }

  function calculate() {
    alert("Calculate");
    document.querySelector.addEventListener("click", equalsButton);
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

    //   if (example.classList.contains('class')) {}
  }

  // function enterNumber() {

  // }

  enterNumber();

  function enterOperator() {
    const operatorButtons = document.querySelectorAll(".operator, .clear");
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].addEventListener("click", pushOperator);
    }
  }

  enterOperator();

  function startCalculation() {
    const equalsButton = document.querySelectorAll(".equal-sign");
    for (let i = 0; i < equalsButton.length; i++) {
      equalsButton[i].addEventListener("click", calculate);
    }
  }

  startCalculation();
})();
