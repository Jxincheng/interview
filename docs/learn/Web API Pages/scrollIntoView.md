# Element.scrollIntoView()

---

scrollIntoView() 方法会滚动元素的父容器，使被调用 scrollIntoView() 的元素对用户可见。

### 语法

```js
element.scrollIntoView(); // 等同于 element.scrollIntoView(true)
element.scrollIntoView(alignToTop); // Boolean 型参数
element.scrollIntoView(scrollIntoViewOptions); // Object 型参数
```

### 参数

* <code class="gray">alignToTop</code> 可选
一个 Boolean 值：

  * 如果为true，元素的顶端将和其所在滚动区的可视区域的顶端对齐。相应的 scrollIntoViewOptions: {block: "start", inline: "nearest"}。这是这个参数的默认值。

  * 如果为false，元素的底端将和其所在滚动区的可视区域的底端对齐。相应的scrollIntoViewOptions: {block: "end", inline: "nearest"}。

* <code class="gray">scrollIntoViewOptions</code> 可选 实验性
一个包含下列属性的对象：

  * <code>behavior</code> 可选
  定义动画过渡效果， <code>"auto"</code>或 <code>"smooth"</code> 之一。默认为 "auto"。

  * <code>block</code> 可选
  定义垂直方向的对齐， <code>"start"</code>, <code>"center"</code>, <code>"end"</code>, 或 <code>"nearest"</code>之一。默认为 "start"。

  * <code>inline</code> 可选
  定义水平方向的对齐， <code>"start"</code>, <code>"center"</code>, <code>"end"</code>, 或 <code>"nearest"</code>之一。默认为 "nearest"。

### 示例

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
```
