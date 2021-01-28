/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let dic={}
    for(let i=0; i<s.length; i++){
        dic[s[i]] ? dic[s[i]]=dic[s[i]]+1 : dic[s[i]]= 1
    }
    for (const ss in dic) {
        if(dic[ss]==1){
            return s.indexOf(ss)
        }
    }
    return -1
};
​
