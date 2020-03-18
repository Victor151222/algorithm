# 题目描述

给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

**示例**:

``` c
输入: s = "anagram", t = "nagaram"
输出: true
输入: s = "rat", t = "car"
输出: false
```

# 解法1：按字典排序

快排，时间复杂度：nlog(n)

# 解法2：Map

时间复杂度：O(n)

由于JavaScript中无法直接判断两个Map对象是否相同，所以时间复杂度上，此题JavaScript的使用Map的效率低于Python。

**JavaScript**

``` js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const dic1 = new Map();
    const dic2 = new Map();
    for (item of s) {
        const value = dic1.has(item) ? dic1.get(item) + 1 : 0;
        dic1.set(item, value);
        console.log(dic1.size);
    }
    for (item of t) {
        const value = dic2.has(item) ? dic2.get(item) + 1 : 0;
        dic2.set(item, value);
    }
    let result = true;
    dic1.forEach(function(value, key) {
        if (value !== dic2.get(key)) {
            result = false;
            return;
        }
    })
    return result;
};
```

**python**

``` python
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        dic1, dic2 = {}, {}
        for item in s:
            dic1[item] = dic1.get(item, 0) + 1;
        for item in t:
            dic2[item] = dic2.get(item, 0) + 1;
        return dic1 == dic2;

```

# 解法3：用数组来实现朴素的Hash表

题目比较特殊：小写字母

直接操作数组，比操作Map性能更快。

此处的Hash函数为： `item.charCodeAt() - 'a'.charCodeAt()` 

``` js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const dic1 = [];
    const dic2 = [];
    for (let i = 0; i < 26; i++) {
        dic1.push(0);
        dic2.push(0);
    }
    for (item of s) {
        dic1[item.charCodeAt() - 'a'.charCodeAt()] += 1;
    }
    for (item of t) {
        dic2[item.charCodeAt() - 'a'.charCodeAt()] += 1;
    }
    return dic1.toString() === dic2.toString();
};
```

