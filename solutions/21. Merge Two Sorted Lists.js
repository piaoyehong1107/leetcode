/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // console.log(l2==null)
    let l3=new ListNode(0)
    let current=l3
    while(l1  && l2 ){
        if (l1.val<=l2.val){
            l3.next=l1
            console.log(l3)
            l3=l3.next
            l1=l1.next
        }else{
            l3.next=l2
            console.log(l3)
            l3=l3.next
            l2=l2.next
        }
    }
    if(!l1) l3.next=l2
    if(!l2) l3.next=l1
    
    return current.next
};
​
// var mergeTwoLists = function(l1, l2) {
//     let newHead = new ListNode();
//     let cur = newHead;
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             cur.next = l1;
//             cur = cur.next;
//             l1 = l1.next;
//         } else {
//             cur.next = l2;
//             cur = cur.next;
//             l2 = l2.next;
//         }
//     }
//     if (l1) cur.next = l1;
//     if (l2) cur.next = l2;
​
//     return newHead.next;
//     // Time Complexity: O(m + n), m = length of l1, n = length of l2
//     // Space Complexity: O(1)
// };
