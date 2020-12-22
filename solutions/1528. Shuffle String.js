/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    nindices=[...indices].sort(function(a, b){return a - b})
    console.log(nindices)
    console.log(indices)
    let final=''
    for(i=0;i<s.length;i++){
        // console.log(indices.indexOf(nindices[i]))
        final+=s[indices.indexOf(nindices[i])]
    }
    return final
};
