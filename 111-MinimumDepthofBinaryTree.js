/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：只返回左右子树深度最小值是错误的，因为如果这个树只有左子树，没有右子树，按照最小值算法，这个树的最小深度是0，显然不对。
// 所以，正确的解法应该是左右子树仅存在其中一个的时候，返回深度的最大值。左右子树都存在时，返回他们的最小值。
var minDepth = function(root) {
  if (!root) {  
    return 0
  } else {
     if(root.left === null || root.right === null) {
       return Math.max(minDepth(root.left), minDepth(root.right))+1;
     }
     return Math.min(minDepth(root.left), minDepth(root.right)) + 1
  }
};
