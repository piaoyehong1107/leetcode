/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    final=[]
    for(i=0;i<nums.length;i++){
        let result=nums.filter(ele=>ele<nums[i])
        final.push(result.length)
    }
    return final
};
