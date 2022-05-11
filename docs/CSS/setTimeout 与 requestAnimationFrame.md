# setTimeout 与 requestAnimationFrame

---

#### requestAnimationFrame执行动画的优势

##### 1. CPU节能

* 使用<code>SetTinterval</code>实现的动画，当页面被隐藏或最小化时，<code>SetTinterval</code>仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费CPU资源。而<code>RequestAnimationFrame</code>则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统走的RequestAnimationFrame也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了CPU开销。

##### 2. 函数节流

* 在高频率事件( resize, scroll 等)中，为了防止在一个刷新间隔内发生多次函数执行，<code>RequestAnimationFrame</code>可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销，一个刷新间隔内函数执行多次时没有意义的，因为多数显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来。

##### 3. 减少DOM操作

* <code>requestAnimationFrame</code>会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧

#### setTimeout执行动画的缺点

> 它通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿、抖动的现象；

原因是：

* <code>settimeout</code>任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
* <code>settimeout</code>的固定时间间隔不一定与屏幕刷新间隔时间相同，会引起丢帧
