/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xs=x.toString().split("")
    let xr=x.toString().split("").reverse()
    console.log(xs)
    console.log(xr)
    for(let i=0; i<xs.length; i++){
        if(xs[i] != xr[i]){
            return false
        }
    }
    return true
};
