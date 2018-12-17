/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    const tracker = [];
    var depth = 0;
    //逐层遍历
    helper(root, depth, tracker);
    return tracker.reverse();
};

function helper(root, depth, tracker) {
    if (root === null) {
        return;
    }
    tracker[depth] = tracker[depth] || [];
    tracker[depth].push(root.val);
    
    helper(root.left, depth + 1, tracker);
    helper(root.right, depth + 1, tracker);
}