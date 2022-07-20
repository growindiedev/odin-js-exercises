const reverseString = function (word) {
  let reverse = word.split("").reverse().join("");
  console.log(reverse);
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
