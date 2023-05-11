const removeFromArray = function (array, ...args) {
  new_array = [];
  return array.filter(element=>{return !(args.includes(element))})
};

// Do not edit below this line
module.exports = removeFromArray;
