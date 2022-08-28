// PROBLEM STATEMENT

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

//SOLUTION STATEMENT:

// initialise two empty hashMaps for the strings
// create a loop and in it, initialise 2 characters to represent the current character in the loop for both strings
// check if either of the characters exists in their respective maps and if they are mapped to a different character, return false in this case
// else insert/map the characters to each other

var isIsormophic = function (s, t) {
  let mapS = new Map();
  let mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];
    if ((c1 in mapS && mapS[c1] != c2) || (c2 in mapT && mapT[c2] != c1)) {
      return false;
    } else {
      mapS[c1] = c2;
      mapT[c2] = c1;
    }
  }
  return true;
};
