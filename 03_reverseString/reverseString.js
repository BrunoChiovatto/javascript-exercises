const reverseString = function(string) {
  let new_string = '';
  const splited_string = [...string];
  for (let i = splited_string.length - 1; i >= 0; i--) {
    new_string += splited_string[i];
  }
  return new_string;
};

// Do not edit below this line
module.exports = reverseString;
