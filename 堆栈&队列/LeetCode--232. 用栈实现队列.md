# 题目描述

使用栈实现队列的下列操作：

    push(x) -- 将一个元素放入队列的尾部。
    pop() -- 从队列首部移除元素。
    peek() -- 返回队列首部的元素。
    empty() -- 返回队列是否为空。

**示例**:

``` js
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek(); // 返回 1 
queue.pop(); // 返回 1 
queue.empty(); // 返回 false
```

# 解：

负负得正

定义两个栈，一个做输入，一个做输出。
进队列，就进输入栈。
出队列，判断输出栈是否为空，如果为空，那么将输入栈全部依次压进输出栈，然后从输出栈弹出。如果不为空，直接从输出栈弹出。

``` js
/**
 * Initialize your data structure here.
 */
const MyQueue = function() {
    this.input = [];
    this.output = [];
    this.size = 0;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.output.length == 0) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }
    return this.output.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.output.length == 0) {
        while (this.input.length) {
            this.output.push(this.input.pop());
        }
    }
    return this.output[this.output.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.input.length && !this.output.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

