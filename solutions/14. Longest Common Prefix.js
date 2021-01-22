/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let final=''
    let i
    let j
    if(strs.length == 0) return ''
    for(i=0; i<strs[0].length; i++){
        for(j=0; j< strs.length-1; j++){
            if(strs[j][i] !==strs[j+1][i]){
                return final
            }
        }
        final=final+strs[j][i]
    }
    return final
};
​
