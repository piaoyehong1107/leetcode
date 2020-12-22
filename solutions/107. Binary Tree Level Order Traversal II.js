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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let trs=[]
    function dfs(node,level){
        if(!node) return
        if(trs[level] === undefined) trs.push([node.val])
        else{
            trs[level].push(node.val)
        }
        dfs(node.left,level+1)
        dfs(node.right,level+1)
        return trs;
    }
    dfs(root,0)
    return trs.reverse()
};
​
