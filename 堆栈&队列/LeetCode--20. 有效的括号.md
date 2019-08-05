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

# 解1：

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

# 解2：

时间复杂度会有点高。平均会达到O(n^2/2)

``` js
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let length;
    do {
        length = s.length;
        s = s.replace('()', '').replace('{}', '').replace('[]', '');
    } while (length !== s.length) {
        return length === 0;
    }
};
```

