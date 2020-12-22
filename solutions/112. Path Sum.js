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
 * @param {number} sum
 * @return {boolean}
 */
​
// var hasPathSum = function(root, sum) {
//     return hasPathSumHelper(root, sum, 0)
// };
​
// function hasPathSumHelper(root, sum, check) {
//     if(root === null) return false
    
//     check += root.val
    
//     if(root.left === null && root.right === null && check === sum) return true
    
//     let left = hasPathSumHelper(root.left, sum, check)
//     let right = hasPathSumHelper(root.right, sum, check)
    
//     return left === true || right === true
// }
​
var hasPathSum = function(root, sum) {
    let arr=[]
    function dfs(node,s=0){
        if(!node) return
        s += node.val
        dfs(node.left,s)
        dfs(node.right,s)
        if(!node.left && !node.right){
            arr.push(s)
        }
        return s
    }
    dfs(root)
    console.log(arr)
    return arr.includes(sum)
};
