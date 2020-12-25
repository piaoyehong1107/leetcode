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
    let final=[]
    
    function sort(n1,n2){
        if(!n1) return
        if(!n2) return
        if(n1.val <= n2.val){
            final.push(n1.val,n2.val)
        }
        if(!n1.next|| !n2.next){
            return
        }else{
            l1=l1.next
            l2=l2.next
            sort (l1,l2)
        }
        console.log(final)
        return final
    }
    sort(l1, l2)
    return final
};
