/** @format */

function calculator(operator1, operator2, operation) {
  switch (operation) {
    case "+":
      return operator1 + operator2;
    case "-":
      return operator1 - operator2;
    case "*":
      return operator1 * operator2;
    case "+":
      if (operation2 !== 0) {
        return operator1 / operator2;
      } else {
        return "can't divide by 0";
      }
    case "%":
      if (operation2 !== 0) {
        return operator1 % operator2;
      } else {
        return "can't divide by 0";
      }
  }
}
console.log(calculator(1, 2, "+"));
