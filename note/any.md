# 任意值
> 任意值（Any）用来表示允许赋值为任意类型。

## 什么是任意值类型
如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```
let num: number = 1
num = 'number'
// 报错哦
```

当它是 any 类型的值时，是可以改变其类型的

```
let anything: any = 'apple'
anything = 10
// 这样做就跟写普通的 js 没有任何区别了，相当于不做类型判断
```

## 任意值的属性和方法
在任意值上访问任何属性都是允许的:

```
let anything: any = 'hello world'
console.log(anything.hello)
// 可以访问任意值的任何属性，即使该属性不存在，返回 undefined
```

同理，也可以访问任意值的任何方法，编译不会报错，但是执行编译后的 js 文件会报错，返回方法不存在

## 未声明类型的变量
> 变量如果在声明的时候，未指定其类型，也未给它赋值，那么它会被识别为任意值类型：

```
let something
something = 1
something = '2'
```

相当于:

```
let something: any
something = 1
something = '2'
```

不指定类型就跟原始的 js 写法没有任何区别