# Event loop

---

### 一、事件

JavaScript 与 HTML 的交互是通过事件实现的

#### 1、鼠标事件

| 事件 | 描述 |
| --- | --- |
| <code>onclick</code> | 当用户点击某个对象时调用的事件 |
| <code>ondblclick</code> | 当用户双击某个对象时调用的事件 |
| <code>onmousedown</code> | 鼠标按钮被按下 |
| <code>onmouseup</code> | 鼠标按键被松开 |
| <code>onmouseover</code> | 鼠标移到某元素之上 |
| <code>onmouseout</code> | 鼠标从某元素移开 |
| <code>onmousemove</code> | 鼠标被移动时触发 |
| <code>onmouseenter</code> | 在鼠标光标从元素外部移动到元素范围之内时触发（这个事件不冒泡） |
| <code>onmouseleave</code> | 在位于元素上方的鼠标光标移动到元素范围之外时触发（这个事件不冒泡） |
| <code>onmousewheel</code> | 使用鼠标滚轮时触发 |
| <code>oncontextmenu</code> | 鼠标右键菜单展开时触发 |

* onclick = onmousedown + onmouseup
* ondblclick = onclick * 2

<!-- <code>onclick</code>  &nbsp;&nbsp;&nbsp;&nbsp;当用户点击某个对象时调用的事件

* onclick = onmousedown + onmouseup

<code>ondblclick</code>  &nbsp;&nbsp;&nbsp;&nbsp;当用户双击某个对象时调用的事件

* ondblclick = onclick * 2

<code>onmousedown</code>  &nbsp;&nbsp;&nbsp;&nbsp;鼠标按钮被按下

<code>onmouseup</code>  &nbsp;&nbsp;&nbsp;&nbsp;鼠标按键被松开

<code>onmouseover</code>  &nbsp;&nbsp;&nbsp;&nbsp;鼠标移到某元素之上

<code>onmouseout</code>  &nbsp;&nbsp;&nbsp;&nbsp;鼠标从某元素移开

<code>onmousemove</code>  &nbsp;&nbsp;&nbsp;&nbsp;鼠标被移动时触发

<code>onmouseenter</code>  &nbsp;&nbsp;&nbsp;&nbsp;在鼠标光标从元素外部移动到元素范围之内时触发（这个事件不冒泡）

<code>onmouseleave</code>  &nbsp;&nbsp;&nbsp;&nbsp;在位于元素上方的鼠标光标移动到元素范围之外时触发（这个事件不冒泡）

<code>oncontextmenu</code>  &nbsp;&nbsp;&nbsp;&nbsp;鼠标右键菜单展开时触发 -->

#### 2、键盘事件

|事件|描述|
|---|---|
| <code>onkeydown</code> | 某个键盘按键被按下 |
| <code>onkeyup</code>  | 某个键盘按键被松开 |
| <code>onkeypress</code>  | 键盘<字符键>被按下触发，而且如果按住不放的话，会重复触发此事件 |

<!-- <code>onkeydown</code>  &nbsp;&nbsp;&nbsp;&nbsp;某个键盘按键被按下

<code>onkeyup</code>  &nbsp;&nbsp;&nbsp;&nbsp;某个键盘按键被松开

<code>onkeypress</code>  &nbsp;&nbsp;&nbsp;&nbsp;键盘<字符键>被按下触发，而且如果按住不放的话，会重复触发此事件 -->

* (字母、数字、空格、标点符号、换行)

#### 3、UI事件

|事件|描述|
|---|---|
| <code>onload</code> | 页面元素（包括图片多媒体等）加载完成后 |
| <code>onscroll</code>  | 滚动时触发 |
| <code>onresize</code>  | 窗口或框架被重新调整大小 |

<!-- <code>onload</code>  &nbsp;&nbsp;&nbsp;&nbsp;页面元素（包括图片多媒体等）加载完成后

<code>onscroll</code>  &nbsp;&nbsp;&nbsp;&nbsp;滚动时触发

<code>onresize</code>  &nbsp;&nbsp;&nbsp;&nbsp;窗口或框架被重新调整大小 -->

#### 4、表单事件

|事件|描述|
|---|---|
| <code>onselect</code> | 输入框文本被选中 |
| <code>onblur</code>  | 元素失去焦点时触发（这个事件不冒泡） |
| <code>onfocus</code>  | 元素获得焦点时触发（这个事件不冒泡） |
| <code>onchange</code>  | 元素内容被改变，且失去焦点时触发 |
| <code>onreset</code>  | 重置按钮被点击 |
| <code>onsubmit</code>  | 确认按钮被点击 |
| <code>oninput</code>  | 输入字符时触发 |

<!-- <code>onselect</code>  &nbsp;&nbsp;&nbsp;&nbsp;输入框文本被选中

<code>onblur</code>  &nbsp;&nbsp;&nbsp;&nbsp;元素失去焦点时触发

<code>onfocus</code>  &nbsp;&nbsp;&nbsp;&nbsp;元素获得焦点时触发

<code>onchange</code>  &nbsp;&nbsp;&nbsp;&nbsp;元素内容被改变，且失去焦点时触发

<code>onreset</code>  &nbsp;&nbsp;&nbsp;&nbsp;重置按钮被点击

<code>onsubmit</code>  &nbsp;&nbsp;&nbsp;&nbsp;确认按钮被点击

<code>oninput</code>  &nbsp;&nbsp;&nbsp;&nbsp;输入字符时触发 -->

#### HTML5事件

| 事件 | 描述 |
| --- | --- |
| <code>contextmenu</code> | 鼠标右键菜单展开时触发 |
| <code>DOMContentLoaded</code> | 在 DOM 树构建完成后立即触发 |
| <code>hashchange</code> | 在 URL 散列值（URL 最后#后面的部分）发生变化时 |

