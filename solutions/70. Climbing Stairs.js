/**
 * @param {number} n
 * @return {number}
 */
​
var climbStairs = function(n, memo = {1:1, 2:2}) {
   if (memo[n] !== undefined) return memo[n];   
   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    console.log(memo)
   return memo[n];
};
