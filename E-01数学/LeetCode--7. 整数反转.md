# 题目描述

 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。 

**示例**:

``` c
示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21
```

**注意:**

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

# 解:弹出和推入数字 & 溢出前进行检查

思路

我们可以一次构建反转整数的一位数字。在这样做的时候，我们可以预先检查向原整数附加另一位数字是否会导致溢出。

算法

反转整数的方法可以与反转字符串进行类比。

要在没有辅助堆栈 / 数组的帮助下 “弹出” 和 “推入” 数字，我们可以使用数学方法。

```js
//pop operation:
pop = x % 10;
x /= 10;

//push operation:
temp = rev * 10 + pop;
rev = temp;
```

> https://leetcode-cn.com/problems/reverse-integer/solution/zheng-shu-fan-zhuan-by-leetcode/

``` js
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    let rev = 0;
    while (x != 0) {
        const pop = x % 10;
        x = parseInt(x / 10);
        if (rev > parseInt(Math.pow(2, 31) / 10) || (rev === parseInt(Math.pow(2, 31) / 10) && pop > 7)) return 0;
        if (rev < parseInt(Math.pow(-2, 31) / 10) || (rev === parseInt(Math.pow(-2, 31) / 10) && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};
```

