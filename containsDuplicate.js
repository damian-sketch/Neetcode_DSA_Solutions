// PROBLEM STATEMENT:

//Given an integer array nums,return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// SOLUTION PROCESS:

// create a new set and 'spread' the array inside the set.
// since a set cannot hold duplicate values, we compare the lengths of the set and the array
// differing lengths means the original array had duplicates

var containingDuplicates = function (nums) {
  let set1 = new Set([...nums]);
  if (set1.size !== nums.length) {
    console.log(true);
  } else console.log(false);
};

containingDuplicates(["1", "3", "3", "2"]); // prints true
containingDuplicates(["1", "4", "3", "2"]); //prints false
