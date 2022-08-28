// PROBLEM STATEMENT

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// EXAMPLE

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// SOLUTION PROCESS

// Initialise a sum variable and loop through the array.
// update the sum by adding the current value
// replace current value with sum

var runningSum = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    nums[i] = sum;
  }
  return nums;
};
