/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
 
};
var longestCommonPrefix = function(arr) {
    if (!arr.length) return "";
    let prefix = "";
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if (arr[j][i] !== arr[j+1][i]) return prefix;
        }
        prefix += arr[0][i];
    }
    return prefix;
};
