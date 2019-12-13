/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;
  if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
    return false;
  } 
  return isBalanced(root.left) && isBalanced(root.right);  
  function maxDepth(node){
   return node ? 1 + Math.max(maxDepth(node.left), maxDepth(node.right)) : 0;
  }
};