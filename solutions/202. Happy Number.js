/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let st=n.toString().split("")
    let final=0 
    for(let i=0; i< st.length; i++){
        final=final+Math.pow(parseInt(st[i]),2)
        console.log(final)
    }
    if(final.toString().length==1 && final==1) {
        return true
    }else if(final.toString().length==1 && final !=1){
        return false
    }
    isHappy(parseInt(final))
    return final
};
