# script标签中defer和async的区别

---
如果没有<code>defer</code>或<code>async</code>属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。

<strong>defer 和 async 属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析</strong>，其区别如下：

* 执行顺序：多个带<code>async</code>属性的标签，不能保证加载的顺序；多个带<code>defer</code>属性的标签，按照加载顺序执行；
* 脚本是否并行执行：<code>async</code>属性，表示后续文档的加载和执行与js脚本的加载和执行是并行进行的，即异步执行；<code>defer</code>属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前
