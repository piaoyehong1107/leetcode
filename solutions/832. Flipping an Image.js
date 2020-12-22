/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(i=0;i<A.length;i++){
        A[i]=A[i].reverse()
        for(j=0;j<A.length;j++){
            console.log(A[i])
            if(A[i][j]==0){
                A[i][j]=1
            }else{
                A[i][j]=0
            }
        }
    }
    return A
};
// var flipAndInvertImage = function(A) {
//      for(let row in A) {
//          A[row] = A[row].reverse();
//          A[row] = A[row].map(x => 1 - x);
//      }
//  return A;
// };
