# Dom

---

### 一、获取元素

1. <code class="cn">document.getElementById()</code>&nbsp;&nbsp;&nbsp;&nbsp;  通过 id 获取元素，返回值为元素节点（对象）或者为null（空对象）
    * 必须通过document调用
    * 速度最快

2. <code>document.getElementsByClassName()</code>&nbsp;&nbsp;&nbsp;&nbsp; 通过类名获取元素,返回类数组，如果类名不存在返回空数组 []
    * 元素节点均可调用

3. <code>document.getElementsByTagName()</code>&nbsp;&nbsp;&nbsp;&nbsp; 通过标签名获取元素,返回类数组，如果类名不存在返回空数组 []
    * 元素节点均可调用

4. <code>document.getElementsByName()</code>&nbsp;&nbsp;&nbsp;&nbsp; 通过 name 获取元素,返回类数组，如果类名不存在返回空数组 []
    * 必须通过document调用

5. <code>querySelector()</code>  返回匹配的第一个后代元素，如果没有匹配项则返回 null
    * **querySelectorAll()**  返回所有匹配的节点
    * document 和 元素节点均可调用

```js
let body = document.querySelector("body");   // 取得<body>元素
let p = document.querySelector("body p");   // 取得<body>元素子元素中第一个<p>元素
let myDiv = document.querySelector("#myDiv");  // 取得 ID 为"myDiv"的元素
let selected = document.querySelector(".selected");  // 取得类名为"selected"的第一个元素
let img = document.body.querySelector("img.button");  // 取得类名为"button"的图片
```

6. <code>matches()</code>  如果元素匹配则该选择符返回 true，否则返回 false

```js
document.body.matches("body.page1");
document.querySelector("body div").matches('div#sizer');
```

!> **document.body** 属性指向文档的 body 元素；**document.head** 属性指向文档的 head 元素。

### 二、利用元素关系获取其他节点（包含元素节点、文本节点）

#### 1、文本节点

<div class="card mtb">
<h5>获取父节点</h5>

* <code>ele.parentNode</code>&nbsp;&nbsp;&nbsp;&nbsp;   得到节点的父节点

<h5>获取子节点</h5>

* <code>ele.childNodes</code>&nbsp;&nbsp;&nbsp;&nbsp;   得到 ele 元素的全部子节点列表（类数组）
* <code>ele.firstChild</code>&nbsp;&nbsp;&nbsp;&nbsp;   获得 ele 元素的第一个子节点
* <code>ele.lastChild</code>&nbsp;&nbsp;&nbsp;&nbsp;    获得 ele 元素的最后一个子节点  

<h5>获取兄弟节点</h5>

* <code>ele.nextSibling</code>&nbsp;&nbsp;&nbsp;&nbsp; 获得节点的下一个兄弟节点
* <code>ele.previousSibling</code>&nbsp;&nbsp;&nbsp;&nbsp; 得到节点的上一个兄弟节点

</div>

#### 2、元素节点

<div class="card mtb g5">
<h5>获取父元素节点</h5>

* <code>ele.parentElement</code>&nbsp;&nbsp;&nbsp;&nbsp; 得到父元素节点

<h5>获取子元素节点</h5>

* <code>ele.children</code>&nbsp;&nbsp;&nbsp;&nbsp; 获取到所有的子元素节点
* <code>ele.firstElementChild</code>&nbsp;&nbsp;&nbsp;&nbsp; 获得ele元素的第一个子元素节点
* <code>ele.lastElementChild</code>&nbsp;&nbsp;&nbsp;&nbsp; 获得ele元素的最后一个子元素节点

<h5>获取兄弟元素节点</h5>

* <code>ele.nextElementSibling</code>&nbsp;&nbsp;&nbsp;&nbsp; 获得节点的下一个兄弟元素
* <code>ele.PreviousElementSibling</code>&nbsp;&nbsp;&nbsp;&nbsp; 获得节点的上一个兄弟元素

</div>

### 三、节点的属性

<div class="fx">
<div>

##### 元素节点

| 属性 | 属性值 |
| ----| :---- |
| nodeType&nbsp;&nbsp;节点类型 | 1 |
| nodeName&nbsp;&nbsp;节点名称 | 标签名字大写 |
| nodeValue&nbsp;&nbsp;节点的值 | null |

</div>
<div>

##### 属性节点

| 属性 | 属性值 |
| ----| :---- |
| nodeType&nbsp;&nbsp;节点类型 | 2 |
| nodeName&nbsp;&nbsp;节点名称 | 属性名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| nodeValue&nbsp;&nbsp;节点的值 | 属性值 |

