function sum(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b
}

function operate(operator, x, y) {
  if (operator == '+') {
    return sum(x, y);
  } else if (operator == '-') {
    return subtract(x, y)
  } else if (operator = '*') {
    return multiply(x, y)
  } else if (operator = '/') {
    return divide(x, y)
  } else {
    throw 'NaN'
  }
}