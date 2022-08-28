// PROBLEM STATEMENT:

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// SOLUTION:
// initialise a totalSum variable to hold the sum of the numbers in the array
// initialise a leftSum for the sum of the left of index . Init with  0
// loop through the array and check if leftSum is equal to rightSum
// if equal return index, if not add current number to leftSum
// if no index return -1

var pivotIndex = function (nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - nums[i] - leftSum;
    if (leftSum == rightSum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};
