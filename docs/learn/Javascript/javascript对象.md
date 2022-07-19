# javascript对象

---

### 一、对象的说明

JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...

此外，JavaScript 允许自定义对象。

* JavaScript 提供多个内建对象，比如 String、Number、Date、Array等等。

!> 对象只是带有属性和方法的特殊数据类型

### 二、对象通用的属性和方法

#### 1、属性

<code>constructor</code>  &nbsp;&nbsp;&nbsp;&nbsp;引用了初始化这个对象的构造函数（不可靠，尽量避免使用）

```js
let str = new String('xincheng');
str.constructor == String;    // true
```

#### 2、方法

1. <code>hasOwnProperty()</code>&nbsp;&nbsp;&nbsp;&nbsp;判断对象用一个单独的字符串参数所指定的名字来本地定义一个非继承的属性

```js
let obj = { name: 'jiang' }
obj.hasOwnProperty('name');  // true
```

2. <code>isPrototypeOf()</code>&nbsp;&nbsp;&nbsp;&nbsp;判断该对象是否出现在另一个对象的原型链中

```js
a.isPrototypeOf(b);   a是否出现在b的原型链中
let demo1 = new Demo();
Demo.prototype.isPrototypeOf(demo1);  // true
```

3. <code>propertyIsEnumerable()</code>&nbsp;&nbsp;&nbsp;&nbsp;判断对象用一个单独的字符串参数所指定的名字来本地定义一个非继承的属性，并且这个属性可以被 for/in 枚举

```js
obj.propertyIsEnumerable('name');  // true
obj.propertyIsEnumerable('age');   // false
```

4. <code>toLocaleString()</code>&nbsp;&nbsp;&nbsp;&nbsp;返回本地化字符串，一般会和 toString() 相同

5. <code>toString()</code>&nbsp;&nbsp;&nbsp;&nbsp;把对象转换成字符串；很多类有自己的toString函数，比如，当一个函数转换成字符串时会显示函数的源代码

```js
let num = 123, str = "江", obj = {name: "鑫成"}, boo = true;
let arr = [1,'xincheng',true,{age: 20},[1,2]];
num.toString();   // "123"
str.toString();   // "江"
obj.toString();   // "[object Object]"
boo.toString();   // "true"
arr.toString();   // "1,xincheng,true,[object Object],1,2"
```

6. <code>valueOf()</code>&nbsp;&nbsp;&nbsp;&nbsp;返回指定对象的原始值

| 对象 | 返回值 |
|------|------|
|Array|数组实例对象|
|Boolean|布尔值|
|Date|以毫秒数存储的时间值，从 UTC 1970 年 1 月 1 日午夜开始计算|
|Function|函数本身|
|Number|数字值|
|Object|对象本身（这是默认设置）|
|String|字符串值|

```js
let arr = [1, 2, 3, 4, 5];
arr.valueOf(); // [1, 2, 3, 4, 5]

let boo = true;
boo.valueOf(); // true

let date = new Date('2022-7-19 11:37:50');
date.valueOf(); // 1658201870000

function foo() { }
foo.valueOf(); // ƒ foo() { }

let num = 12.345;
num.valueOf(); // 12.345

let obj = { name: 'jiang' };
obj.valueOf(); // {name: 'jiang'}

let str = 'xincheng';
str.valueOf(); // 'xincheng'
```

* 详情请查看 https://blog.csdn.net/qq_28949081/article/details/78183856
