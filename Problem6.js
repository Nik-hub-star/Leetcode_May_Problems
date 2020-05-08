/* Majority Element
Solution
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:Input: [3,2,3]
Output: 3 

Input: [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {};
  const length = nums.length / 2;
  nums.forEach(num => (map[num] = (map[num] || 0) + 1));
  for (let [key, value] of Object.entries(map)) {
    if (value > length) return key;
  }
};

/* 
Description

Create an object with key of car and value as number of ocuurence  
 nums.forEach(num => (map[num] = (map[num] || 0) + 1));
*/
