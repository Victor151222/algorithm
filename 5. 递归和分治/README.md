递归和分治算是算法的开章。递归很多时候是实现其他高级算法的基础，比如深度优先算法等。

# 递归（Recursion）

递归-循环

通过函数体来进行的循环

## 递归模板

```python
def recurison(level, param1, param2, ...):

    # 终止条件
    if level > MAX_LEVEL:
        print_result
        return
    
    # 当前层级的逻辑操作
    process_data(level, data...)

    # 调用下一层
    recurison(level + 1, p1, ...)

    # 调用下一层完成后的操作（非必须）
    reverse_state(level)
```

## 例1：计算 n!

n! = 1*2*3*...*n

```python
def Factorial(n):
    if n <= 1:
        return 1
    return n * Factorial(n -1)
```

## 例2：Fibonacci array：1，1，2，3，5，8，13，21，34，...

F(n) = F(n-1) + F(n-2)

```python
def fib(n):
    if n == 0 or n == 1:
        return n
    return fib(n -1) + fib(n - 2)
```

# 分治-Divide & Conquer

分治一般都是用递归来进行处理的

```python
def divide_conquer(problem, param1, param2, ...):

    # 终止条件
    if problem is None:
        print_result
        return
    
    # 准备数据
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)

    # 处理子问题
    subresult1 = divide_conquer(subproblems[0], p1, ...)
    subresult2 = divide_conquer(subproblems[1], p1, ...)
    subresult3 = divide_conquer(subproblems[2], p1, ...)

    # 合并子结果，生成最终结果
    result = process_result(subresult1, subresult2, subresult2, ...)
```
