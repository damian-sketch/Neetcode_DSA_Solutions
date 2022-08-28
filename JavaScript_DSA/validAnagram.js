// PROBLEM STATEMENT:

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// SOLUTION PROCESS:

// split the strings into letters and  sort them in alphabetical order.
// rejoin them into strings and do a strict equal comparison

var isAnagram = function (s, t) {
  let sArr = s.split("").sort().join();
  let tArr = t.split("").sort().join();
  return sArr === tArr;
};

isAnagram("abcd", "bdca"); //prints true
isAnagram("abcd", "lojs"); //prints false
