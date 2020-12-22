/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count=0
    for(i=0;i<nums.length;i++){
        if(nums[i]==0) return
        if(nums[i].toString().split("").length % 2==0){
            count++
        }
    }
    return count
};
