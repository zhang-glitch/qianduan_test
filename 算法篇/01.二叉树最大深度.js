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
 * @return {number}
 */
var maxDepth = function (root) {
  let deep = 0
  if (root == null) {
    return 0
  } else {
    // 递归左子树
    let left = maxDepth(root.left)
    // 递归右子树
    let right = maxDepth(root.right)
    // 比较左右子树的层数
    return Math.max(left, right) + 1
  }
}
