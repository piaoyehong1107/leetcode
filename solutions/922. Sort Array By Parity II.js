/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    oddArr=[]
    evenArr=[]
    newArr=[]
    A.forEach(num=>{
        if (num %2 ==0)
           { evenArr.push(num)}
        else 
           {oddArr.push(num)}
    })
    for(i=0; i< A.length; i++){
        if (i %2 ==0)
        {newArr[i]=evenArr.pop()}
        else
        {newArr[i]=oddArr.pop()}
    }
    return newArr
};
