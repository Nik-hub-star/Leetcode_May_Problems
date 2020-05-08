/* First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2. */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let count;
  let found = false;
  if (s.length == 0) return -1;
  else if (s.length == 1) {
    return 0;
  } else {
    for (let i of s) {
      count = s.match(new RegExp(i, "g"));
      if (count && count.length == 1) {
        found = true;
        return s.indexOf(i);
      }
    }
    if (!found) return -1;
  }
};

/* 
Description 

Check for if length is zero or one of string.
or else find the occurence of a char using global match and return if count is 1.
*/
