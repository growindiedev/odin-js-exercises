const fibonacci = function (num) {
  // handling last value is the key
  // break the input into two parts => second last value + last value
  //watch cs dojo video
  num = Number(num);
  if (num < 0 || typeof num !== "number") {
    return "OOPS";
  } else if (num <= 1) {
    return num;
  }
  return fibonacci(num - 2) + fibonacci(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
