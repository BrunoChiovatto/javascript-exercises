const repeatString = function(string, number) {
  let new_string = '';
  if (number < 0) {
    new_string = 'ERROR';
  } else {
    for (let i = 0; i < number; i++) {
      new_string += string;
    }
  }
  return new_string;
};

// Do not edit below this line
module.exports = repeatString;
