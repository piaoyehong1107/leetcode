/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0
    for(i=0; i<prices.length;i++){
        for(j=i+1; j<prices.length; j++){
        let pr= -prices[i]+prices[j]
             if (pr > max){
                max = pr
                console.log(max)
             }
        }
    }
     return max
};
