function SampleInputFunc(value) {
  if (value <= 0) {
    return "";
  }
  if (value === 0) {
    return "";
  } else {

    if (value >= .25) {
      const resultA = Math.floor(value / .25);
      const resultB = (value % .25).toFixed(2);
      return SampleInputFunc(resultB) + `Quarters: ${resultA},`;
    } else if (value >= .10) {
      const resultA = Math.floor(value / .1);
      const resultB = (value % .1).toFixed(2);
      return SampleInputFunc(resultB) + `Dimes: ${resultA}, `;
    } else if (value >= .05) {
      const resultA = Math.floor(value / .05);
      const resultB = (value % .05).toFixed(2);
      // console.log(`ResultA at Nickels: ${resultA}`);
      // console.log(`ResultB at Nickels: ${resultB}`);
      return SampleInputFunc(resultB) + `Nickels: ${resultA}, `;
    } else if (value >= .01) {
      const resultA = Math.floor(value / .01);
      const resultB = (value % .01).toFixed(2);
      // console.log(`ResultA at Pennies: ${resultA}`);
      // console.log(`ResultB at Pennies: ${resultB}`);
      return SampleInputFunc(resultB) + `Pennies: ${resultA}, `;
    }
  }
}

console.log(SampleInputFunc(.17));

// numArray.push(resultA);