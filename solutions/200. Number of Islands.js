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
    
    var check = function(ele,i,j){
        if(ele[i-1][j]=="1"){
            ele[i-1][j]="0"
            check(ele,i-1,j)
        }
        if(ele[i+1][j]=="1"){
            ele[i+1][j]="0"
            check(ele,i+1,j)
        }
        if(ele[i][j+1]=="1"){
            ele[i][j+1]="0"
            check(ele,i,j+1)
        }
        if(ele[i][j-1]=="1"){
            ele[i][j-1]="0"
            check(ele,i,j-1) 
        }
    }
    for(let i=1; i<m+1; i++){
        for(let j=1; j<n+1; j++){
            let temp=[]
            if(grid[i][j]=="1"){
                final++
                check(grid,i,j)
            }
        }
    }
    console.log(grid)
    return final
};
