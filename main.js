// Calculator operations
function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch(operator) {
    case 'add':
      add(num1, num2);
      break;
    case 'substract':
      substract(num1, num2);
      break;
    case 'multiply':
      multiply(num1, num2);
      break;
    case 'divide':
      divide(num1, num2);
      break;
    default:
      return "Input an operator and two numbers"
  }
}
