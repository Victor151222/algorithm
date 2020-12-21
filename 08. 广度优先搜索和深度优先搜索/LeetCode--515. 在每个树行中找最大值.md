# 题目描述

您需要在二叉树的每一行中找到最大的值。

示例：
```

输入: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

输出: [1, 3, 9]
```

# 解法1：广度优先遍历

``` js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function (root) {
    if (!root) {
        return [];
    }
    const queue = [root];
    const result = [];
    while (queue.length) {
        let len = queue.length;
        let max = Number.MIN_SAFE_INTEGER;
        while (len) {
            const currentNode = queue.shift();
            if (currentNode.val > max) {
                max = currentNode.val;
            }
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
            len--;
        }
        result.push(max);
    }
    return result;
};
```