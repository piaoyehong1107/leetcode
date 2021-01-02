/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let hash={
        '(': ')', 
        '{': '}', 
        '[': ']'
    }
    let arr=s.split("")
​
//     console.log(arr.splice(0,1))
    let i=0
    while(i<arr.length){
        if(hash[arr[i]] && arr.includes(hash[arr[i]])){
            if((arr.indexOf(hash[arr[i]])-i)%2 !==0){
                arr.splice(arr.indexOf(hash[arr[i]]),1)
                arr.splice(i,1)
                console.log(arr)
            }else{
                return false
            }
        }else{
            return false
        }
        i++
    return true
    };
}
