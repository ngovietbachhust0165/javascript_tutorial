// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;
// console.log(calcAge(1991));

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degress celsius:'),
  };
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
