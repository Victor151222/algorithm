# 题目描述

给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

# 解法1：深度优先算法


``` js
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const list = [];
    // left、right为用过的括号
    const generateOneByOne = (left, right, n, result) => {
        if (left === n && right === n) {
            list.push(result);
            return;
        }
        if (left < n) {
            generateOneByOne(left + 1, right, n, result + '(');
        }
        if (left > right && right < n) {
            generateOneByOne(left, right + 1, n, result + ')');
        }
    };
    generateOneByOne(0, 0, n, '');
    return list;
};
```
另外一种写法，逻辑更清晰：
```js
const generateParenthesis = (n) => {
    const list = [];
    // left、right为剩余的括号
    const generateOneByOne = (left, right, result) => {
        if (left === 0 && right === 0) {
            list.push(result);
            return;
        }
        if (left > 0) {
            generateOneByOne(left - 1, right, result + '(');
        }
        if (right > left) {
            generateOneByOne(left, right - 1, result + ')');
        }
    };
    generateOneByOne(n, n, '');
    return list;
};
```