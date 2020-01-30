# 题目描述

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。


# 解法1：中序遍历

时间复杂度为：O(n)

判断中序遍历后得到的数组是否是升序的

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
 * @return {boolean}
 */
const isValidBST = (root) => {


    let queue = [];

    const inorder = (root) => {
        if (!root) {
            return;
        }

        if (root.left) {
            inorder(root.left);
        }

        if (root) {
            queue.push(root.val);
        }

        if (root.right) {
            inorder(root.right);
        }

    };

    inorder(root);

    for (let i = 0; i < queue.length - 1; i++) {
        if (queue[i] >= queue[i + 1]) {
            return false;
        }
    }

    return true;

};
```

如果树里面的元素比较多的话，上面是一种比较低效的写法。
**优化**
在中序遍历的时候，不需要把所有的节点都给保存起来，只需要记住它的前继节点，用当前节点和前继节点比较即可。
只需要存一个前继节点，所以占用内存较小。

```js
const isValidBST = (root) => {
    let prev = null;

    const helper = (root) => {
        if (!root) {
            return true;
        }

        if (!helper(root.left)) {
            return false;
        }

        if (prev && prev.val >= root.val) {
            return false;
        }
        prev = root;

        return helper(root.right);
    };
    return helper(root);
};
```

# 解法2： 递归

时间复杂度为：O(n)

``` js
const isValidBST = (root, min, max) => {
    if(root === null) {
        return true;
    }

    if (min !== null && root.val <= min) {
        return false;
    }

    if (max !== null && root.val >= max) {
        return false;
    }

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
```

