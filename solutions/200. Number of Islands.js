/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m=grid.length
    let n=grid[0].length
    let final=0;
    for(let a=0;a<m;a++){
        grid[a].push("0")
        grid[a].unshift("0")
    }
    let arr=[]
    for(let b=0;b<n+2;b++){
        arr.push("0")
    }
    grid.push(arr)
    grid.unshift(arr)
    // console.log(grid)
    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1; j++){
            let temp=[]
            if(grid[i][j]=="1"){
               temp.push(grid[i-1][j])
                temp.push(grid[i+1][j])
                temp.push(grid[i][j+1])
                temp.push(grid[i][j-1])
                console.log(temp) 
                let temp2=[]
                for(let k=0; k<temp.length; k++){
                    if(temp[k]=="1"){temp2.push(temp[k])}
                }
                if(temp2.length<=1){final++}
            }
        }
    }
    return final
};
