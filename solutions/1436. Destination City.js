/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let n=paths.length
    let des=[]
    let final=''
    for(i=0;i<n;i++){
        des.push(paths[i][0])
    }
    // console.log(des)
    for(i=0;i<n;i++){
        if(!des.includes(paths[i][1])){
            final=paths[i][1]
          }
    }
    return final
};
​
 
