const convertToCelsius = function(f) {
  let cel = (f - 32) * (5/9);
  let celRounded = Math.round(cel * 10) / 10;
  return celRounded;
};

const convertToFahrenheit = function(c) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
