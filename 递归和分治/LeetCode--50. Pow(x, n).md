# 题目描述

实现 pow(x, n) ，即计算 x 的 n 次幂函数。

# 解法1：分治-递归

时间复杂度：O(logn)

``` js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
    if (!n) {
        return 1;
    }

    if (n < 0) {
        return 1 / myPow(x, -n);
    }

    if (n % 2) {
        return x * myPow(x, n-1);
    }
    return myPow(x*x, n/2);
};
```

# 解法2：分治-非递归方法，位运算

计算机本身就是用二进制来进行存储的，所以用位运算会更快一点

``` js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let pow = 1;
    while (n) {
        if (n & 1) {
            pow *= x;
        }
        x *= x;
        n >>>= 1;
    }
    return pow;
};
```