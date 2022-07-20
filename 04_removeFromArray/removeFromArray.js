const removeFromArray = function (arr, ...args) {
  // let whoop = arr.filter((elm) => !args.includes(elm));
  let whoop = [];

  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      whoop.push(arr[i]);
    }
  }
  console.log("before$", arr);
  console.log("btw$", args);
  console.log("after$", whoop);
  return whoop;
};

// Do not edit below this line
module.exports = removeFromArray;