</div>
<div>

##### 文本节点

| 属性 | 属性值 |
| ----| :---- |
| nodeType&nbsp;&nbsp;节点类型 | 3 |
| nodeName&nbsp;&nbsp;节点名称 | #text |
| nodeValue&nbsp;&nbsp;节点的值 | 文本内容&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

</div>
<div>

##### <code>document</code> 文档对象

| 属性 | 属性值 |
| ----| :---- |
| nodeType&nbsp;&nbsp;节点类型 | 9 |
| nodeName&nbsp;&nbsp;节点名称 | '#document'&nbsp;&nbsp;&nbsp;&nbsp; |
| nodeValue&nbsp;&nbsp;节点的值 | null |

</div>
</div>

<!-- | 节点 | nodeType（节点的类型） |
| ----| :---- |
| 元素节点 | 1 |
| 属性节点 | 2 |
| 文本节点 | 3 |

| 节点 | nodeName（节点的名称） |
| ----| :---- |
| 元素节点 | 标签名字大写 |
| 属性节点 | 属性名 |
| 文本节点 | #text |

| 节点 | nodeValue（节点的值） |
| ----| :---- |
| 元素节点 | null |
| 属性节点 | 属性值 |
| 文本节点 | 文本内容 |

<code>document</code> 文档对象

| document的属性 | document的属性值 |
| ----| :---- |
| nodeType | 9 |
| nodeName | '#document' |
| nodeValue | null | -->

##### 注释（Comment类型）

| 属性 | 属性值 |
| ----| :---- |
| nodeType&nbsp;&nbsp;节点类型 | 8 |
| nodeName&nbsp;&nbsp;节点名称 | '#comment'&nbsp;&nbsp;&nbsp;&nbsp; |
| nodeValue&nbsp;&nbsp;节点的值 | 注释的内容 |


### 四、节点的增删改查

#### 1、节点的创建

* <code><font color="#df402a">document.createElement(标签名)</font></code>&nbsp;&nbsp;&nbsp;&nbsp; <font color="#087ea4">创建指定的元素节点</font>（重点）
* <code>document.createTextNode()</code>&nbsp;&nbsp;&nbsp;&nbsp; 创建一个文本节点（了解）
* <code>document.createAttribute()</code>&nbsp;&nbsp;&nbsp;&nbsp; 创建一个属性节点（了解）

#### 2、节点的插入

* <code><font color="#df402a">parent.appendChild(ele)</font></code>&nbsp;&nbsp;&nbsp;&nbsp; <font color="#087ea4">给父元素添加最后一个子元素ele（返回新添加的节点）</font>（重点）

```js
someNode.appendChild(newNode);
```

* <code><font color="#df402a">parent.insertBefore(newNode, node)</font></code>&nbsp;&nbsp;&nbsp;&nbsp;  <font color="#087ea4">在指定的子节点node前插入新的子节点newNode</font>（重点）

```js
 someNode.insertBefore(newNode, null);  // 作为最后一个子节点插入
 someNode.insertBefore(newNode, someNode.firstChild);  // 作为新的第一个子节点插入
 someNode.insertBefore(newNode, someNode.lastChild);  // 插入最后一个子节点前面
```

* <code>ele.setAttributeNode(attrNode)</code>&nbsp;&nbsp;&nbsp;&nbsp; 在指定元素中插入一个属性节点（了解）

#### 3、节点的替换

* <code>parent.replaceChild(newNode, node)</code>&nbsp;&nbsp;&nbsp;&nbsp; 用新的子节点newNode替换指定的子节点node

#### 4、节点的删除

* <code>parent.removeChild(ele)</code>&nbsp;&nbsp;&nbsp;&nbsp; 删除（并返回）当前节点parent的指定子节点ele

#### 5、节点的复制

* <code class="cn">节点.cloneNode(boolean)</code>

  * boolean值为 false，代表浅复制
  * boolean为 true，代表深复制

#### 6、判断是否拥有子节点

* <code>parent.hasChildNodes()</code>&nbsp;&nbsp;&nbsp;&nbsp; 判断当前节点是否拥有子节点,返回布尔值

#### 7、比较节点

* <code>ele.isSameNode(newEle)</code>  比较节点是否相同（节点相同，意味着引用同一个对象）
  * 返回布尔值
