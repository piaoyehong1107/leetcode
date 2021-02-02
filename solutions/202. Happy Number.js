/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let temp=[]
    let sum
          var isHappy2 = function(n){
            n=n.toString().split("")
            sum=0
                for(let i=0; i<n.length; i++){
                  sum=sum+Math.pow(n[i],2)
                }
                if(sum==1) return
                if(!temp.includes(sum)){
                    temp.push(sum)
                    console.log(temp)
                    isHappy2(sum)
                }
            return sum
          }
    isHappy2(n)
    return sum == 1
};
​
