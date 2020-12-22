/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    console.log(num.toString().split(""))
    let numm=num.toString().split("")
    let i=0
    while(i<numm.length)
    if(numm[i]=="6"){
       numm[i]="9"
        break;
    }else(
        i++
    )
    return numm.join("")
};
