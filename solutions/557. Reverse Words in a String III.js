/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    sarr=s.split(" ")
    newArr=[]
    sarr.forEach(arr =>                           newArr.push(arr.split("").reverse().join("")));
    return newArr.join(" ")
};
