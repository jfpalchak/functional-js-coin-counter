function SampleInputFunc(value) {
  if (value <= 0) {
    return;
  }
  if (value === 0) {
    return "";
  } else {

    if (value >= .25) {
      const resultA = Math.floor(value / .25);
      const resultB = value % .25;
      return SampleInputFunc(resultB) + resultA;
    } else if (value >= .10) {
      const resultA = Math.floor(value / .1);
      const resultB = value % .1;
      return SampleInputFunc(resultB) + resultA;
    } else if (value >= .05) {
      const resultA = Math.floor(value / .05);
      const resultB = value % .05;
      return SampleInputFunc(resultB) + resultA;
    } else if (value >= .01) {
      const resultA = Math.floor(value / .01);
      const resultB = value % .01;
      return SampleInputFunc(resultB) + resultA;
    }
  }
}

SampleInputFunc(1.41);

// numArray.push(resultA);