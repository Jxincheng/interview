# var、let 和 const 的区别

---

1. <code>var</code> 声明的变量会挂载在 window 上；而 <code>let</code> 和 <code>const</code> 声明的变量不会。

2. <code>var</code> 声明变量存在变量提升；      而 <code>let</code> 和 <code>const</code> 不存在变量提升。

3. <code>let</code> 和 <code>const</code> 声明形成块作用域。

4. 同一作用域下 <code>var</code> 可以声明同名变量；而 <code>let</code> 和 <code>const</code> 不可以。

5. <code>const</code> 声明时需要一个常量作为初始值，不可更改。
