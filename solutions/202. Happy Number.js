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
        temp.push(sum)
        console.log(temp)
        while(sum!=1){
          isHappy2(sum)
            if(temp.includes(sum)){console.log("Y")}
        }
        return sum
      }
isHappy2(n)
return sum == 1
};
​
