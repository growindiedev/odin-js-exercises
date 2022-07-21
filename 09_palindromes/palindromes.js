const palindromes = function (input) {
  let cleanWord = input.replace(/\W/g, "").toLowerCase();
  let reverse = cleanWord.split("").reverse().join("");
  return cleanWord === reverse;
};

// Do not edit below this line
module.exports = palindromes;
