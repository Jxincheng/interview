# BOM

---

### 一、BOM的概念

BOM(Browser Object Model) 是指<font color="#087ea4">浏览器对象模型</font>

### 二、window对象

1. 浏览器最顶端的对象
2. 省略了调用对象的方法或属性，其实都是 window 的方法或属性
    * 尽量不要对属性及事件，省略 window 对象的调用
3. 定义在全局环境下的变量都会成为 window 对象的属性
    * 若函数内没有用 var 声明变量，也是全局变量，也是 window 的属性
    * 命名冲突
    * 全局污染
    * 把变量定义在函数体里，尽量不声明全局变量
4. 全局变量起名字要避免使用window已存在的命名
    * 例：name、top
5.不要对 window 的属性进行赋值，例如：window.innerWidth= 500，以后获取浏览器可视区域宽度都是500。
6.通过 var 在全局作用域下声明的变量用 delete 无法删除

### 三、window事件

1. <code>window.onload</code>     当页面加载完毕后触发
2. <code>window.onscroll</code>   当滚动条滚动时触发
3. <code>window.onresize</code>   当页面尺寸改变时触发

### 四、window的属性及方法

#### 1、属性

1. <code>window.scrollX</code>    水平方向滚动条滚动后的距离
2. <code>window.scrollY</code>    垂直方向滚动条滚动后的距离
3. <code>window.scrollTo(x,y)</code> 设置浏览器当前滚动位置（距离浏览器可视区域顶部的位置）
4. <code>window.scrollBy(x,y)</code> 设置基于当前位置滚动的距离，可以为负数
5. <code>window.innerWidth/innerHeight</code> 浏览器可视区域的宽度/高度
6. <code>window.outerWidth/outerHeight</code> 浏览器窗口的宽度/高度

#### 2、方法

1. <code>alert()</code> 弹窗
2. <code>prompt(question, initval)</code> 弹出输入框，返回值为具体的消息或null
    * question 问题
    * initval 默认值
3. <code>confirm(str)</code>  确认框，返回布尔值，若确定返回 true，取消返回 false
4. <code>open()</code>   打开新窗口
5. <code>close()</code>  关闭窗口
6. <code>print()</code>  调出打印对话框

### 五、window的属性对象

#### 1、document  文档对象模型

#### 2、history   包含窗口的浏览历史

1. <code>back()</code>  加载 history 列表中的前一个 URL

```js
history.back(); //  后退一页
```

2. <code>forward()</code>  加载 history 列表中的下一个 URL

```js
history.forward(); //  前进一页
```

3. <code>go()</code>   加载 history 列表中的某个具体页面，支持负数

```js
history.go(0); // 刷新当前页面
history.go(2); //  前进两页
history.go(-1); //  后退一页
```

4. <code>length</code>  返回浏览器历史列表中的 URL 数量

#### 3、location   当前窗口中加载文档的相关信息

1. <code>assign()</code>  导航到一个新页面

```js
window.location.assign("http://www.mozilla.org"); 
```
2. <code>reload()</code>  强制从服务器重新加载当前页面

```js
window.location.reload(true);
```

3. <code>replace()</code> 方法重新加载页面

```js
function reloadPageWithHash() {
  var initialPage = window.location.pathname;
  window.location.replace('http://example.com/#' + initialPage);
}
```

4. <code>hash</code>  设置或返回从井号 (#) 开始的 URL（锚）==> 哈希值
5. <code>href</code>  设置或返回完整的 URL

```js
location.href="html2/aa.html?name=lemon&age=17"
```

6. <code>search</code> 设置或返回从问号 (?) 开始的 URL（查询部分）
    * 参数的作用：传递信息给另一个页面，告知具体显示内容

```js
?name=lemon&age=17
```

#### 4、navigator   提供浏览器详细信息

1. <code>appCodeName</code>  浏览器代号
2. <code>appName</code>  浏览器名称
3. <code>appVersion</code>  浏览器版本
4. <code>cookieEnabled</code>  启用Cookies
5. <code>platform</code>  硬件平台
6. <code>userAgent</code>  用户代理
7. <code>language</code>  用户代理语言
8. <code>product</code> 浏览器引擎的产品名称

!> 来自 navigator 对象的信息通常是误导性的，不应该用于检测浏览器版本，因为：
不同浏览器能够使用相同名称；
导航数据可被浏览器拥有者更改；
某些浏览器会错误标识自身以绕过站点测试；
浏览器无法报告发布晚于浏览器的新操作系统。
