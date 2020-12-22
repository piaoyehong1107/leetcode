/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// var getDecimalValue = function(head) {
//     let count=0
//     let sum=0
//     function dfs(node){
//         if(!node) return
//         if(node.next){
//             count++
//         }
//         dfs(node.next) 
//     }  
​
//     dfs(head)
​
//     while(head){
//         if(head.val){
//             sum=sum+2**count
//         }
//     count--
//     head=head.next
//     }
//     return sum
// };
var getDecimalValue = function(head) {
    let res = 0
    let node = head
    while (node) {
        res = res * 2 + node.val
        node = node.next
        console.log(res)
    }
    return res
};
