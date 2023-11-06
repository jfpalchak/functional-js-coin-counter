# Coin Counter

## PROBLEM / TASK 
Create a coin counter function that takes X amount of money (such as $4.99) and determines the amount of change needed in coins:
- number of quarters
- number of dimes
- number of nickels
- number of pennies

Use recursion.



## PLAIN ENGLISH / PSEUDOCODE

- Function should ignore anything left of a decimal point.
- Then divide the remaining input by .25, any resulting whole number is the number of quarters. 
<!-- - Then take the result of the division and subtract the resulting whole number from the previous math operation -->
- Then divide the result from the operation above by .10... etc.

1.41 / .25
= 5.64, or 5 quarters total


## SAMPLE INPUT / OUTPUT

function SampleInputFunc (1.41) {
  1. divide 1.41 by .25, result = 5.64
  2. --- Joey's brilliant idea to use Math.floor --- 
  2. add 5 to output array -- this is the number of quarters //THIS IS RESULT A
  3. perform 1.41 % .25 operation, result = .16  //THIS IS RESULT B
  4. SampleInputFunc(.16)

  let divisor = .10       
  
  if 1.41 >= .25  true      Include quarters?
  if .16 >= .25  false
  if .16 >= .10 true       Include dimes?
  if .06 >= .10 false
  if .06 >= .05             Include nickels?
  if .01 >= .05
  if .01 >= .01             Include pennies?
  
  4. divide .16 by .10, result = 1.6 -- 1.599999 in terminal. Implement rounding?
  5. add 1 to output array -- this is the number of dimes
  6. perform .16 % .10, result = 0.06  <!-- the remainder, after taking however many dimes out of our current leftover change -->


  7. divide .06 by .05, result = 1.2
  8. add 1 to output array -- this is the number of nickels
  9. perform .06 % .05, result = 0.01 (according to online calculator)

  10. divide .01 by .01, result is 1
  11. add 1 to output array -- this is the number of pennies
  12. perform .01 % .01, result = 0
  13. SampleInputFunc(0)

  base case: 
  if (value === 0){
    return;
  }
  
  recursive part:
}




## CODE

