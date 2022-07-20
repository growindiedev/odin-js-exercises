const sumAll = function (first, last) {
  let sum = 0;
  let max = Math.max(first, last);
  let min = Math.min(first, last);

  if (
    first < 0 ||
    last < 0 ||
    typeof first !== "number" ||
    typeof last !== "number"
  ) {
    return "ERROR";
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
