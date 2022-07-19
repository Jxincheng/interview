# this

---

### this 当前对象，指的是当前调用函数的对象

<p class="pitfall border-l">this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用。（this 对象是在运行时基于函数的执行环境绑定的）</p>

1. 函数手动执行时，this 都指向 window
2. 函数事件驱动执行的话，this 指向驱动事件的那个元素对象
3. 当函数作为某个对象的方法调用时，this 指向那个对象

### this 详解

1. 单独的 this，指向的是 window
2. 全局函数中的 this，指向的是 window
3. 如果函数用作构造函数，那么 this 指向构造函数创建的对象实例
4. 定时器中的 this，指向的是 window
5. 元素绑定事件，事件触发后，执行的函数中的 this，指向的是当前元素

### 普通函数中的 this

<p class="pitfall border-l">普通函数可以有匿名函数，也可以有命名函数</p>

1. this 指向调用此函数的对象。
2. 如果函数用作构造函数，那么this指向构造函数创建的对象实例。
3. 凡是没有显式调用的函数，其调用对象都是 window 对象

### 箭头函数中的 this

this 永远指向其上下文的 this，任何方法都改变不了其指向，如 call(), bind(), apply()

* this 是在它声明时捕获它所处作用域中的 this

### 改变 this 指向

<div class="card">

#### 方法：

1. <code>bind()</code> 改变 this 的指向，返回了新函数
2. <code>call()</code> 改变 this (当前对象)的指向，同时执行函数
3. <code>apply()</code> 改变 this 的指向，同时执行函数（apply的参数为数组）
    * 不想改变 this 指向，传入值为 null

</div>

### 自己的理解：

1. this 并不取决于它所在的位置，而是取决于它所在的 function 是怎么被调用的
2. 如果 this 是在匿名函数，或者全局环境的函数中，那么这个时候的 this 就是 window
3. 构造函数中的 this，就是指向即将实例化的那个对象
