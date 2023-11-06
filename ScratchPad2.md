

const value = 1.41;

function SampleInputFunc (value) {
  <!-- termination case -->
  if (value <= 0){
    return;
  }
  <!-- base case  -->
  if (value === 0){
    return;
  } else {
    
    if(value >= .25){
      const resultA = Math.floor(value / .25);
      const resultB = value % .25
    } else if (value >= .10) {
      const resultA = Math.floor(value / .1);
      const resultB = value % .1
    } else if (value >= .05) {
      const resultA = Math.floor(value / .05);
      const resultB = value % .05
    } else if (value >= .01) {
      const resultA = Math.floor(value / .01);
      const resultB = value % .01
    }

    return SampleInputFunc(resultB) + numArray.push(resultA)
           SampleInputFunc(0.16)    +         [5]
                                    +         [1] 
                                    +         [1]
                                    +         [1]
  }

}
