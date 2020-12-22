/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    arr=[]
    let j;
    for (let i=0; i<A[0].length; i++){
        for(j=1; j<A.length;j++){
            if(A[j].includes(A[0][i])){
               continue;
            }
            else{
                break;
            }
        }
        if(j==A.length){
                for(let k=1; k<A.length;k++){
                  console.log(A[k])
                  console.log(A[0][i])
                  A[k]=A[k].replace(A[0][i],'')
​
                }
            arr.push(A[0][i])
        }    
    }
    return arr
};
