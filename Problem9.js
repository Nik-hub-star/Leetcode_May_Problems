/* Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt. */

function isSquare(num) {
  if (num < 1) return false;
  for (var idx = 1; idx * idx <= num; idx++) {
    if (idx * idx === num) return true;
  }
  return false;
}

// Recursive version:

function isSquare(num) {
  if (num < 1) return false;
  function find(idx) {
    if (idx * idx > num) return false;
    else if (idx * idx === num) return true;
    else return find(idx + 1);
  }
  return find(1);
}
