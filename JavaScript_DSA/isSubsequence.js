// PROBLEM STATEMENT
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// SOLUTION EXPLANATION
// loop through the strings with two separate pointers, check if the characters match
// if they do, move both pointers
// if not, move the second one
// at the end of the loop, return True if the first pointer covered the whole distance(is equal to string length)

var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  if (i == s.length) {
    return true;
  }
  return false;
};
