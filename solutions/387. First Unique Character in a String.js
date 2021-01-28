/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
 // console.log(s.splice(1,2))
    let i=0
    if(s.length==0) return -1
    else if(s.length==1) return 0
    else if(s.length==2 && s[0]==s[1]){
        return -1
    }
    while(i < s.length){
        const k=s.split("")
        k.splice(i,1)
        // console.log(k)
        if(!k.includes(s[i])){
            return i
        }
        console.log(i)
        i++
        // if(i==s.length-2) return -1
    }
};
