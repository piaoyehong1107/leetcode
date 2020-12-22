/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var current=head
    var i=0
    while (current.next !== null) {
        current=current.next
        i++;
    }
    i = Math.round(i/2)
    console.log(i);
    
    var current = head
    for(j=0; j<i; j++) {
        current=current.next
    }
    
    return current
};
