# 题目描述

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

# 解法1：BFS

使用队列先进先出的思想

时间复杂度：O(n)

``` js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let subLenght = queue.length;
        let subResult = [];
        while (subLenght) {
            let node = queue.shift();
            subResult.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            subLenght--;
        }
        result.push(subResult);
    }
    return result;
};
```

# 解法2：DFS

时间复杂度：O(n)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    const dfs = function (currentNode, level) {
        if (!result[level]) {
            result[level] = [];
        }
        result[level].push(currentNode.val);
        if (currentNode.left) {
            dfs(currentNode.left, level + 1);
        }
        if (currentNode.right) {
            dfs(currentNode.right, level + 1);
        }
    };
    dfs(root, 0);
    return result;
};
```