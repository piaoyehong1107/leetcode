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
// var mergeTwoLists = function(l1, l2) {
//     let l3=new ListNode(0)
//     l1.next=l2
//     l3=l1
//     l3.next=l3
// //     if(l1.val<l2.val){
​
// //     }
//     console.log(l3.next)
// };
​
let mergeTwoLists = function(l1, l2) {
    let fh = new ListNode(-1);
    let current = fh;
    while(l1 || l2){
        if(l2 == null || (l1 !== null && l1.val <= l2.val)){
            fh.next = l1;
            fh = fh.next;
            l1 = l1.next;
        } else {
            fh.next = l2;
            fh = fh.next;
            l2 = l2.next;
        }
    }
    return current.next;
};
