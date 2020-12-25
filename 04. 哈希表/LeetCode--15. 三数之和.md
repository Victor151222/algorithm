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
const threeSum = function (nums) {
    let result = [];
    const length = nums.length;
    // 将数组升序排列
    nums.sort((a, b) => a - b);
    // 整个数组同符号，则无解 
    if (nums[0] * nums[length - 1] > 0) {
        return result;
    }
    for (let i = 0; i < length - 2; i++) {
        // 优化点：如果遍历到开头的数组大于0终止循环
        if (nums[i] > 0) {
            break;
        }
        // 重复的项跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let middle = i + 1;
        let last = length - 1;
        // 双指针，两边往中间夹
        while (middle < last && nums[last] >= 0) {
            // 重复的项跳过
            if (middle > i + 1 && nums[middle] === nums[middle - 1]) {
                middle++;
                continue;
            }
            if (last < length - 1 && nums[last] === nums[last + 1]) {
                last--;
                continue;
            }
            const sum = nums[i] + nums[middle] + nums[last];
            if (sum < 0) {
                middle++;
            } else if (sum === 0) {
                result.push([nums[i], nums[middle], nums[last]]);
                middle++;
            } else {
                last--;
            }
        }
    }
    return result;
};
```

