# 对象的类型——接口
>在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

## 什么是接口？
>在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
>TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

/*接口就是描述对象的结构，定义键值的类型*/

## 如何定义和应用接口
* 定义接口以 interface 开头，后面接接口名，一般以大写字母开头(小写也不会报错，但是为了区分)
* 接口定义了对象的结构，包含什么属性，以及属性的值类型，在基于该接口的对象声明中，属性既不能多也不能少于接口的定义，属性类型也不能错

```
interface Person {
  name: string
  age: number
}

```

```
let monika: Person = {
  name: 'monika',
  age: 18,
}
```
可见，赋值的时候，变量的形状必须和接口的形状保持一致。

## 可选属性
>同函数一样，为了增强接口的可复用性，可以设置一些可选属性，属性前面加上 ? ,表示可选属性

```
interface Person {
  name: string
  age?: number
}

let monika: Person = {
  name: 'monika',
}
```

/*此时，仍然不可以添加接口中未定义的属性*/

## 任意属性
>前面我们定义接口的时候，写死了属性名，其实是可以后期定义的，只要值类型相同即可

使用 [propName: string] 定义了任意属性取 string 类型的值，完整 [propName: string]: type(类型)

### 值得注意的是：
* 只要在接口中定义了任意属性，那么只要属性值是对的，属性可以随意增加多个
* 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集

```
interface Person {
  name: string
  age: number
  [prop: string]: string
}

let monika: Person = {
  name: 'monika',
  age: 18,
}
```

此时任意属性的类型是 string, 而确定属性 age 的类型是 number,就会报错，因为 number 不是 string 的子类型

## 只读属性
>有时候我们希望一个属性只能在定义的时候赋值，后期不能改变，就要用到 readonly 写在接口定义属性的前面

```
interface Person {
  readonly name: string,
  age: number
}

let monika: Person = {
  name: 'monika',
  age: 18
}
monika.name = 'tom'
```
此时会报错，name 是只读属性，不能赋值

/*注：第一次给对象赋值的时候是不受影响的，后期通过 obj.xxx = xxx 的方式赋值会受到约束*/
