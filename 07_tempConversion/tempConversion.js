const convertToCelsius = function(tempF) {
  let resultC = (tempF - 32) * 5/9;
  return Math.ceil(resultC * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
  let resultF = (tempC * 9/5) + 32;
  return Math.ceil(resultF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
