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
​
let mergeTwoLists = function(l1, l2) {
    let fh = new ListNode(-1);
    let current = fh;
    while(l1 || l2){
        if(l2 == null || (l1 !== null && l1.val <= l2.val)){
            fh.next = l1;
            console.log("1")
            console.log(fh)
            console.log(current)
            fh = fh.next;
            l1 = l1.next;
        } else {
            fh.next = l2;
             console.log("2")
            console.log(fh)
            console.log(current)
            fh = fh.next;
            l2 = l2.next;
        }
    }
    return current.next;
};
