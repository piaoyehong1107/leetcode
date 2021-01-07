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
// var reverseList = function(head) {
//     let arr=[]
//     while(head != null){
//         arr.push(head.val)
//         head=head.next
//     }
//     arr=arr.reverse()
//     let temp=new ListNode(0)
//     // let final
//     // for(i=0; i<arr.length; i++){
//     //     temp.next=new ListNode(0)
//     //     temp.next.val=arr[i]
//     //     final.next=temp
//     //     console.log(final)
//     //     temp=temp.next
//     }
// };
​
// var reverseList = function(head) {
//     console.log(head)
//     let pre = null
//     while(head){
//         const next = head.next
//         head.next = pre
//         pre = head
//         head = next
​
//     }
//     return pre
// }
    
var reverseList = function(head) {
    if (!head) return head;
    
    let node = head;
    let nextNode = head.next;
    
    node.next = null;
​
    while (nextNode) {
        const nextNextNode = nextNode.next;
        nextNode.next = node;
        node = nextNode;
        nextNode = nextNextNode;
    }
    
    return node;
};
    
