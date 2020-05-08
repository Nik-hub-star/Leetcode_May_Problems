/* 
Check If It Is a Straight Line
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
Check if these points make a straight line in the XY plane.

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length <= 2) return true;

  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  const target = (y1 - y0) / (x1 - x0);
  for (let i = 2; i < coordinates.length; i++) {
    const [x2, y2] = coordinates[i];
    if ((y2 - y0) / (x2 - x0) !== target) {
      return false;
    }
  }
  return true;
};

/* Description

Array.every(ele,index,array) returns true if every element passes the test or false

straight line  if y2-y1/x2-x1 === y1=y0/x1-x0
*/
