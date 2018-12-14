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
var isSymmetric = function(root) {
    return isMirror(root, root)
};
var isMirror = function(p, q) {
        if(!p&&!q){
            return true;
        }
        if(!p||!q){
            return false;
        }
        if(p.val === q.val){
            if(isMirror(p.left, q.right) && isMirror(p.right, q.left)){
                return true;
            }
        }
        return false;    
    };