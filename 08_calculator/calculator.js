const add = function (op1, op2) {
  return op1 + op2;
};

const subtract = function (op1, op2) {
  return op1 - op2;
};

const sum = function (arr) {
  let ans = 0;
  for (let j = 0; j < arr.length; j++) {
    ans += arr[j];
  }
  return ans;
};

const multiply = function (arr) {
  let ans = 1;
  for (let j = 0; j < arr.length; j++) {
    ans *= arr[j];
  }
  return ans;
};

const power = function (op1, op2) {
  ans = 1;
  for (let i = 0; i < op2; i++) {
    ans *= op1;
  }
  return ans;
};

const factorial = function (num) {
  ans = 1;
  if (num == 0) return ans;
  for (let i = 1; i <= num; i++) ans *= i;
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
