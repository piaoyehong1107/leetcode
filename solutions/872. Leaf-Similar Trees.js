/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function dfs(nood, arr=[]){
        if(!nood.left && !nood.right) arr.push(nood.val)
        if(nood.left){
            dfs(nood.left,arr)
        }
        if(nood.right){
            dfs(nood.right,arr)
        }
        console.log(arr)
        return arr
    }
    dfs(root1,arr1=[])
    dfs(root2,arr2=[])
    console.log(arr1.toString())
    console.log(arr2.toString())
    return arr1.toString() == arr2.toString()
};
