const convertToCelsius = function(f) {
  let cel = (f - 32) * (5/9);
  let celRounded = Math.round(cel * 10) / 10;
  return celRounded;
};

const convertToFahrenheit = function(c) {
  let far = (c * (9/5)) + 32;
  let farRounded = Math.round(far * 10) / 10;
  return farRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
