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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true
    let res=[]
    function dfs(node,n){
        if(!node) return n
        let l= dfs(node.left,n+1)
        let r= dfs(node.right,n+1)
        res.push(Math.abs(l-r))
        return Math.max(l,r)
    }
    dfs(root,0,0)
    let a=Math.max(...res)
    return a<=1
};
