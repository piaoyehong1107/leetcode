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
 * @return {number}
 */
​
var maxDepth = function(root) {
    let max=0;
    const dfs=(node,i)=>{
        if(!node) return 0;
        dfs(node.left,i+1,)
        dfs(node.right,i+1)  
        if (i>max){
            max = i
        }
    }
    dfs(root,1)
    return max;
};
