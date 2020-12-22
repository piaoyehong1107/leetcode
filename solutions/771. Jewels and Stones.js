/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count=0
    let i=0
    let j=0
    for(j=0; j<J.length; j++){
        for(i=0;i<S.length;i++){
            if(J[j]==S[i]){
                count++
            }
         }
    }
    return count
};
