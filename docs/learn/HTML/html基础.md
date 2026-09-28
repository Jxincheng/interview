# html基础

---

### 一、HTML概念

HTML 指的是超文本标记语言

* 由一套标签组成的语言称为标记语言
* XHTML 指可扩展超文本标记语言（标识语言）。
* HTML5 指的是 HTML 的第五次重大修改（第5个版本）

**W3C**( World Wide Web Consortium )万维网联盟，制定了结构html和表现css的标准。

**ECMA**：制定的行为的标准

### 二、HTML基本语法

1. 常规标记
    * <标记></标记>
2. 空标记
    * <标记 属性=“属性值” />

**说明**：

* 写在<>中的第一个单词叫做标记，标签，元素。
* 标记和属性用空格隔开，属性和属性值用等号连接，属性值必须放在“”号内。
* 一个标记可以没有属性也可以有多个属性，属性和属性之间不分先后顺序。
* 空标记没有结束标签，用“/”代替。

### 三、HTML标签

1. 文本标题

```html
<h1>一级标题</h1> <h2>二级标题</h2>……<h6>六级标题</h6>
```

2. 段落标记

```html
<p>段落文本内容</p>
```

3. 空格

```html
&nbsp;  （所占位置没有一个确定的值,这与当前字体字号都有关系。）
```

4. 加粗

```html
<b>加粗内容</b>     
<strong>加粗内容</strong>
```

5. 倾斜

```html
<em></em>     
<i></i>
```

6. 强制换行

```html
<br />
```

7. 水平线

```html
<hr />
```

8. 列表（ul,ol,dl）

HTML中有三种列表，分别是：无序列表（ul），有序列表（ol），自定义列表（dl）

```html
// 自定义列表
<dl>
  <dt>名词</dt>
  <dd>解释</dd> <!-- (definition description  定义描述) -->
  <!-- ．．．．．． -->
</dl>
```

9. 插入图片

```html
<img src="目标文件路径及全称" alt="图片替换文本（图片未加载出来时显示的文字）" title="图片标题（鼠标悬停时显示的文字）" />
```

注：所要插入的的图片必须放在站点下

* 相对路径的写法：
  * 当当前文件与目标文件在同一目录下，直接书写目标文件文件名+扩展名；
  * 当当前文件与目标文件所处的文件夹在同一目录下，写法如下：
    * 文件夹名/目标文件全称+扩展名；
  * 当当前文件所处的文件夹和目标文件所处的文件夹在同一目录下，写法如下：
    * ../目标文件所处文件夹名/目标文件文件名+扩展名

10. 超链接的应用

```html
<a href="目标文件路径及全称/连接地址">链接文本/图片</a>
```

* 属性：target（页面打开方式）
  * 默认属性值：_self
  * 属性值：_blank 新窗口打开

11. 表格

```html
<table>
  <!-- 行 -->
  <tr>
    <!-- 单元格 -->
    <td></td>
    <td></td>
  </tr>
</table>
```

* 数据表格的相关属性
  * width="表格的宽度"
  * height="表格的高度"
  * border="表格的边框"
  * bgcolor="表格的背景色"
  * cellspacing="单元格与单元格之间的间距"
  * cellpadding="单元格与内容之间的空隙"
  * 水平对齐方式：align="left/center/right";
* 合并单元格属性：
  * colspan="所要合并的单元格的列数" 合并列;
  * rowspan="所要合并单元格的行数" 合并行;

12. 表单

* 表单框

```html
<form name="表单名称" method="post/get" action=""></form>
```

* 文本框

```html
<input type="text" value="默认值"/>
```

* 密码框

```html
<input type="password" />
```

* 提交按钮

```html
<input type="submit" value="按钮内容" />
```

* 重置按钮

```html
<input type="reset" value="按钮内容" />
```

* 单选框/单选按钮

```html
<input type="radio" name="ral"/>
<input type="radio" name="ral" />
```

单选按钮里的name属性必须写，同一组单选按钮的name属性值必须一样。

* 复选框

```html
<input type="checkbox" name="like" />
<input type="checkbox" name="like" disabled="disabled" />
<!--  
disabled="disabled" 禁用
checked="checked" 默认选中
-->
```

* 下拉菜单

```html
<select name="">
  <option>菜单内容</option>
</select>
```

* 多行文本框（文本域）

```html
<textarea name="textareal" cols="字符宽度" rows="行数"></textarea>
```

* 按钮

```html
<input name="" type="button" value="按钮内容" />
```

submit的区别是，submit 是提交按钮 起到提交信息的作用，button 只起到跳转的作用，不进行提交。

* 占位
  * placeholder="输入框内容"

### 四、元素类型

1. 块元素 （特点：独占一行，可以写宽高）
    * <code>div</code>  <code>p</code>  <code>h1-h6</code>  <code>hr</code>  <code>table</code>  <code>form</code>  <code>ul</code>

```html
<div></div>
<p></p>
<h1></h1>...<h6></h6>
<hr />
<table></table>
<form></form>
<ul></ul>
```

2. 行内元素 （特点：在一行显示，不能写宽高）
    * <code>span</code>  <code>a</code>  <code>i</code>  <code>u</code>

```html
<span></span>
<a></a>
<i></i>
<u></u>
```

3. 行内块元素 （特点：在一行显示，能写宽高）
    * <code>input</code>  <code>img</code>  <code>td</code>

```html
<input />
<img />
<td></td>
```
