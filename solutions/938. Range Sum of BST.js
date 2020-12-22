/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
​
var rangeSumBST = function(root, low, high) {
    let res=0
    function dfs(node, l, h){
        if(!node) return
        if (l <= node.val && node.val<= h){
            // console.log(node.val)
            res+=node.val
        }
        dfs(node.right,l,h)
        dfs(node.left,l,h)
        console.log(res)
        return res
    }
    dfs(root,low,high)
    return res
};
