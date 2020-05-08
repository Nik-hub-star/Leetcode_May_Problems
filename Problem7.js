/* Cousins in Binary Tree

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

Input: root = [1,2,3,4], x = 4, y = 3
Output: false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  var xParent,
    yParent,
    queue = [],
    resArr = [],
    xRow,
    yRow;
  xParent = findParent(root, x);
  yParent = findParent(root, y);

  function findParent(root, value) {
    var left, right;
    if (!root) {
      return false;
    }
    if (root.left !== null && root.left.val == value) {
      return root;
    }
    if (root.right !== null && root.right.val == value) {
      return root;
    }
    return findParent(root.left, value) || findParent(root.right, value);
  }
  if (xParent == yParent) return false;

  function findCousin(root) {
    if (!root) return resArr;
    queue.push(root);
    while (queue.length > 0) {
      var length = queue.length,
        tempArr = [];
      for (var i = 0; i < length; i++) {
        var tempNode = new TreeNode();
        tempNode = queue.shift();
        if (tempNode.left != null) queue.push(tempNode.left);
        if (tempNode.right != null) queue.push(tempNode.right);
        tempArr.push(tempNode.val);
      }
      resArr.push(tempArr);
    }
    console.log(resArr);
    for (var i = 0; i < resArr.length; i++) {
      var col = resArr[i];
      for (var j = 0; j < col.length; j++) {
        if (resArr[i][j] == x) xRow = i;
        if (resArr[i][j] == y) yRow = i;
      }
    }
    if (xRow == yRow) return true;
    return false;
  }
  return findCousin(root);
};
