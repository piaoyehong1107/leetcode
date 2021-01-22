/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aa=a.length-1
    let bb=b.length-1
    let adv=0
    let final=''
    let i=0
    while(a[aa-i] || b[bb-i]){
       let sum = (parseInt(a[aa-i])||0)+(parseInt(b[bb-i])||0)+parseInt(adv)
        console.log(sum)
        if(sum==0){
            adv=0
            final='0'+final
        }
        else if(sum==1){
            adv=0
            final='1'+final
        }else if(sum==2){
            adv=1
            final='0'+final
        }else{
            adv=1
            final='1'+final
        }
        i++
    }
    if(adv==1){
        return adv+final
    }
    return final
};