### 二、Event对象

监听事件执行过程中的状态，用来保存当前事件的信息对象

```js
e = e || window.event;
```

#### 1、event对象的鼠标属性

1. button 返回当事件被触发时，哪个鼠标按钮被点击。
    * 0-1-2
      * W3C标准
        * 0: 代表鼠标按下了左键
        * 1: 代表按下了滚轮
        * 2: 代表按下了右键
      * IE8-（IE8以下的浏览器）
        * 1鼠标左键， 2鼠标右键， 3左右同时按， 4滚轮， 5左键加滚轮， 6右键加滚轮， 7三个同时
2. 光标相关的属性
    * <code>clientX /clientY</code>  光标相对于浏览器可视区域的位置，也就是浏览器坐标。
    * <code>screenX/screenY</code>  光标指针相对于电脑屏幕的水平/垂直坐标。
    * <code>pageX/pageY</code>  鼠标相对于文档的位置。
        * 包括滚动条滚动的距离，即：e.pageX = e.clientX + window.scrollX
        * 在页面没有滚动时，pageX 和 pageY 与 clientX 和 clientY 的值相同
        * IE8-不支持
    * <code>offsetX,offsetY</code>  光标相对于事件源对象的相对偏移量。
        * 事件源对象：触发事件的对象

#### 2、event对象的键盘属性

1. <code>which</code> 返回当事件被触发时，哪个键盘按键被点击。
    * 兼容性  <font color="#c76a15">var keyCode = e.which || e.keyCode</font>;
        * 对于keydown和keyup事件，它指定了被敲击的键的虚拟键盘码。
        * 对于keypress事件，该属性声明了被敲击的键生成的 Unicode 字符码(ascii码)
        * 左 37 ， 上 38 ， 右 39 ， 下 40
2. <code>ctrlKey</code> 判断有没有按下ctrl键，返回布尔值
3. <code>altKey</code> 判断有没有按下alt键，返回布尔值
4. <code>shiftlKey</code> 判断有没有按下shift键，返回布尔值

### 三、事件冒泡

#### 1、概念

对象上触发某类事件，那么事件就会沿着DOM树向父级传播，从里到外，直至它被处理程序处理，或者事件到达了最顶层（document/window）（从下往上）

#### 2、阻止冒泡

<code>e.stopPropagation()</code>

```js
// 兼容写法：
e.stopPropagation? e.stopPropagation() : e.cancelBubble = true;
```

### 四、事件委托

#### 1、概念

利用冒泡原理，将自己的执行函数委托给父元素进行执行

#### 2、影响程序执行效率的操作

* (1) 绑定过多事件
* (2) 频繁操作dom节点
* (3) 请求次数

#### 3、事件源对象

触发事件的元素（在事件传播中不会改变）

* 标准属性：<code>target</code>
* IE8-属性：srcElement

```js
// 兼容写法：
var target = e.target || e.srcElement;
```

### 五、事件捕获

#### 1、事件的绑定方式

1. DOM节点绑定 <code>ele.on + type = fn</code>
    * 无法设置捕获阶段
    * 同一节点的同一事件会被覆盖
2. 作为html属性
3. 事件监听器
    * 可以设置捕获阶段
    * 可以给同一节点设置多个同一事件
    * 标准： <code>ele.addEventListener(type, fn, isCapture)</code>
        * type 事件类型
        * fn 事件处理函数
        * isCapture true表示在捕获阶段调用事件处理程序，默认为false表示在冒泡阶段调用事件处理程序。
    * ie: <code>ele.attachEvent(on+type, fn)</code>
        * ie不支持捕获阶段

```js
ele.onclick = function(e) {};
ele.addEventListener('click', function(e) {});
```

#### 2、事件操作

1. 事件冒泡
2. 事件捕获

!> 每个事件都只能在冒泡或捕获阶段执行一次；执行同一事件时，先捕获再冒泡。

#### 3、事件移除

1. dom节点  <code>ele.on + type = null</code>
2. 事件监听器
    * 标准：<code>ele.removeEventListener(type, fn)</code>
      * 移除事件时，type事件类型一致，fn是同一个函数，才可以移除。
    * ie: <code>ele.detachEvent(type, fn)</code>

```js
ele.onclick = null;
ele.removeEventListener('click', function(e) {})
```

### 六、阻止浏览器的默认行为

浏览器的默认行为：链接跳转，表单提交，右键菜单，文本的选择

* 标准：<code>e.preventDefault()</code>
* IE8-：<code>e.returnValue = false</code>
* 兼容写法：e.preventDefault? e.preventDefault() : e.returnValue=false;

### 七、事件循环

#### 1、步骤

1. Javascript的事件分为同步任务和异步任务
2. 遇到同步任务就放在执行栈中执行
3. 遇到异步任务就放到任务队列之中，等到执行栈执行完毕之后再去执行任务队列之中的事件

#### 2、同步任务和异步任务

Javascript单线程任务被分为同步任务和异步任务

* 同步任务会在调用栈中按照顺序等待主线程依次执行.
* 异步任务会甩给在WebAPIs处理，处理完后有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。

#### 3、宏任务（MacroTask）和 微任务（MicroTask）

在JavaScript中，任务被分为两种，一种宏任务（MacroTask）也叫Task，一种叫微任务（MicroTask）。

1. **宏任务**（MacroTask）
    * script(整体代码)、<strong><font color="#77c94b">setTimeout</font></strong>、<strong><font color="#77c94b">setInterval</font></strong>、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering
2. **微任务**（MicroTask）
    * Process.nextTick（Node独有）、<strong><font color="#c76a15">Promise</font></strong>、Object.observe(废弃)、MutationObserver（具体使用方式查看这里）
