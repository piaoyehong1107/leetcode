/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
​
var isAlienSorted = function(words, order) {
    let orders=order.split("")
   // console.log (orders.indexOf(words[0][1]))
    for(let i=0;i<words.length-1; i++){
        let j=0
        while(j<words[0].length){
            if(orders.indexOf(words[i+1][j]) > orders.indexOf(words[i][j])){
                break;
           }
            if(orders.indexOf(words[i+1][j]) < orders.indexOf(words[i][j])){
                console.log("X")
                return false
            }
                console.log(words[i][j])
                j++;
        }    
    }
    return true
};
​
// var isAlienSorted = function(words, order) {
//     if (words.length < 2) return true;
//     for (let i=0; i<words.length-1; i++) {
//         for(j=0; j<words[i].length; j++) {  
//             if ((words[i+1][j] == undefined) || (order.indexOf(words[i][j]) > order.indexOf(words[i+1][j]))) return false; //current char fails order test
//             if (words[i+1][j] != words[i][j]) break; //already passed test, go to next (unless chars are the same, inwhich case keep checking)
//         }
//     }
//     return true;
// };
