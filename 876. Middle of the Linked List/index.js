/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (slowPointer != null && fastPointer !== null) {
    slowPointer = slowPointer.next;
    console.log('slowpointer', slowPointer)
    fastPointer = fastPointer.next.next
    console.log('fastPointer', fastPointer);
  };
};