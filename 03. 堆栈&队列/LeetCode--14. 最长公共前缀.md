# 题目描述

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

**示例**:

``` java
输入: ["flower","flow","flight"]
输出: "fl"
    
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

**说明:**

所有输入只包含小写字母 `a-z` 。

# 解:水平扫描法

**复杂度分析**

1. 时间复杂度：O(S)，S 是所有字符串中字符数量的总和。
   
   最坏的情况下，n个字符串都是相同的。算法会将 S1 与其他字符串 [S2…Sn] 都做一次比较。这样就会进行 S 次字符比较，其中 S 是输入数据中所有字符数量。
2. 空间复杂度：O(1)，我们只需要使用常数级别的额外空间。

``` js
const longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};
```

