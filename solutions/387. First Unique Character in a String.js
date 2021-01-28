/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let i=0
    while(i < s.length){
        const k=s.split("")
        k.splice(i,1)
        // console.log(k)
        if(!k.includes(s[i])){
            return i
        }
        // console.log(i)
        i++
    }
    return -1
};