* <code>ele.isEqualNode(newEle)</code>  比较节点是否相等（节点相等，意味着节点类型相同，拥有相等的属性（nodeName、nodeValue 等），而且 attributes和 childNodes 也相等（即同样的位置包含相等的值））
  * 返回布尔值

```js
let div1 = document.createElement("div");
div1.setAttribute("class", "box");
let div2 = document.createElement("div");
div2.setAttribute("class", "box");
div1.isSameNode(div1);  // true
div1.isEqualNode(div2);  // true
div1.isSameNode(div2);  // false 
```

#### 8、DocumentFragment 文档片段

* <code>document.createDocumentFragment()</code>  创建文档片段
* <code>new DocumentFragment()</code>  构造函数创建文档片段

```js
const fragment = new DocumentFragment();  // 使用构造函数创建文档片段
const dNode = document.createElement('div');
fragment.appendChild(dNode);
document.body.appendChild(fragment);
```

!> 它不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会对性能产生影响。

### 五、节点的属性及方法

#### 1、节点的属性（ 所有的html结构的标准html属性均可作为节点的属性）

| 属性 | 描述 |
| ---- | ---- |
| tagName | 获取元素元素的标签名 |
| id | 设置/获取元素id属性 |
| name | 设置/获取元素name属性 |
| style | 设置/获取元素的内联样式 |
| className |  设置/获取元素的class属性 |
| innerHTML | 设置/获取元素的内容（包含html代码）|
| outerHTML | 设置或获取元素及其内容（包含html代码）|
| innerText | 设置或获取位于元素标签内的文本 |
| outerText | 设置（包括标签）或获取（不包括标签）元素的文本 |

!> 可以通过点语法或方括号访问（示例：ele.innerHTML）

#### 2、节点的方法

| 方法 | 描述 |
| ----| :---- |
| <code class="cn">ele.getAttribute("html属性")</code> | 获取属性（属性不存在，则返回null） |
| <code class="cn">ele.setAttribute("html属性","html属性值")</code> | 设置属性 |
| <code class="cn">ele.removeAttribute("属性")</code> | 删除指定属性 |
| <code class="cn">ele.contains(节点)</code> | 节点是否是指定节点的后代（返回布尔值） |

<code>ele.scrollIntoView()</code>  滚动元素的父容器，使被调用 scrollIntoView() 的元素对用户可见

* alignToTop 一个Boolean值：
  * 为 true，元素的顶端将和其所在滚动区的可视区域的顶端对齐。（相当于 scrollIntoViewOptions: {block: "start", inline: "nearest"}）
  * 为 false，元素的底端将和其所在滚动区的可视区域的底端对齐。（相当于 scrollIntoViewOptions: {block: "end", inline: "nearest"}）
* scrollIntoViewOptions 一个包含下列属性的对象：
  * behavior 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"。
  * block 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"。
  * inline 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"。

```js
element.scrollIntoView();  // 等同于 element.scrollIntoView(true)
element.scrollIntoView(alignToTop);  // Boolean 型参数
element.scrollIntoView(scrollIntoViewOptions);  // Object 型参数
```

#### 3、盒模型相关的节点属性

* **偏移尺寸**  包含元素在屏幕上占用的所有视觉空间
  1. <code>ele.offsetWidth / offsetHeight</code>&nbsp;&nbsp;&nbsp;&nbsp;  获取元素的宽高（包含content+padding+border）
  2. <code>ele.offsetLeft / offsetTop</code>&nbsp;&nbsp;&nbsp;&nbsp;  获取元素到最近的定位父辈（或者html）的距离

* **客户端尺寸**  包含元素内容及其内边距所占用的空间
  1. <code>ele.clientWidth / clientHeight</code>&nbsp;&nbsp;&nbsp;&nbsp;  元素的内部宽度（包括 padding，不包括 border，margin，滚动条）

* **滚动尺寸**  提供了元素内容滚动距离的信息
  1. <code>scrollWidth</code>  没有滚动条出现时，元素内容的总宽度
  2. <code>scrollHeight</code>  没有滚动条出现时，元素内容的总高度
  3. <code>scrollLeft</code>  内容区（内容+内边距）左侧隐藏的像素数，设置这个属性可以改变元素的滚动位置
  4. <code>scrollTop</code>  内容区（内容+内边距）顶部隐藏的像素数，设置这个属性可以改变元素的滚动位置

* **确定元素尺寸**
  1. <code>ele.getBoundingClientRect()</code>&nbsp;&nbsp;&nbsp;&nbsp;  返回元素的大小及其相对于视口的位置
    * 标准盒子模型，元素的尺寸等于 width/height + padding + border - width 的总和。
    * 如果 box-sizing: border-box，元素的的尺寸等于 width/height

