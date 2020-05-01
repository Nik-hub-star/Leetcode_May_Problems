/* Problem Statement
You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version,
 all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out 
the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. 
Implement a function to find the first bad version. You should minimize the number of calls to the API. */

/* Testing scenario
 Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.  
*/

//Solution

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 0,
      end = n,
      mid;
    while (start < end) {
      mid = start + (end - start) / 2;
      if (isBadVersion(mid)) end = mid;
      else start = mid + 1;
    }
    return start;
  };
};

/* Description 

Done with Binary search.

We use  mid= start+ (start+end)/2 because it can 
cause segmentation fault because of invalid index of array.

start = 2147483647
end = 2147483647
mid using (start + end)/2 = -1 
mid using start + (end - start)/2 = 2147483647*/
