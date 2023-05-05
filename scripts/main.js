// alert("Hello!");

function pushNumber(numberButtons) {
  alert("Number");
  document.querySelector.addEventListener("click", numberButtons);
}

function pushOperator() {
  alert("Operator");
  document.querySelector.addEventListener("click", operatorButtons);
}

let calculation = [];
for (i = 0; i < calculation.length; i++) {
  total += calculation[i];
}

let total = 0;

function calculate() {
  alert("Calculate");
  document.querySelector.addEventListener("click", equalsButton);
  let value = 0;
  if (pushNumber() && pushOperator()) {
    calculation.push(value);
  }

  //   if (example.classList.contains('class')) {}

  //   for (i = 0; i < 1; i++) {
  //     alert("");
  //     return pushNumber(), calculation;
  //   }
}

function enterNumber() {
  const numberButtons = document.querySelectorAll(".number");
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", pushNumber);
  }
}

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
