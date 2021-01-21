/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
    
// };
​
var isPalindrome = function(head) {
    if (!head) return true;
    let slow = head, fast = head, len = 1;
    while (fast !== null) {
        fast = fast.next;
        if (!fast || !fast.next) break;
        else fast = fast.next;
        slow = slow.next;
        len++;
    }
    // Now, slow refers to the middle node
    let prev = slow, cur = prev.next;
    while (cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    // Now, prev refers to the head of the reversed right half
    let left = head, right = prev;
    for (let i = 0; i < len; i++) {
        if (left.val == right.val) {
            left = left.next;
            right = right.next;
        }
        else {
            return false;
        }
    }
    return true;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};
