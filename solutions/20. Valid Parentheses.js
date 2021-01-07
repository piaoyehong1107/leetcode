/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hash='(){}[]'
    let stack=[]
    // console.log(hash.indexOf("{"))
    // console.log(s[1])
    let i=0
    while(i<s.length){
        
        
        
        if (hash.indexOf(s[i]) %2 == 0){
            console.log(stack)
            stack.push(s[i])
            i++
        }else if(hash.indexOf(s[i]) %2 !== 0 && (hash.indexOf(stack.pop())+1 == hash.indexOf(s[i])){
                 i++
        }else{
                 return false
            }
    }
    return stack.length ==0
}
​
// const isValid = (str) => {
//     if (str.length === 1) return false;
    
//     const pairs = "(){}[]";
//     const stack = [];
//     for(const bracket of str) {
//         const index = pairs.indexOf(bracket);
//         if (index % 2 === 0) { // is opening bracket
//             stack.push(index);
//         } else {
//             if (stack.pop() !== index - 1) {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;
// }
