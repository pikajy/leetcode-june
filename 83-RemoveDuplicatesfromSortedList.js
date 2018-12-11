/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let cur = head;
     while (cur && cur.next) {
         if (cur.val === cur.next.val) {
             // skip duplicates				
             cur.next = cur.next.next;
         } else {
             cur = cur.next;
         }
     }
     return head;
 };