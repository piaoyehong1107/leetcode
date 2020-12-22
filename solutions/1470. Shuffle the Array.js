/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    console.log(2*n)
    let arr=[]
    for(let i=0;i < 2*n; i++){
        if(i%2==0){
          arr[i]=(nums[i/2])
        }else{
          arr[i]=(nums[n+Math.floor(i/2)])
        }
    }
    return arr
};
