/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
   const dic={
        "1": "A","2": "B","3": "C","4": "D","5": "E","6": "F","7": "G","8": "H","9": "I","10": "J","11": "K","12": "L","13": "M",
        "14":"N","15":"O","16":"P","17":"Q","18":"R","19":"S","20":"T","21":"U","22":"V","23":"W","24":"X","25":"Y","26":"Z",
    }
    const l=s.length
    let final=1
    for(let i=0; i<l; i++){
        if(dic[s[i]] && dic[s[i+1]] && dic[s[i]+s[i+1]]){
            final++
        }
        console.log(i)
    }
    return final
};
