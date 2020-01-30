# 题目描述

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”


# 解法1：递归

利用二叉搜索树的特性

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
    if (p.val < root.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (p.val > root.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};
```

# 解法2： 用while循环

``` js
const lowestCommonAncestor = (root, p, q) => {
    while (root) {
        if (p.val < root.val && root.val > q.val) {
            root = root.left;
        } else if (p.val > root.val && root.val < q.val) {
            root = root.right;
        } else {
            return root;
        }
    }
};
```

