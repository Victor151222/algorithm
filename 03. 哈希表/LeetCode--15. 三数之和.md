# 题目描述

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

**注意**：答案中不可以包含重复的三元组。

**示例**:

``` c
例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

# 解法一：暴力破解（三层循环）

时间复杂度：O(n^3)

# 解法二：两层循环+hash表

时间复杂度：O(n^2)

# 解法三：先排序，然后遍历一层a，剩下的两层bc两边往中间夹。

时间复杂度：
快排：O(nlogn)
遍历a：O(n)
遍历bc: O(n)
总：O(nlogn) + O(n)*O(n) = O(n^2)
由于解法三没用用到hash表，所以在时间复杂度等于解法二的同时，空间复杂度低于低于解法二。为最优解。

``` js
var threeSum = function(nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的 
    if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解 
        for (let i = 0; i < length - 2;) {
            if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解 
            let first = i + 1;
            let last = length - 1;
            do {
                if (first >= last || nums[i] * nums[last] > 0) break; // 两人选相遇，或者三人同符号，则退出 
                let result = nums[i] + nums[first] + nums[last];
                if (result === 0) { // 如果可以组队 
                    res.push([nums[i], nums[first], nums[last]]);
                }
                if (result <= 0) { // 实力太弱，把菜鸟那边右移一位 
                    while (first < last && nums[first] === nums[++first]) {} // 如果相等就跳过 
                } else { // 实力太强，把大神那边右移一位 
                    while (first < last && nums[last] === nums[--last]) {}
                }
            }
            while (first < last) while (nums[i] === nums[++i]) {}
        }
    }
    return res
}
```

