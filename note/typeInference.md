# 类型推断
> 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

## 什么是类型推论
> 在一个变量声明的时候没有指定类型，而是直接赋值，那么类型推断机制会为他指定第一次赋值时的类型，如果后面改动了不是第一次赋值的类型，编译会报错。

```
let number = 1
number = 'string'
```

等价于

```
let number: number = 1
number = 'string'
```