function round(num)
{
  num = num*10;
  num_floor = Math.floor(num);
  diff = num-num_floor;
  if(diff<0.5)
  {
    return num_floor/10;
  }
  return (num_floor+1)/10;
}
//36.42 =36.4
//36.45 = 36
//36.46 =36.5
const convertToCelsius = function(temp) {
  return round((temp-32)*(5/9));
};

const convertToFahrenheit = function(temp) {
  return round((temp*(9/5)+32))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
