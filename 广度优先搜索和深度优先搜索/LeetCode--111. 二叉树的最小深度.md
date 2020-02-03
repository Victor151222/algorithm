# 题目描述

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

# 解法1：递归 DFS

- 节点的高度 = Max(左子树的高度，右子树的高度) + 1
- 以此类推，最后一个左或右节点高度为0 再反过来相加回去即可
- 时间复杂度：O(n)
- 空间复杂度
  - 最坏情况下 O(n) 退化为单链表
  - 最好情况下 O(logn) 为平衡二叉树且高度为logn

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
 * @return {number}
 */
const minDepth = (root) => {
    const minDepth = (root) => {
        if(root === null) {
            return 0;
        }
        // 若节点存在左右节点，则该节点为左右节点深度的最小值+1；
        // 否则为左右节点深度的最大值+1
        if(root.left !== null && root.right !== null) {
            return Math.min(minDepth(root.left), minDepth(root.right)) + 1;   
        } else {
            return Math.max(minDepth(root.left), minDepth(root.right)) + 1;   
        }

    }
    return minDepth(root);
};
```

# 解法2：BFS