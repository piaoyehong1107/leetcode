/**
 * @param {number} n
 * @return {number}
 */
​
var subtractProductAndSum = function(n) {
    let sum=0
    let prd=1
    let arr=n.toString().split('')
    for(let i=0; i< arr.length; i++){
        sum=sum+parseInt(arr[i])
        prd=prd*parseInt(arr[i])
    }
    return prd-sum
};
