# Number数字

---

### 一、创建数字

#### 1、字面量

* var num = 123;

#### 2、构造函数

* var num1 = <code>new Number()</code>;

```js
var num2 = new Number();  // Number {0}
typeof num2;  // 'object'
```

### 二、属性

1. <code>NaN</code>  非数字
2. <code>MAX_VALUE</code>  能表示的最大正数。最小的负数是 -MAX_VALUE
3. <code>MIN_VALUE</code>  能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE

### 三、方法

1. <code>Number.isNaN()</code>  判断是否是 NaN

```js
Number.isNaN();  // true
```

2. <code>Number.isInteger()</code>  判断是否为整数

```js
Number.isInteger(6/2);  // true
```

3. <code>Number.parseInt()</code>  把字符串解析成整数
    * 和全局的 parseInt() 函数具有一样的函数功能
    * Number.parseInt === parseInt;  // true

```js
parseInt("");  // NaN
parseInt("2.2aa");  // 2
parseInt("20a.2aa");  // 20
parseInt("10", 8);  // 8 （按八进制解析）
parseInt("11", 2);  // 3（按二进制解析）
```

4. <code>Number.parseFloat()</code>  方法可以把一个字符串解析成浮点数（法被解析成浮点数，则返回NaN）
    * 与全局的 parseFloat() 函数相同

### 四、原型方法

1. <code>num.toFixed(digits)</code>
    * digits 小数点后数字的个数，忽略该参数，则默认为 0。

```js
(12.345).toFixed(2);  // 12.34
```

2. <code>num.toString()</code>  返回字符串的表现形式

```js
(12).toString();  // '12'
(12.345).toString();  // '12.345'
```

3. <code>num.valueOf()</code>  返回原始值

```js
var numObj = new Number(10);
typeof numObj;  // object

var num = numObj.valueOf();
num;   // 10
typeof num;   // number
```
