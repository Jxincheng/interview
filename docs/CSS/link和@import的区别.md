# link和@import的区别

---

1. link属于HTML标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等；@import是css提供的，只有导入样式表的作用
2. 页面被加载时，link 会被同时加载，而 @import 引用的 css 会等到页面被加载完再加载
3. import只在 IE5 以上才能识别，而 link 是 HTML标签，无兼容问题  
4. link方式的样式的权重高于 @import 的权重
