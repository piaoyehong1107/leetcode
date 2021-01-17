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
    const dict = {
        '' : 0,
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }
​
    sum = '';
    len1 = num1.length;
    len2 = num2.length;
    carry = 0;
​
    while(len1 > 0 || len2 > 0 || carry) {
        num1Digit = dict[num1.charAt(len1-1)]; // read num1 last digit
        num2Digit = dict[num2.charAt(len2-1)]; // read num2 last digit
        len1--; // reduce lengths
        len2--;
        
        digitTotal = num1Digit + num2Digit + carry; // do sum with carry
        carry = digitTotal > 9 ? parseInt(digitTotal/10) : 0; // update carry if > 9
        digitToAppend = (digitTotal > 9 ? digitTotal%10 : digitTotal) + '';
        sum = digitToAppend + sum; // append to existing string into first position
    } 
​
    return sum;
};
