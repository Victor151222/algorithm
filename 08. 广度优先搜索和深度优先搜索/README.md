# 广度优先搜索(Breadth First Search)

一层一层的进行搜索，更符合人类思维。

**模板**
```js
// BFS 不需要进行递归，直接一个队列遍历就可以
function BFS(root) {
    // 队列，先进先出
    const queue = [root];
    // 判断节点是否被访问过，树不需要，一般图或状态集需要
    const visited = new Set(root);

    while (queue.length) {
        // 从对列头部取出当前节点
        const node = queue.shift();
        // 将当前节点加入已访问的列表
        visited.add(node);
        // 处理当前节点
        process(node);
        // 获取节点的后继节点，也就是儿子节点
        const nodes = generateRelatedNodes(node);
        // 将当前节点的后继节点加入队列里面
        queue.push(nodes);
    }

    // 处理一些其他的事情
}
```

# 深度优先搜索(Depth First Search)

机器的思维，一次到底。

**模板**
```js
function DFS(root) {
    // 判断节点是否被访问过，树不需要，一般图或状态集需要
    const visited = new Set();
    function dfs(node) {
        visited.add(node);
        // 处理当前节点的事情

        // 对当前节点的所有孩子进行遍历，如果是图的话，遍历相邻节点
        for (next_node in node.children) {
            if (!visited.has(next_node)) {
                dfs(next_node);
            }
        }
    }
    dfs(root);
}
// 递归本身给我们实现了一个栈的数据结构，来存所有的节点
```