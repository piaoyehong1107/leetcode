/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    console.log(nums)
    let n=nums.length
    let max=0
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            let s=(nums[i]-1)*(nums[j]-1)
            if(s>max){
                max=s
            }
        }
    }
    return max
};
