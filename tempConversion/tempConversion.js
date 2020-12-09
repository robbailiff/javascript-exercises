const ftoc = function(temp) {
  const celciusTemp = (temp - 32) * (5/9);
  return Math.round((celciusTemp) * 10) / 10;
}

const ctof = function(temp) {
  const fahrenheitTemp = (temp * (9/5)) + 32;
  return Math.round((fahrenheitTemp) * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
