const sumAll = function(num_one, num_two) {
  sum = 0;

  switch (true) {
    case num_one < 0 || num_two < 0:
    case typeof num_one !== "number" || typeof num_two !== "number":
      sum = "ERROR";
      break;

    case num_one < num_two:
    case num_one === num_two:
      for (let i = num_one; i <= num_two; i++) {
        sum += i;
      }
      break;

    case num_one > num_two:
      for (let i = num_one; i >= num_two; i--) {
        sum += i;
      }
      break;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
