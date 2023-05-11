const sumAll = function (from, to) {
  if (typeof(from) != "number" || typeof(to) != "number") return "ERROR";
  if (from < 0 || to < 0) return "ERROR";
  if (from > to) {
    temp = from;
    from = to;
    to = temp;
  }
  sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
