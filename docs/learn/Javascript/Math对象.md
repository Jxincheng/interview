# Math对象

---

### 一、Math对象

Math对象：用于执行数学任务

Math 对象并不像 Date 和 String 那样是对象的类，因此没有构造函数 Math()。

### 二、Math对象属性

| 属性 | 描述 |
| ------ | ------ |
| E | 返回算术常量 e，即自然对数的底数（约等于2.718） |
| LN2 | 返回 2 的自然对数（约等于0.693） |
| LN10 | 返回 10 的自然对数（约等于2.302） |
| LOG2E | 返回以 2 为底的 e 的对数（约等于 1.4426950408889634） |
| LOG10E | 返回以 10 为底的 e 的对数（约等于0.434） |
| PI | 返回圆周率（约等于3.14159） |
| SQRT1_2 | 返回 2 的平方根的倒数（约等于 0.707） |
| SQRT2 | 返回 2 的平方根（约等于 1.414） |

### 三、Math对象方法

<code>Math.round()</code>   &nbsp;&nbsp;&nbsp;&nbsp;四舍五入取整

<code>Math.ceil()</code>   &nbsp;&nbsp;&nbsp;&nbsp;向上取整

<code>Math.floor()</code>  &nbsp;&nbsp;&nbsp;&nbsp;向下取整

```js
Math.round(3.6); // 4
Math.ceil(11.3); // 12
Math.floor(11.8); // 11
```

<code>Math.random()</code>   &nbsp;&nbsp;&nbsp;&nbsp;返回0-1之间的随机数（不包括 0 和 1）

<code>Math.max(num1, num2)</code>  &nbsp;&nbsp;&nbsp;&nbsp;返回最大的数

<code>Math.min(num1, num2)</code>  &nbsp;&nbsp;&nbsp;&nbsp;返回最小的数

```js
Math.max(1, 4, 3, 9, 7); // 9
Math.min(1, 4, 3, 9, 7); // 1
```

<code>Math.abs(num)</code>   &nbsp;&nbsp;&nbsp;&nbsp;绝对值

<code>Math.pow(x, y)</code>   &nbsp;&nbsp;&nbsp;&nbsp;x的y次方

<code>Math.sqrt(num)</code>  &nbsp;&nbsp;&nbsp;&nbsp;开平方根

```js
Math.abs(-3); // 3
Math.pow(2, 3); // 8
Math.sqrt(9); // 3
```

**三角函数**（ 返回的值是弧度而非角度 ）

1. <code>Math.sin(radian)</code>  &nbsp;&nbsp;&nbsp;&nbsp;正弦值
2. <code>Math.asin(x)</code>      &nbsp;&nbsp;&nbsp;&nbsp;反正弦值
3. <code>Math.cos(radian)</code>  &nbsp;&nbsp;&nbsp;&nbsp;余弦值
4. <code>Math.acos(x)</code>  &nbsp;&nbsp;&nbsp;&nbsp;反余弦值
5. <code>Math.tan(radian)</code>  &nbsp;&nbsp;&nbsp;&nbsp;正切值
6. <code>Math.atan(x)</code>  &nbsp;&nbsp;&nbsp;&nbsp;反正切值

!> 角度与弧度的转换 （ 弧度 = 角度 * Math.PI / 180 ）

### 四、拓展

#### 1、生成指定范围的随机整数

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomIntegerInRange(0, 5); // 3
```

#### 2、随机十六进制颜色

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
randomHexColorCode(); // "#e34155"
```
