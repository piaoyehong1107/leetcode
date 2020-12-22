/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m=grid.length
    let n=grid[0].length
    console.log(m)
    console.log(n)
    let count=0
    for(i=0; i<m; i++){
        for(j=0;j<n; j++){
            if(grid[i][j]<0){
                count++
            }
        }
    }
    return count
};
