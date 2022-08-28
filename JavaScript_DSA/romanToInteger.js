// PROBLEM STATEMENT: Given a roman numeral, convert it to an integer.

// SOLUTION STATEMENT:
// initialise a result variable
// Create a HashMap to store the roman to integer mappings
// loop through the input string and check for two conditions in an if statement
// if the value of the next char is in range of string
// if the value of the next char is greater than current value
// subtract the value from result, else add

var romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romans[s[i]] < romans[s[i + 1]]) {
      result -= romans[s[i]];
    } else {
      result += romans[s[i]];
    }
  }
  return result;
};
