/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let st=n.toString().split("")
    let final=0
    for(let i=0; i< st.length; i++){
        final=final+Math.pow(parseInt(st[i]),2)
    }
    if(final.toString().length !=1 ) {
        isHappy(parseInt(final))
     }
    console.log(final)
    if(final !=1 ) return false
    if(final ==1) return true
    
    return final
};
