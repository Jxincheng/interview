# javascript语法

---

### 一、数据类型

#### 1、基本数据类型（转递的是值）

1. <code>Number</code> 数字类型，值：纯数字
    * NaN，即非数值，是一个特殊的数值（与任何值都不相等，包括 NaN 本身）
    * <font color="#db7d27">isNaN()</font>  判断是否是 NaN
2. <code>String</code> 字符串类型，有引号的值都是字符串类型
    * 若字符串引号嵌套引号，可能会发生报错（SyntaxError语法错误），解决方法如下：
        * (1) 将外层引号修改成不同的
        * (2) 通过转义字符 \

```js
var uname1 = "my name's lemon";
var uname2 = 'my name\'s lemon';
```

3. <code>Boolean</code> 布尔类型，只有两个值，true、false
4. <code>Null</code> 唯一的值是null，空对象
    * 从逻辑角度来看，null 值表示一个空对象指针（null 被认为是一个空的对象的引用）

```js
typeof null;  // "object"
```

5. <code>Undefined</code>，唯一的值是undefined，代表变量声明后但未赋值
    * 区分报错 not defined，代表变量未声明，即不存在

```js
typeof undefined;  // "undefined"
null == undefined;  // true
```

#### 2、引用数据类型

1. Object 对象类型
2. Array 数组类型

!> 引用数据类型，值是保存在内存中的对象（值是按引用访问的）；JavaScript不允许直接访问内存中的位置，即不能直接操作对象的内存空间。操作对象，实际在操作对象的引用而不是实际的对象

### 二、数据类型的判断

1. <code>typeof</code>  返回一个字符串，表示未经计算的操作数的类型

```js
typeof NaN;    // "number"
或 typeof(NaN);  // "number"
typeof(123);  // "number"
typeof("123");  // "string"
typeof(true);  // "boolean" 
typeof(null);  // "object"   
typeof undefined;  // "undefined"
```

2. <code>instanceof</code>  用来检测构造函数的prototype属性是否出现在某个实例对象的原型链上
    * 在变量是引用类型和 Object 构造函数时，始终返回 true

```js
let obj = {}, arr = [];
obj instanceof Object;  // true
arr instanceof Array;  // true
arr instanceof Object; // true

Object instanceof Function;   // true
Function instanceof Object;   // true
Object instanceof Object;   // true
Function instanceof Function;  // true 
```

3. <code>Object.prototype.toString.call()</code>

```js
Object.prototype.toString.call(123);  // '[object Number]'
Object.prototype.toString.call('str');  // '[object String]'
Object.prototype.toString.call(true);  // '[object Boolean]'
Object.prototype.toString.call(null);  // '[object Null]'
Object.prototype.toString.call(undefined);  // '[object Undefined]'
Object.prototype.toString.call([]);  // '[object Array]'
Object.prototype.toString.call({});  // '[object Object]'
Object.prototype.toString.call(function(){});  // '[object Function]'
```

### 三、数据类型的转换

1. <code>Number()</code>  转成数字
    * true 转成 1， false 转成 0
    * null 转成 0
    * undefined 转成 NaN
2. <code>String()</code>  转成字符串

```js
String(true);  // "true"
String(null);  // "null"
String(undefined);  // "undefined"
```

3. <code>Boolean()</code>  转成布尔值
    * 非零数字 转成 true， 0 和 NaN 转成 false
    * 非空字符串 转成 true

```js
Boolean("");  // false
Boolean({});  // true 
Boolean(null);  // false
Boolean(undefined);  // false
```

### 四、进制转换

1. 十进制转多进制  number.toString(n)
    * number需要转换的数字，n转换成几进制
2. 多进制转十进制  parseInt("",n)

```js
var a = 901;  //十进制，取值0-9
var b = "0b0101001";  //二进制0b开头,取值0-1
var c = "0o071234";  //八进制0o开头，取值0-7
var d = "0x071ef4";  //十六进制0x开头，取值0-9、a-f
```
