/* 
Jewels and Stones

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
 Letters are case sensitive, so "a" is considered a different type of stone from "A". 
 
Input: J = "aA", S = "aAAbbbb"
Output: 3

Input: J = "z", S = "ZZ"
Output: 0

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let count = 0;
  for (let i of J) {
    const array = S.match(new RegExp(`${i}`, "g"));
    if (array && array.length > 0) count += array.length;
  }
  return count;
};

/* 
Description 

String.match(regex) returns an array of found indexes characters
if you want to create a Regex with a string use new RegExp('string','g');

*/
