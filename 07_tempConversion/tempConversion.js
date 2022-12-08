const ftoc = function(temp) {
  const convertedTemp = (temp - 32)*(5 / 9);
  const roundTemp = Number(convertedTemp.toFixed(1));
  return roundTemp;
};

const ctof = function(temp) {
  const convertedTemp = (temp * (9 / 5)) + 32;
  const roundTemp = Number(convertedTemp.toFixed(1));
  return roundTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
