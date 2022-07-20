const repeatString = function (word, num) {
  let repeat = "";
  for (let i = 0; i < num; i++) {
    repeat += word;
  }
  if (num >= 0) {
    return repeat;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
