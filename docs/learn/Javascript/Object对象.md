# Object对象

---

### 一、创建对象

#### 1、字面量

* var obj = {};

```js
var obj = {
  name: "xincheng",
  age: 18,
  gender: "男",
  nver: { name: "xiaolan", age: 8 }
};
```

#### 2、构造函数

* var obj1 =  <code>new Object()</code>;  &nbsp;&nbsp;&nbsp;&nbsp;创建一个空对象{}

```js
var obj1 = new Object({name: "jiang", age: 20}); // 创建对象时，并对元素进行赋值
```

#### 3、对象方法创建对象

<code>Object.create(<font color="#fd971f">proto</font>)</code>  &nbsp;&nbsp;&nbsp;&nbsp;创建一个新对象，使用现有的对象（proto）来作为新创建对象的原型（prototype）

```js
let obj1 = Object.create(obj);
// 即：obj1.__proto__ = obj

// 以字面量方式创建的空对象就相当于:
let obj2 = Object.create(Object.prototype); // 即：let obj2 = {}

Object.create(null); // 创建的对象，[[Prototype]]属性为null
```

### 二、操作对象

#### 1、使用对象的某个属性

1. <font color="#46acc8">obj.具体的值</font>
2. obj["具体的值"]
3. obj[变量]

```js
let str = "name";
obj.name; // "xincheng"
obj["name"]; // "xincheng"
obj[str]; // "xincheng"
```

#### 2、属性名

```js
let per = "sex";
let obj1 = { per: "鑫成" }  // 此处属性名是 per
let obj2 = { [per]: "男" }  // 此处属性名是 sex
// 即: obj2 = { sex: "男" }
```

#### 3、删除属性

<code>delete</code>

```js
delete obj.name;
或
delete obj["name"];
```

### 三、对象方法

#### 1、合并对象

<code>Object.assign()</code>

* 将每个源对象中可枚举（Object.propertyIsEnumerable()返回 true）和自有（Object.hasOwnProperty()返回 true）属性复制到目标对象
* 以字符串和符号为键的属性会被复制
* 对每个符合条件的属性，这个方法会使用源对象上的[[Get]]取得属性的值，然后使用目标对象上的[[Set]]设置属性的值
* 对每个源对象执行的是浅复制。如果多个源对象都有相同的属性，则使用最后一个复制的值

```js
Object.assign(obj1,obj2,...objN); // 合并对象到obj1，返回obj1
```

#### 2、遍历对象

<code>for ... in</code>

```js
for(let key in obj){ obj[key] }
```

#### 3、拷贝对象

1. **浅拷贝**：里面引用类型的值指向的是同一个地址，一个改变，另一个也跟着改变

```js
// 第一种方法
Object.assign(newObj,obj);
// 第二种方法
for(var key in obj){ newObj[key] = obj[key] }
// 第三种 ( es6 )
let newObj = { ...obj }
```

2. **深拷贝**：指向各自的地址，互不干扰

```js
var newObj = JSON.parse(JSON.stringify(obj));

// jq中的方法
let newObj = $.extend(true, {}, obj);
```

3. 赋值、浅拷贝、深拷贝 比较

|--|和原数据是否指向同一对象|第一层数据为基本数据类型|原数据中包含子对象|
|------|------|-------|------|
|赋值|是|改变**会**使原数据一同改变|改变**会**使原数据一同改变|
|浅拷贝|否|改变**不会**使原数据一同改变|改变**会**使原数据一同改变|
|深拷贝|否|改变**不会**使原数据一同改变|改变**不会**使原数据一同改变|

#### 4、判断对象是否拥有某属性

1. <code>obj.hasOwnProperty(“属性”)</code> &nbsp;&nbsp;&nbsp;只有属性在实例对象中才返回 true，在原型对象中返回 false

```js
obj.hasOwnProperty("name");  // true
```

2. <code>“属性” in obj</code> &nbsp;&nbsp;&nbsp;判断属性在实例或者原型中返回 true

```js
// 无论该属性存在于实例中还是原型中
"name" in obj  // true
```

#### 5、获取对象属性

1. <code>for...in</code>   只获取到可枚举的属性
2. <code>Object.getOwnPropertyNames(对象)</code> 获取所有属性的名称（包含不能枚举的属性）
3. <code>Object.keys(对象)</code> 返回一个包含对象可枚举属性和方法的数组

```js
// 传入对象， 返回 包含对象可枚举属性和方法的数组
let obj = {name: '江', age: 18};
Object.keys(obj);     // ["name", "age"]

// 传入字符串，返回索引值
let str = "jiang";
Object.keys(str);     // ["0", "1", "2", "3", "4"]

// 传入数组，返回索引值
let arr = ["江", true, 9, "abc"];
Object.keys(arr);     // ["0", "1", "2", "3"]
```

#### 6、冻结对象

1. <code>Object.freeze(obj)</code>    返回被冻结的对象
2. <code>Object.isFrozen()</code>     判断一个对象是否被冻结
    * 一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。
