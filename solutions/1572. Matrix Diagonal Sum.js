/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum=0
    let n = mat[0].length
    console.log(n)
    for(i=0; i< n; i++){
        if(i==n-1-i){
            sum=sum+mat[i][i]
        }else{
            sum=sum+mat[i][i]+mat[i][n-1-i]
        }
    }
    return sum
};