#### 4、元素的样式

* <code>window.getComputedStyle(ele节点)</code>&nbsp;&nbsp;&nbsp;&nbsp; 返回值为包含所有css样式的对象（标准浏览器）

* <code>ele.style</code>&nbsp;&nbsp;&nbsp;&nbsp;  读取的只是元素的内联样式，即写在元素的style属性上的样式。（既可以获取样式，也能设置样式）

* <code>getComputedStyle</code>&nbsp;&nbsp;&nbsp;&nbsp;  读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。（只能获取样式）

### 六、MutationObserver 接口

在 DOM 被修改时异步执行回调。使用 MutationObserver 可以观察整个文档、DOM 树的一部分，或某个元素。此外还可以观察元素属性、子节点、文本，或者前三者任意组合的变化。

#### 1、基本方法

<code>observe()</code>&nbsp;&nbsp;&nbsp;&nbsp;  将新创建的 MutationObserver 实例与 DOM 关联起来

```js
// 创建一个 MutationObserver 示例，传入回调函数
let observer = new MutationObserver((mutationRecord, mutationObserver) => console.log('属性改变触发的回调'));
//配置 dom 的哪些改变会触发回调函数，详细见下文表格。
var mutationObserverInit = { attributes: true }
// 注册监控的节点、监控的事件
observer.observe(document.body, mutationObserverInit);
document.body.className = 'foo';
```

* 每个回调都会收到一个 MutationRecord 实例的数组，第二个参数是观察变化的 MutationObserver 的实例
* MutationRecord 实例的属性，如下：

| 属性 | 描述 | 默认值 |
| ---- | ---- | ---- |
| target | 被修改影响的目标节点 |
| type | 字符串，表示变化的类型："attributes"、"characterData"或"childList" |
| oldValue | 如果在 MutationObserverInit 对象中启用（attributeOldValue 或 characterData OldValue为 true），"attributes"或"characterData"的变化事件会设置这个属性为被替代的值。"childList"类型的变化始终将这个属性设置为 null |
| attributeName | 对于"attributes"类型的变化，这里保存被修改属性的名字；其他变化事件会将这个属性设置为 null |
| attributeNamespace | 对于使用了命名空间的"attributes"类型的变化，这里保存被修改属性的名字；其他变化事件会将这个属性设置为 null |
| addedNodes | 对于"childList"类型的变化，返回包含变化中添加节点的 NodeList。默认为空 NodeList | 空 NodeList |
| removedNodes | 对于"childList"类型的变化，返回包含变化中删除节点的 NodeList。默认为空 NodeList | 空 NodeList |
| previousSibling | 对于"childList"类型的变化，返回变化节点的前一个同胞 Node。默认为 null | null |
| nextSibling | 对于"childList"类型的变化，返回变化节点的后一个同胞 Node。默认为 null | null |

<code>disconnect()</code>&nbsp;&nbsp;&nbsp;&nbsp;  提前终止执行回调

```js
// 停止监控
observer.disconnect();
```

#### 2、MutationObserverInit 与观察范围

MutationObserverInit 对象用于控制对目标节点的观察范围。粗略地讲，观察者可以观察的事件包括属性变化、文本变化和子节点变化。

MutationObserverInit 对象的属性，如下：

| 属性 | 描述 | 默认值 |
| ---- | ---- | ---- |
| subtree | 布尔值，表示除了目标节点，是否观察目标节点的子树（后代）。如果是 false，则只观察目标节点的变化；如果是 true，则观察目标节点及其整个子树。默认为 false | false |
| attributes | 布尔值，表示是否观察目标节点的属性变化。默认为 false | false |
| attributeFilter  | 字符串数组，表示要观察哪些属性的变化。把这个值设置为 true 也会将 attributes 的值转换为 true。默认为观察所有属性 | 观察所有属性 |
| attributeOldValue  | 布尔值，表示 MutationRecord 是否记录变化之前的属性值。把这个值设置为 true 也会将 attributes 的值转换为 true。默认为 false | false |
| characterData  | 布尔值，表示修改字符数据是否触发变化事件。默认为 false | false |
| characterDataOldValue  | 布尔值，表示 MutationRecord 是否记录变化之前的字符数据。把这个值设置为 true 也会将 characterData 的值转换为 true。默认为 false | false |
| childList  | 布尔值，表示修改目标节点的子节点是否触发变化事件。默认为 false | false |
