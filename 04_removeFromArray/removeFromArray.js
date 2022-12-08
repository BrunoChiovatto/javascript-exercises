const removeFromArray = function(array) {
  for (let a = 1; a < arguments.length; a++){
    for (let b = 0; b < array.length; b++) {
      if (arguments[a] === array[b]) {
        array.splice(b, 1);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
