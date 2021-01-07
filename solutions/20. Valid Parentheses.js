/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hash='(){}[]'
    let stack=[]
    let i=0
    while(i<s.length){
        if (hash.indexOf(s[i]) %2 == 0){
            stack.push(s[i])
            i++
        }else if(hash.indexOf(s[i]) %2 !== 0 && (hash.indexOf(stack.pop())+1 == hash.indexOf(s[i]))){
                 i++
        }else{
                 return false
        }
    }
    return stack.length ==0
}
​
