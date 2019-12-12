# 联合类型
> 联合类型（Union Types）表示取值可以为多种类型中的一种。

联合类型使用 | 分隔每个类型。

```
let isNumOrStr: number | string;
isNumOrStr = true;
```
此时，isNumOrStr 可以赋值为 number 或 string 其中的一种，但不能赋值给其他类型（除了 undefined、null）

## 访问联合类型的属性或方法
> 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

```
let isNumOrStr: number | string;
console.log(isNumOrStr.length)
// 无法访问，因为 number 没有 length 属性
// 可以访问共有的方法，比如 toString
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
> 给联合类型赋值之后，该变量会被认为(推断为)是当前赋值的类型，此时可以访问该值的属性或方法