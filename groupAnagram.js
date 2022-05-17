// PROBLEM STATEMENT:

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// SOLUTION PROCESS:

// Create a new array, loop through the input array. For each element, sort using anagram style.
// Check if sorted element exists in array, if not add it, if yes, spread it into an array inside the array

var groupAnagram = function (strs) {
  let anagrams = [];
  strs.forEach((str) => {
    let sorted = str.split("").sort().join("");
    anagrams[sorted] = anagrams[sorted] ? [...anagrams[sorted], str] : [str];
  });
  console.log(Object.values(anagrams));
};

groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]); //prints [["eat","tea","ate"],["tan","nat"],["bat"]]
