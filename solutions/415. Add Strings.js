/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1a=num1.split("").reverse()
    num2a=num2.split("").reverse()
    let num1f=0
    let num2f=0
    let i=0
    let j=0
    while(i<num1a.length){
        num1f=num1f+parseInt(num1a[i]) * Math.pow(10, i)
        i++
    }
    console.log(num1f)
    while(j<num2a.length){
        num2f=num2f+parseInt(num2a[j]) * Math.pow(10, j)
        j++
    }
     console.log(num2f)
    return (num1f+num2f).toString()
};
​
// addStrings = function(num1, num2) {
//     const dict = {
//         '' : 0,
//         '0': 0,
//         '1': 1,
//         '2': 2,
//         '3': 3,
//         '4': 4,
//         '5': 5,
//         '6': 6,
