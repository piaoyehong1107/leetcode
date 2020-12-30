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
    // console.log(hash[arr[5]])
    for(i=0;i<arr.length;i++){
        if(hash[arr[i]] && arr.includes(hash[arr[i]])){
            if((arr.indexOf(hash[arr[i]])-i)%2 !==0){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
};
