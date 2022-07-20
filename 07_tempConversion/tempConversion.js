const ftoc = function (temp) {
  let celsius = ((temp - 32) * 5) / 9;
  var rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const ctof = function (temp) {
  let far = (temp * 9) / 5 + 32;
  var rounded = Math.round(far * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
