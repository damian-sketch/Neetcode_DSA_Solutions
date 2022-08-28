// PROBLEM STATEMENT:

const { map } = require("selenium-webdriver/lib/promise");

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

// SOLUTION PROCESS:

//create a new map object which will be used to store values and their indices
//loop through the given array and check if the subtracted value is in the map.
// if not, add the current element and its index to the map.

var twoSum = function (nums, target) {
  let map1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];
    if (map1.has(value)) {
      return [map1.get(value), i];
    } else {
      map1.set(nums[i], i);
    }
  }
};

twoSum(["2", "7", "4", "3"], 9); // prints [0,1]
