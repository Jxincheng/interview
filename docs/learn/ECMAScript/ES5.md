# ES5

---

### 一、页面加载事件

**页面加载顺序**

1. 解析HTML结构。
2. 加载外部脚本js和样式表文件。
3. 解析并执行脚本代码。
4. DOM树构建完成。
5. 加载图片、视频等外部文件。
6. 页面加载完毕。 window.onload

**事件**

1. <code>onreadystatechange</code> 当页面准备阶段改变时触发
    * <font color="#c76a15">readyState</font> 页面的准备阶段的状态
    * <font color="#c76a15">interactive</font> DOM树构建完成
    * <font color="#c76a15">complete</font> 页面加载完成,相当于window.onload，但比window.onload先执行
2. <code>DOMContentLoaded</code>（只能使用事件监听器）  当DOM树构建完毕

### 二、获取元素对象

1. <code>document.querySelector(css选择器)</code> 只能获取满足css选择器的第一个元素,返回dom节点对象

```js
var son1 = document.querySelector("#father .son1");
```

2. <code>document.querySelectorAll(css选择器)</code> 获取满足css选择器的所有元素,返回数组

### 三、操作类名

<code>classList</code>  类数组，包含了所有类名

* length : class类名的个数
* add() : 添加class方法
* remove() : 删除class方法
* toggle() : 切换class方法
* contains() : 是否含有某个类,返回布尔值

!> 相比于className：不改变页面原本的类名，给元素添加或删除某个新类名

### 四、data自定义属性

dataset  &nbsp;&nbsp;&nbsp;&nbsp;存放所有data自定义属性的对象（符合W3C标准自定义属性：data-*）

1. 获取
    * dataset.age;   获取 data-age 的属性值
    * dataset.firstName;   获取 data-first-name 的属性值
2. 设置
    * dataset.gender="boy";  设置 data 自定义属性，在html结构会多出[data-gender="boy"]

```html
<div id="box" data-name="laojiang" data-age="18" data-first-name="jiang"></div>
```

### 五、ES5的严格模式

除了正常模式，ES5添加了第二种运行模式：“严格模式(strict mode)”。顾名思义，这种模式使得javascript在更严格的条件下运行(更可靠，更安全)。目前，除了IE6-9，其它浏览器均已支持ES5严格模式。

**为什么要用严格模式**

* 消除javascript语法的一些不合理，不严谨的地方，减少一些怪异行为；
* 消除代码运行的一些不安全之处，保证代码运行的安全；
* 提高编译器效率，增加运行速度；
* 为未来新版本的javascript做好铺垫；

在头部写入 “use strict”

* 全局：针对整个js文件
  * 将”use strict”放在js文件的第一行
* 局部：针对单个函数
  * 将”use strict”放在函数体的第一行

**执行限制**

* 不使用var声明变量严格模式中将不通过
* 删除系统内置的属性会报错
* 不能删除var声明的全局变量（会自动成为window的属性）
* 对象有重名的属性将报错
  * var obj={ name: "小王", name: '王大锤' }
* 函数有重名的形参将报错
  * function sum(a,a,b){}
* arguments严格定义为参数（包含了实参的所有信息）
  * 不允许对arguments赋值
  * 禁止使用arguments.callee
* 函数必须声明在顶层，不能写在条件判断语句或for循环语句中
  * var arr = [10,2,3,50];
    if(arr.length>3){
    function sum(){//报错}
    }
