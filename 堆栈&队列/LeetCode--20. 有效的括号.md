# 题目描述

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

**示例**:

``` c
输入: "()"
输出: true
```

# 解：

``` js
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const data = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ])
    const stack = [];
    for (const item of s) {
        if (!data.has(item)) {
            stack.push(item);
        } else {
            if (stack.length === 0 || stack.pop() !== data.get(item)) {
                return false;
            }
        }
    }
    // 最后栈中为空，则返回True
    return stack.length === 0;
};
```

