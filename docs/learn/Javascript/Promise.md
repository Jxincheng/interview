# Promise

---

### 一、介绍

Promise 是一个构造函数，所谓的Promise对象，就是通过 new Promise() 实例化得到的对象，用来传递异步操作的消息。它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的 API，可供进一步处理。

### 二、promise的状态

<code>Pending</code>（未完成）可以理解为Promise对象实例创建时候的初始状态

<code>Resolved</code>（成功） 可以理解为成功的状态

<code>Rejected</code>（失败） 可以理解为失败的状态

### 三、方法

#### 1、静态方法

<code>Promise.resolve()</code>  将现有对象转为Promise对象，并将该对象的状态改成 resolved

```js
var p = Promise.resolve('foo');
// 等价于
var p = new Promise(resolve => resolve('foo'));
```

<code>Promise.reject()</code>  返回一个新的 Promise 实例，该实例的状态为 rejected

<code>Promise.all([p1,p2,p3...])</code>  将多个Promise实例，包装成一个新的Promise实例

* (1) 所有参数中的 promise 状态都为 resolved 是，新的promise状态才为 resolved
* (2) 只要p1、p2、p3..之中有一个被 rejected，新的promise的状态就变成 rejected

<code>Promise.race([p1,p2,p3...])</code>  竞速，完成一个即可

#### 2、原型方法

<code>Promise.prototype.then(successFn[,failFn])</code>
Promise实例生成以后，可以用then方法分别指定Resolved状态和Rejected状态的回调函数。并根据Promise对象的状态来确定执行的操作:

* resolved 时执行第一个函数 successFn
* rejected 时执行第二个函数 failFn

<code>Promise.prototype.catch(failFn)</code>

<code>Promise.prototype.finally()</code>   用于指定不管 Promise 对象最后状态如何，都会执行的操作（es7）

```js
var p = new Promise(function(resolve, reject){
    // ajax请求
    ajax({
        url:'xxx.php',
        success:function(data){
            resolve(data)
        },
        fail:function(){
            reject('请求失败')
        }
    });
});
// 指定Resolved状态和Rejected状态的回调函数
// 一般用于处理数据
p.then(function(res){
    // 这里得到resolve传过来的数据
},function(err){
    // 这里得到reject传过来的数据
})
p.then(result => { 成功 })
.catch(error => { 失败 })
.finally(() => { 成功或失败 })
```

### 四、拓展

#### 1、多个请求的链式调用

```js
const request = (params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            success:(result)=>{
                resolve(result);
            },
            fail:(err)=>{
                reject(err);
            }
        });
    })
}

// 发送请求
request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
.then(result=>{
  console.log("链式调用1：",result);
  return request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'}) 
})
.then(result=>{
  console.log("链式调用2：",result);
})
```
