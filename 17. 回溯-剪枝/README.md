
回溯法三要素：
结束条件、做什么选择、如何剪枝

backtrack 解题公式

```
function backtrack(list, tempList, nums) {
    // 终止条件
    if (tempList.length === nums.length) return list.push([...tempList]);
    // 循环做选择
    for(let i = 0; i < nums.length; i++) {
        // 剪枝
        if (tempList.includes(nums[i])) continue;
        // 选择
        tempList.push(nums[i]);
        // 回溯
        backtrack(list, tempList, nums);
        // 撤销选择
        tempList.pop();
    }
}
```

> [5分钟理解回溯算法](https://www.bilibili.com/video/BV1r54y1C7Uf/?spm_id_from=autoNext)

> Leetcode相关题目
31.next-permutation
39.combination-sum
40.combination-sum-ii
47.permutations-ii
60.permutation-sequence
78.subsets
90.subsets-ii
113.path-sum-ii
131.palindrome-partitioning
