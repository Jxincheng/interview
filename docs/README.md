# 文档简介

##### docsify中文文档：[https://docsify.js.org/#/zh-cn/](https://docsify.js.org/#/zh-cn/)
------

让我们开始吧

```html
<div class="demo">
  <div>代码区域</div>
</div>
```

```js
// Importing a specific API:
import { useState } from 'react';
```

<strong class="str">示例：</strong>
```
>- 1
>- 2
>- 3

> 文本效果   等同于：<blockquote><p>文本效果</p></blockquote>
<blockquote>blockquote标签</blockquote>
```

<strong class="str">效果：</strong>
>- 1
>- 2
>- 3

> 文本效果  

<blockquote>blockquote标签</blockquote>

<strong class="str">示例：</strong>
```
<strong>加粗（strong标签）的效果</strong>   
<strong class="str">加粗加样式（strong标签，class="str"）的效果</strong>

<font color="crimson">字体加红（font标签，color="crimson"）效果</font>  
<font color="red">字体加红（font标签，color="red"）效果</font>  
<font color="green">字体加红（font标签，color="green"）效果</font>  
<font color="#000">字体加红（font标签，color="#000"）效果</font>

空格使用 <code>\&nbsp;</code>
<code>code标签</code>用于标记代码
```
<strong class="str">效果：</strong>

<strong>加粗（strong标签）的效果</strong>   
<strong class="str">加粗加样式（strong标签，class="str"）的效果</strong>

<font color="crimson">字体加红（font标签，color="crimson"）效果</font>  
<font color="red">字体加红（font标签，color="red"）效果</font>  
<font color="green">字体加红（font标签，color="green"）效果</font>  
<font color="#000">字体加红（font标签，color="#000"）效果</font>  

空格使用 <code>\&nbsp;</code>

<code>code标签</code>用于标记代码
<pre data-lang="属性">pre标签<code>里面加code</code></pre>

<strong class="str">示例：</strong>
```
!> 提示
<p class="tip">p标签，class="tip"</p>
<p class="g5">p标签，class="g5"</p>
<p class="g5 border-l">p标签，class="g5 border-l"</p>
?> 警告
<p class="warn">p标签，class="warn"</p>
<p class="warn border-l">p标签，class="warn border-l"</p>
<p class="pitfall">p标签，class="pitfall"</p>
<p class="pitfall border-l">p标签，class="pitfall border-l"</p>
```
<strong class="str">效果：</strong>

!> 提示
<p class="tip">p标签，class="tip"</p>
<p class="g5">p标签，class="g5"</p>
<p class="g5 border-l">p标签，class="g5 border-l"</p>

?> 警告
<p class="warn">p标签，class="warn"</p>
<p class="warn border-l">p标签，class="warn border-l"</p>
<p class="pitfall">p标签，class="pitfall"</p>
<p class="pitfall border-l">p标签，class="pitfall border-l"</p>

<strong class="str">示例：</strong>
```
<div class="card">
  <h4>div标签，class="card"</h4>
  <ul>
    <li>第一</li>
    <li>第一</li>
    <li>第一</li>
  </ul>
  <h5>数字</h5>
  <ul class="digital">
    <li>第一</li>
    <li>第一</li>
    <li>第一</li>
  </ul>
</div>
<output data-lang="data-lang属性">output标签</output>
```
<strong class="str">效果：</strong>
<html>
  <div class="card">
    <h4>div标签，class="card"</h4>
    <ul>
      <li>第一</li>
      <li>第一</li>
      <li>第一</li>
    </ul>
    <h5>数字</h5>
    <ul class="digital">
      <li>第一</li>
      <li>第一</li>
      <li>第一</li>
    </ul>
  </div>
</html>

<output data-lang="data-lang属性">output标签</output>

<strong class="str">示例：</strong>
```
<details>
<summary>自我评价（点击展开）</summary>

- Abc
- Abc

</details>

<div style='color: red'>

- listitem
- listitem
- listitem

</div>
```
<strong class="str">效果：</strong>
<details>
<summary>自我评价（点击展开）</summary>

- Abc
- Abc

</details>

<div style='color: red'>

- listitem
- listitem
- listitem

</div>

![图片](https://docsify.js.org/_media/icon.svg)
