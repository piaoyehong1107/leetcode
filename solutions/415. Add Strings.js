/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//     num1a=num1.split("").reverse()
//     num2a=num2.split("").reverse()
//     let num1f=parseInt(0)
//     let num2f=parseInt(0)
//     let i=0
//     let j=0
//     while(i<num1a.length){
//         num1f=num1f+parseInt(num1a[i]) * Math.pow(10, i)
//         i++
//     }
//     console.log(num1f)
//     while(j<num2a.length){
//         num2f=num2f+parseInt(num2a[j]) * Math.pow(10, j)
//         j++
//     }
//      console.log(num2f)
//     return (num1f+num2f).toString()
// };
​
addStrings = function(num1, num2) {
    sum = '';
    len1 = num1.length;
    len2 = num2.length;
    carry = 0;
​
    while(len1 > 0 || len2 > 0 || carry) {
        num1Digit = +num1.charAt(len1-1);
        num2Digit = +num2.charAt(len2-1);
        len1--;
        len2--;
        
        digitTotal = num1Digit + num2Digit + carry;
        carry = Math.floor(digitTotal / 10);
        digitToAppend = digitTotal % 10;
        sum = digitToAppend + sum;
    } 
​
    return sum;
};
