const convertToCelsius = function(numberF) {
  let numberConverted1 = (numberF - 32) * 5/9;
  return Math.round(numberConverted1 * 10) / 10;
};

const convertToFahrenheit = function(numberC) {
  let numberConverted2 = (numberC * 9/5) + 32;
  return Math.round(numberConverted2 * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
