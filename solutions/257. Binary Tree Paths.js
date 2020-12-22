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
 * @return {string[]}
 */
​
var binaryTreePaths = function(root) {
    let res=[]
    function dfs(node,st=''){
        if(!node) return st
        st= st + node.val
        dfs(node.left,st+"->")
        dfs(node.right,st+"->")
        if(!node.left && !node.right){
          return res.push(st)
        }
    }
    dfs(root)
    return res
};
