/* Given a positive integer, output its complement number. 
The complement strategy is to flip the bits of its binary representation. 

Input: 5
Output: 2

*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  const binary = num.toString(2);
  const compliment = binary.split("").reduce((prev, curr) => {
    return curr === "1" ? prev + "0" : prev + "1";
  }, "");
  return parseInt(compliment, 2);
};

/* 
Description :

toString(n) is used to convert a number into string where n represnts the base system.

parseInt() is used to convert a string into number of specific base system.
Input: var n = parseInt("2018@geeksforgeeks");
Output: n = 2018
now n contains 2018 as '@' is not a Number 
and parsing stops at that point,further characters are ignored.
Input: var a = parseInt("1000");
Output: a = 1000(Number)
parseInt("2018@geeksforgeeks") = 2018
parseInt("geeksforgeeks@2018") = NaN

The Number() function
The Number() function is used to create a primitive type Number object. It takes one parameter which is the value of the number. This value could be passed with a string and the Number function will try to represent it as a number. If the argument could not be converted into a number, it returns a NaN value. This NaN value is not a valid number and cannot be used in any mathematical calculation.
Syntax:
*/
