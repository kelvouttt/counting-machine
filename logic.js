const display = document.querySelector('.display-screen');
const clear = document.querySelector('.clear');
const percent = document.querySelector('.percent');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const number = document.querySelectorAll('.number')
const clearButton = document.querySelector('.clear')



displayValue = '';

number.forEach((num) => {
  num.addEventListener('click', (e) => {
    display.innerHTML = e.target.innerHTML
  })
});




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

