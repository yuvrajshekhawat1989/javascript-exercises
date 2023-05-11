const fibonacci = function (n) {
  //we need to return nth member of fibonacci
  //a_{n} = a_{n-1}+a_{n-2}
  n = Number(n);
  if (n < 0) return "OOPS";
  if (n === 1 || n === 2) return 1;
  lastElement = 1;
  lastSecondElement = 1;
  var currElement;
  for (let i = 3; i <= n; i++) {
    currElement = lastElement + lastSecondElement;
    lastSecondElement = lastElement;
    lastElement = currElement;
  }
  return currElement;
};

// Do not edit below this line
module.exports = fibonacci;
