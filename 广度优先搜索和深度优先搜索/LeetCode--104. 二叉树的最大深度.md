# 题目描述

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

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
const maxDepth = (root) => {
    const getDepth = (root) => {
         if(root != null){
            return Math.max(getDepth(root.left), getDepth(root.right)) + 1;   
        }else{
            return 0;
        }
    }
    return getDepth(root);
};
```

# 解法2：迭代（基于栈）DFS

- 不断边压栈边出栈
  - 先两边开始分别都压一个
  - 并先返回一边 剩下的出栈就都是另一边 即一次只出栈一个节点即可实现
- 每次出栈取高度的最大值，初始化root根节点高度为1 就不用再加1了
- 返回更新的高度最终确定比较值

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
 * @return {number}
 */
const maxDepth = (root) => {
    const tmpStack = [
        {"key":root,"val":1}
    ];
    let depth = 0;
    while(tmpStack.length != 0){
        const currObj = tmpStack.pop();
        const currNode = currObj.key;
        if(currNode != null){
            const currNode_depth = currObj.val;
            depth = Math.max(depth,currNode_depth);
            if(currNode.left != null){
                tmpStack.push({"key":currNode.left,"val":currNode_depth + 1});
            }
            if(currNode.right != null){
                tmpStack.push({"key":currNode.right,"val":currNode_depth + 1});
            }
        }
    }
    return depth;
};
```

# 解法3：BFS


