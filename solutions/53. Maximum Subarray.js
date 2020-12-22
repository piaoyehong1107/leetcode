/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=-1000
    if (nums.length==1)return nums[0]
    // if (nums.length==2)return Math.max(nums[0],nums[1],nums[0]+nums[1])
    for(i=0;i<nums.length;i++){
        let sum=nums[i]
        for(j=i+1;j<nums.length;j++){
            sum=sum +nums[j]
            if(sum>max){
                max=sum
                console.log(max)
            }
        }
         if(nums[i]>max){
                max=nums[i]
            }
    }
    return max
};
