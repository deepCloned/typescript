# 基础

## 原始数据类型
>JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol。

## TypeScript 中的原始数据类型

### 布尔值（boolean）
```
let flag: boolean = true
```

**boolean && Boolean 对象**
通过 Bollean 构造函数生成的值不是布尔值，而是布尔对象，属于对象类型

```
let isBoolean: boolean = new Boolean(1)
// 此时编译会报错
```

Type 'Boolean' is not assignable to type 'boolean'.
'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
此时该值是一个包装对象，而不是原始的布尔类型

*注：直接调用 Boolean() 可以返回原始布尔值*

### 数值 -- 使用 number 定义数值类型：
>2进制 8进制的数字都是数值，NaN Infinity 也是数值

```
let notNumber: number = NaN
// 如何判断非数
```

### 字符串 -- 使用 string 定义字符串类型

```
let name: string = 'Tom'
console.log(`hello, ${Tom}`)
```

### 空值 -- JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
:void 写在函数括号的后面

```
function getNull():void {
  console.log('not null')
}

getNull()
```

*声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null*

```
let unusable: void = undefined || null
```

### Null 和 Undefined -- 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
```
let u: undefined = undefined
let n: null = null
```

与void的区别：undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
也就是说，undefined 和 null 可以赋值给任意类型的变量

```
let n: number = undefined

let s: string = null

console.log(n, s)
```