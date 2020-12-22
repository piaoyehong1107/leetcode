/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length <1) return null;
    let i = Math.floor((nums.length)/2)
    console.log(i)
    let root= new TreeNode(nums[i])
    let vall=sortedArrayToBST(nums.slice(0,i))
    let valr=sortedArrayToBST(nums.slice(i+1))
    root.left=vall;
    root.right=valr;
    return root;
};
​
​
