/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let st=n.toString().split("")
    let final=0 
​
    var sum = function(final){
        for(let i=0; i<st.length; i++){
            final=final+Math.pow(parseInt(st[i]),2)
            console.log(final)
        }
    }
    while (final.toString().length >1){
        sum(final)
    }
    if(final==1) {
        return true
    }else{
        return false
    }
};
