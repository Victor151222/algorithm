# 题目描述

 给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。 

返回滑动窗口中的最大值。

**示例**:

``` c
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

# 解1：滑动窗口

**时间复杂度**：O(n)，在最糟糕的情况下，每个字符将被 i 和 j 访问两次。

滑动窗口是数组/字符串问题中常用的抽象概念。 窗口通常是在数组/字符串中由开始和结束索引定义的一系列元素的集合，即 [i,j)（左闭，右开）。而滑动窗口是可以将两个边界向某一方向“滑动”的窗口。例如，我们将 [i,j)向右滑动 1 个元素，则它将变为 [i+1,j+1)（左闭，右开）。

回到我们的问题，我们使用 HashSet 将字符存储在当前窗口 [i,j)（最初 j=i）中。 然后我们向右侧滑动索引 j，如果它不在 HashSet 中，我们会继续滑动 j。直到 s[j] 已经存在于 HashSet 中。此时，我们找到的没有重复字符的最长子字符串将会以索引 i 开头。如果我们对所有的 i 这样做，就可以得到答案。

``` js
const lengthOfLongestSubstring = (s) => {
    const n = s.length;
    const windowSet = new Set();
    let leftIndex = 0;
    let rightIndex = 0;
    let result = 0;
    while (leftIndex < n && leftIndex < n) {
        if (windowSet.has(s[rightIndex])) {
            windowSet.delete(s[leftIndex]); // 删除windowSet的最左侧元素，左移窗口
            leftIndex++;
        } else {
            windowSet.add(s[rightIndex]);
            result = Math.max(result, rightIndex - leftIndex + 1);
            rightIndex++;
        }
    }
    return result;
};
```

# 解2：优化的滑动窗口

上述的方法最多需要执行 2n 个步骤。事实上，它可以被进一步优化为仅需要 n 个步骤。我们可以定义字符到索引的映射，而不是使用集合来判断一个字符是否存在。 当我们找到重复的字符时，我们可以立即跳过该窗口。

也就是说，如果 s[j] 在 [i,j)范围内有与 j′重复的字符，我们不需要逐渐增加 i 。 我们可以直接跳过[i，j′] 范围内的所有元素，并将 i 变为 j′+1。

``` js
const lengthOfLongestSubstring = (s) => {
    const n = s.length;
    const windowMap = new Map();
    let result = 0;
    for (let leftIndex = 0, rightIndex = 0; rightIndex < n; rightIndex++) {
        if (windowMap.has(s[rightIndex])) {
            // 避免windowMap.get(s[rightIndex])小于leftIndex的情况
            // 例如abba，最后一个a时，此时windowMap.get(s[rightIndex])小于leftIndex。
            leftIndex = Math.max(windowMap.get(s[rightIndex]), leftIndex);
        }
        // 每一次移动都要计算
        result = Math.max(result, rightIndex - leftIndex + 1);
        // 存储字符所在索引的下一个位置
        windowMap.set(s[rightIndex], rightIndex + 1);
    }
    return result;
};
```

