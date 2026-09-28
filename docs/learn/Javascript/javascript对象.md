# javascript对象

---

### 一、对象的说明

JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...

此外，JavaScript 允许自定义对象。

* JavaScript 提供多个内建对象，比如 String、Number、Date、Array等等。

!> 对象只是带有属性和方法的特殊数据类型

### 二、属性特性

#### 1、数据属性

数据属性包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置

1. <code>[[Configurable]]</code>  表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。（可配置性）
2. <code>[[Enumerable]]</code>  表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。（可枚举性)
3. <code>[[Writable]]</code>  表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。(可写性)
4. <code>[[Value]]</code>  包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为 undefined。

!> 一个属性被定义为不可配置之后，就不能再变回可配置的了。再次调用 Object.defineProperty()并修改任何非 writable 属性会导致错误

```js
let person = {};
Object.defineProperty(person, "name", { configurable: false, value: "Nicholas" });
// 抛出错误
Object.defineProperty(person, "name", { configurable: true, value: "Nicholas" }); 
```

#### 2、访问器属性

访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。

1. <code>[[Configurable]]</code>  表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。
2. <code>[[Enumerable]]</code>  表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true。
3. <code>[[Get]]</code>  获取函数，在读取属性时调用。默认值为 undefined。
4. <code>[[Set]]</code>  设置函数，在写入属性时调用。默认值为 undefined。

### 三、操作属性及属性特性的方法

1. <code>Object.defineProperty(obj, property, descriptor)</code>  给对象的某个属性设置属性特性

* 默认情况下，以上的属性特性都为false（除了value为具体的值）
* <code>Object.defineProperties()</code>   定义多个属性

```js
let book = { year_: 2017, edition: 1  };
Object.defineProperty(book, 'year_', { writable: false }); // 设置 year_ 属性只读
Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
}); 
book.year = 2018;
console.log(book.edition); // 2
```

2. <code>Object.getOwnPropertyDescriptor(object, propertyname)</code> 获取属性特性

* <code>Object.getOwnPropertyDescriptors(object)</code>

```js
let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
console.log(descriptor.value); // 2017
console.log(descriptor.configurable); // false 

console.log(Object.getOwnPropertyDescriptors(book));
/* {
        year_: {
            configurable: false,
            enumerable: false,
            value: 2017,
            writable: false
        },
        edition: {
            configurable: false,
            enumerable: false,
            value: 1,
            writable: false
        }
    } */
```

3. <code>Object.preventExtensions()</code>  让一个对象变的不可扩展，也就是永远不能再添加新的属性（返回值为已经不可扩展的对象）

4. <code>Object.isExtensible()</code> 判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）

```js
let empty = {};
Object.isExtensible(empty);  // true
```

### 四、对象标识及相等判定

<code>Object.is(val1, val2)</code>  判断两个值是否为同一个值

满足以下条件则两个值相等：

* 都是 undefined
* 都是 null
* 都是 true 或 false
* 都是相同长度的字符串且相同字符按相同顺序排列
* 都是相同对象（意味着每个对象有同一个引用）
* 都是数字且
  * 都是 +0
  * 都是 -0
  * 都是 NaN
  * 或都是非零而且非 NaN 且为同一个值

```js
Object.is(true, 1); // false
Object.is({}, {}); // false
Object.is("2", 2); // false 

// 正确的 0、-0、+0 相等/不等判定
Object.is(+0, -0); // false
Object.is(+0, 0); // true
Object.is(-0, 0); // false

// 正确的 NaN 相等判定
Object.is(NaN, NaN); // true
```

### 五、对象通用的属性和方法

#### 5.1、属性

<code>constructor</code>  &nbsp;&nbsp;&nbsp;&nbsp;引用了初始化这个对象的构造函数（不可靠，尽量避免使用）

```js
let str = new String('xincheng');
str.constructor == String;    // true
```

#### 5.2、方法

5.2.1. <code>hasOwnProperty()</code>&nbsp;&nbsp;&nbsp;&nbsp;判断对象用一个单独的字符串参数所指定的名字来本地定义一个非继承的属性（只有属性存在于实例上时才返回 true）

```js
let obj = { name: 'jiang' }
obj.hasOwnProperty('name');  // true
```

5.2.2. <code>isPrototypeOf()</code>&nbsp;&nbsp;&nbsp;&nbsp;判断该对象是否出现在另一个对象的原型链中

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
    * Array、function等具体类型作为Object的实例，都重写了toString方法
    * null 和 undefined 没有 toString()方法

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
