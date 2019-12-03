# 简介

## 什么是 TypeScript

**官网定义**
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.
翻译：TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。

### TypeScript 的优势
* TypeScript 增加了代码的可读性和可维护性
* TypeScript 非常包容
* TypeScript 拥有活跃的社区

### TypeScript 的缺点
* 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
* 短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
* 集成到构建流程需要一些工作量
* 可能和一些库结合的不是很完美（已经有很大的改善，vue 3.0基于TypeScript）

## 安装&&使用

### 安装

```
npm install typescript -g
```

### 使用
* 文件命名为 .ts
* ts 文件转译 js 文件 -- 执行命令 tsc xxx.ts


## 第一个 TypeScript 程序 -- hello TypeScript

```
function sayHello(name: string) {
  return `hello,${name}`
}

let user = 'TypeScript'

console.log(sayHello(name))

/**
 * 形参后面加冒号:后面接预期的类型，如果传参不是该类型，则编译直接不通过
 */
```

* 现在执行 tsc .ts，会编译生成 .js，生成过后的js文件看起来跟js代码没任何区别；
* 但是有了类型判断之后，大多数不合理的问题会在编译时直接报错；
* TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。

```
function sayHello(name) {
    return "hello," + name;
}
var user = 'TypeScript';
console.log(sayHello(name));
```

当给一个带有类型检查的函数传入一个不符合预期的实参，会编译报错，但是依然会生成可用的js文件；
可通过配置设置编译不通过时不生成js文件

```
function sayHello(name: string) {
  return `hello,${name}`
}

let user = true

console.log(sayHello(user))
```