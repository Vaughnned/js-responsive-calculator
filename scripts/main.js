(function () {
  "use strict";

  let num = "";

  function pushNumber(event) {
    num += event.target.value;
    document.querySelector(".calculator-screen").value = Number(num);
  }

  const numberButtons = document.querySelectorAll(".number");
  for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", pushNumber);
  }

  function pushOperator(event) {
    let op = event.target.value;
    if ("+-/*".includes(op)) {
      calculation.push(num);
      calculation.push(op);
      num = "";
    } else if (op === "clear") {
      calculation = [];
      num = "";
    } else if (op === "percent") {
      num = String(Number(num) / 100);
    } else if (op === "plus-minus") {
      num = String(-Number(num));
    }

    document.querySelector(".calculator-screen").value = Number(num);
  }

  const operatorButtons = document.querySelectorAll(
    ".operator, .clear, .percent, .plus-minus"
  );
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", pushOperator);
  }

  let calculation = [];

  function calc(arr) {
    let str1 = "";
    let str2 = "";
    let op = "";
    for (let i = 0; i < arr.length; i++) {
      let c = arr[i];
      if ("+-/*".includes(c)) {
        op = c;
      } else if (op !== "") {
        str2 += c;
      } else {
        str1 += c;
      }
    }

    let num1 = Number(str1);
    let num2 = Number(str2);

    if (op === "+") {
      return num1 + num2;
    }
    if (op === "-") {
      return num1 - num2;
    }
    if (op === "/") {
      return num1 / num2;
    }
    if (op === "*") {
      return num1 * num2;
    }
    return num1;
  }

  function calculate(event) {
    calculation.push(num);
    let result = calc(calculation);
    console.log(calculation, result);
    document.querySelector(".calculator-screen").value = result;
    num = String(result);
    calculation = [];
  }

  const equalsButton = document.querySelectorAll(".equal-sign");
  for (let i = 0; i < equalsButton.length; i++) {
    equalsButton[i].addEventListener("click", calculate);
  }
})();
