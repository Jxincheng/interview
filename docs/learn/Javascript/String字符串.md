# String字符串

---

### 一、创建字符串

#### 1、字面量

* var str = "";

```js
var str1 = "xincheng 今天又是 愉快的一天";
typeof str1; // 'string'
```

#### 2、构造函数

* var str = <code>new String()</code>;

```js
var str2 = new String("字符串");
typeof str2; // 'object'
```

### 二、操作字符串

#### 1、通过索引获取字符串的某个字符

1. <code>str[索引值]</code>
2. <code>str.charAt(索引值)</code>

#### 2、通过某个字符获取索引

1. <code>indexOf("字符"[, startIdx])</code>   （不支持正则）
2. <code>search("字符")</code>   （支持正则）
3. <code>match("字符")</code>    返回一个数组（支持正则）

#### 3、字符串的长度

```js
let text = "hello world";
conosle.log(text.length); // 11
```

### 三、字符串方法

#### 1、将字符串分割成数组

<code>str.split(分割字符)</code>  根据分割字符，把字符串分割成数组（原字符串不会改变）

```js
'string'.split();  // ['string']
'string'.split(''); // ['s', 't', 'r', 'i', 'n', 'g']
```

#### 2、拼接字符串

<code>str.concat(str1,str2,...strN)</code>  返回拼接后的字符串（原字符串不会改变）

#### 3、替换字符

<code>str.replace(被替换的字符, 字符)</code>  返回新的字符串（原字符串不会改变）

```js
let str = "jiangxincheng";
str.replace("g","b");   // "jianbxincheng"
```

#### 4、截取字符串

1. <code>str.slice(start[, end])</code>  字符串从索引start截取到end，返回新字符串（原字符串不会改变）
2. <code>str.substr(start, length)</code>  返回字符串从索引start开始截取长度为length的新字符串（原字符串不会改变）
3. <code>str.substring(start[, end])</code>  返回截取的字符串（原字符串不会改变）

#### 5、删除字符串前后空格

<code>str.trim()</code> 删除前后所有空格，返回新字符串（原字符串不会改变）

* trimLeft()
* trimRight()

```js
" jiang  ".trim();  // "jiang"
```

#### 6、转换成大、小写

1. <code>str.toUpperCase()</code>  转换成大写

```js
"jiang".toUpperCase(); // "JIANG"
```

2. <code>str.toLowerCase()</code>  转换成小写

#### 7、判断字符串是否存在某个字符

1. <code>str.includes("字符")</code>  判断字符串是否存在某个字符,若存在返回 true（es6）
2. <code>str.indexof("字符"[, startIdx])</code>  通过某个字符获取索引，若为 -1，则不存在该字符

#### 8、是否以某一字符或字符串开头、结尾

1. <code>str.startsWith()</code>  开头（es6）
2. <code>str.endsWith()</code>  结尾（es6）

```js
"jiang".startsWith("j");  // true
"jiang".endsWith("g");  // true
```

#### 9、重复字符串

<code>str.repeat(n)</code>  得到字符串重复n次后的结果，n可以为小数，但不能为负数（原字符串不会改变）（es6）

#### 10、字符与字符编码的转换

1. <code>str.charCodeAt(idx)</code>   获取下标为idx的字符的编码
2. <code>String.fromCharCode(编码)</code>   编码转换成字符

#### 11、复制字符串

1. <code>padStart()</code>  使用指定字符串填充到目标字符串前面，使其达到目标长度
2. <code>padEnd()</code>  使用指定字符串填充到目标字符串后面，使其达到目标长度

* 如果小于指定长度，则在相应一边填充字符，直至满足长度条件
* 第一个参数是长度
* 第二个参数是可选的填充字符串，默认为空格

```js
let str = "foo";
str.padStart(6);  //  "   foo"
str.padStart(9, ".");  //  "......foo"
str.padEnd(6);  //  "foo   "
str.padEnd(9, ".");  //  "foo......"
```
