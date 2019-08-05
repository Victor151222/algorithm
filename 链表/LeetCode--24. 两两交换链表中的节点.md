# 题目描述

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

**示例**:

``` c
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

# 解法1：迭代

``` js
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
const swapPairs = function(head) {
    const dummyHead = {
        next: head
    };
    let current = dummyHead;
    while (current.next && current.next.next) {
        // 初始化双指针
        let node1 = current.next;
        let node2 = node1.next;

        // 更新双指针和current指针
        let next = node2.next;
        node1.next = next;
        node2.next = node1;
        current.next = node2;

        // 更新指针
        current = node1;
    }
    return dummyHead.next;
};
```

# 解法2： 递归

利用了回溯的思想，递归遍历到链表末尾，然后先交换末尾两个，然后依次往前交换。

``` js
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
const swapPairs = function(head) {
    if (!head || !head.next) return head;
    let tem = head.next;
    head.next = swapPairs(head.next.next);
    tem.next = head;
    return tem;
};
```

