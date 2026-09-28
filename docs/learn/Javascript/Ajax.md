# Ajax

---

### 一、介绍

AJAX: Asynchronous Javascript And Xml，Ajax 技术的核心是XMLHttpRequest对象（简称XHR），这是由微软首先引入的一个特性，其他浏览器提供商后来都提供了相同的实现

**ajax优点**

* 增加速度：减轻服务器的负担,按需加载数据,最大程度的减少冗余请求
* 改善的用户体验：局部刷新页面,减少用户等待时间,带来更好的用户体验
* 页面和数据分离：前后端分离，操作更灵活，后期维护更方便

**后端语言和服务器配置**

* php + Apache + mySQL
* NodeJS + MongoDB
* Java + tomcat + Oracle
* .NET + IIS + SQL Server

### 二、Ajax请求步骤

#### 1、创建请求对象，返回一个异步请求对象

```js
var xhr = new XMLHttpRequest();
          new ActiveXObject("Microsoft.XMLHTTP");  // IE5、IE6
```

#### 2、处理服务器返回数据

<code>readyState</code>

* 0 － （未初始化）尚未调用open()方法。
* 1 － （启动）已经调用open()方法，但尚未调用send()方法。
* 2 － （发送）send()方法执行完成，但尚未接收到响应。
* 3 － （接收）已经接收到部分响应数据。
* 4 － （完成）响应内容解析完成，可以在客户端调用了

!> 只要 readyState 属性的值由一个值变成另一个值，都会触发一次 readystatechange 事件。
必须在调用 open() 之前指定 onreadystatechange 事件处理程序才能确保跨浏览器兼容性。

<code>responseText</code>  保存服务器返回的数据（从服务器返回的数据是“字符串”）

```js
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4) {
      console.log(xhr.responseText);
  }
}
```

#### 3、设置请求参数，建立与服务器连接

<code>open(type, url, async)</code>  建立与服务器的连接

* <font color="#c76a15">type</font>：请求的类型，get、post
* <font color="#c76a15">url</font>：数据请求的地址（API地址），一般由后端开发人员提供
  * 当前页面访问地址，API地址两者一定要同域
  * 同域（同源策略）：协议，域名，端口三者一致
* <font color="#c76a15">async</font>：是否异步发送请求（true,false），默认为true
  * 同步：按步骤顺序执行，前面的代码执行完后，后面的代码才会执行；做完前一件事情, 才能下一件事情（排队）
  * 异步：与其他操作同时执行，也叫并发（图片加载，ajax请求，定时器）

<code>xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')</code>  利用请求头设置POST提交数据格式

```js
xhr.open("get", "http://localhost/api/ajaxtest", true);
```

#### 4、向服务器发送请求

<code>send(data)</code>  向服务器发送请求

* <font color="#c76a15">data</font>：可选参数，post请求时才生效，表示发请求时传送的数据字符串。
  * 在某些浏览器中，如果不需要通过post请求主体发送数据，则必须传入 **null**

```js
xhr.send(null);
```

### 三、拓展

#### 1、封装的ajax

```js
let ajax = function (options) {
    var opt = {
        url: '',
        type: 'get',
        data: {},
        success: function (data) {
            console.log("data",data);
        },
        error: function (err) {
            console.log(err);
        },
    };
    // util.extend(opt, options);
    opt = {...opt, ...options};
    if (opt.url) {
        var xhr = XMLHttpRequest
            ? new XMLHttpRequest()
            : new ActiveXObject('Microsoft.XMLHTTP');
        var data = opt.data,
            url = opt.url,
            type = opt.type.toUpperCase(),
            dataArr = [];
        for (var k in data) {
            dataArr.push(k + '=' + data[k]);
        }
        if (type === 'GET') {
            url = url + '?' + dataArr.join('&');
            xhr.open(type, url.replace(/\?$/g, ''), true);
            xhr.send();
        }
        if (type === 'POST') {
            xhr.open(type, url, true);
            xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(dataArr.join('&'));
        }
        xhr.onload = function () {
            if (xhr.status === 200 || xhr.status === 304) {
                var res;
                if (opt.success && opt.success instanceof Function) {
                    res = xhr.responseText;
                    if (typeof res === 'string') {
                        res = JSON.parse(res);
                        opt.success.call(xhr, res);
                    }
                }
            } else {
                if (opt.error && opt.error instanceof Function) {
                    opt.error.call(xhr, res);
                }
            }
        };
    }
};
// 使用
let obj = {
    url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
};
ajax(obj);
```
