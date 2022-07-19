# Dom

---

### 一、获取元素

1. <code class="cn">document.getElementById()</code>&nbsp;&nbsp;&nbsp;&nbsp;  通过 id 获取元素，返回值为元素节点（对象）或者为null（空对象）
    * 必须通过document调用
    * 速度最快

2. <code>getElementsByClassName()</code>&nbsp;&nbsp;&nbsp;&nbsp; 通过类名获取元素,返回类数组，如果类名不存在返回空数组 []
    * 元素节点均可调用

3. <code>getElementsByTagName()</code>&nbsp;&nbsp;&nbsp;&nbsp; 通过标签名获取元素,返回类数组，如果类名不存在返回空数组 []
    * 元素节点均可调用

4. <code>document.getElementsByName()</code>&nbsp;&nbsp;&nbsp;&nbsp; 通过 name 获取元素,返回类数组，如果类名不存在返回空数组 []
    * 必须通过document调用

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

| 节点 | nodeType（节点的类型） |
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

### 四、节点的增删改查

#### 1、节点的创建

* <code><font color="#df402a">document.createElement(标签名)</font></code>&nbsp;&nbsp;&nbsp;&nbsp; <font color="#087ea4">创建指定的元素节点</font>（重点）
* <code>document.createTextNode()</code>&nbsp;&nbsp;&nbsp;&nbsp; 创建一个文本节点（了解）
* <code>document.createAttribute()</code>&nbsp;&nbsp;&nbsp;&nbsp; 创建一个属性节点（了解）

#### 2、节点的插入

* <code><font color="#df402a">parent.appendChild(ele)</font></code>&nbsp;&nbsp;&nbsp;&nbsp; <font color="#087ea4">给父元素添加最后一个子元素ele</font>（重点）
* <code><font color="#df402a">parent.insertBefore(new,node)</font></code>&nbsp;&nbsp;&nbsp;&nbsp;  <font color="#087ea4">在指定的子节点node前插入新的子节点new</font>（重点）
* <code>ele.setAttributeNode(attrNode)</code>&nbsp;&nbsp;&nbsp;&nbsp; 在指定元素中插入一个属性节点（了解）

#### 3、节点的删除

* <code>parent.removeChild(ele)</code>&nbsp;&nbsp;&nbsp;&nbsp; 删除（并返回）当前节点parent的指定子节点ele

#### 4、节点的复制

* <code class="cn">节点.cloneNode(boolean)</code>

  * boolean值为 false，代表浅复制
  * boolean为 true，代表深复制

#### 5、判断是否拥有子节点

* <code>parent.hasChildNodes()</code>&nbsp;&nbsp;&nbsp;&nbsp; 判断当前节点是否拥有子节点,返回布尔值

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
| <code class="cn">ele.getAttribute("html属性")</code> | 获取属性 |
| <code class="cn">ele.setAttribute("html属性","html属性值")</code> | 设置属性 |
| <code class="cn">ele.removeAttribute("属性")</code> | 删除指定属性 |
| <code class="cn">ele.contains(节点)</code> | 节点是否是指定节点的后代（返回布尔值） |

#### 3、盒模型相关的节点属性

* <code>ele.offsetWidth / offsetHeight</code>&nbsp;&nbsp;&nbsp;&nbsp;  获取元素的宽高（包含content+padding+border）

* <code>ele.offsetLeft / offsetTop</code>&nbsp;&nbsp;&nbsp;&nbsp;  获取元素到最近的定位父辈（或者html）的距离

* <code>ele.clientWidth / clientHeight</code>&nbsp;&nbsp;&nbsp;&nbsp;  元素的内部宽度（包括 padding，不包括 border，margin，滚动条）

* <code>ele.getBoundingClientRect()</code>&nbsp;&nbsp;&nbsp;&nbsp;  返回元素的大小及其相对于视口的位置
  * 标准盒子模型，元素的尺寸等于 width/height + padding + border - width 的总和。
  * 如果 box-sizing: border-box，元素的的尺寸等于 width/height

#### 4、元素的样式

* <code>window.getComputedStyle(ele节点)</code>&nbsp;&nbsp;&nbsp;&nbsp; 返回值为包含所有css样式的对象（标准浏览器）

* <code>ele.style</code>&nbsp;&nbsp;&nbsp;&nbsp;  读取的只是元素的内联样式，即写在元素的style属性上的样式。（既可以获取样式，也能设置样式）

* <code>getComputedStyle</code>&nbsp;&nbsp;&nbsp;&nbsp;  读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。（只能获取样式）
