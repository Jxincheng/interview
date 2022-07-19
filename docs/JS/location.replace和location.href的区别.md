# location.replace 和 location.href的区别

---
<code>location.href</code> 通常被用来跳转到指定页面地址;

<code>location.replace</code> 方法则可以实现用新的文档替换当前文档;

!> location.replace 方法不会在 history 对象中生成一个新的记录。当使用该方法时，新的 URL 将覆盖 history 对象中的当前记录。即浏览器不可以通过“后退”退回到原页面，使用js方法返回也不行。

```js
window.location.href = "http://www.baidu.com";
window.location.replace("http://www.baidu.com");
```
