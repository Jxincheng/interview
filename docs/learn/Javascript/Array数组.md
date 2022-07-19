# Array数组

---

### 一、创建数组

#### 1、字面量

* var arr = [];

#### 2、构造函数

* var arr1 =  <code>new Array()</code>;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建一个空数组[]

```js
var arr2 = new Array(4); // 创建长度为4的数组
var arr3 = new Array("jiang", "xincheng", "true"); // 创建数组时，并对元素进行赋值
Object.prototype.toString.call(arr3); // '[object Array]'
```

#### 3、数组方法创建数组

1. <code>Array.of()</code>  创建一个包含所有传入参数的数组，不管参数的数量与类型（es6）

```js
let arr1 = Array.of(); // []
let arr2 = Array.of(2,true,'jiang');  // [2,true,'jiang']
```

2. <code>Array.from()</code>  返回一个数组（es6）
    * 将可迭代对象或者类数组对象作为第一个参数传入
    * 传入一个映射用的函数作为第二个参数
    * 如果映射函数需要在对象上工作，传入第三个参数，指定函数内部的this值

```js
Array.from(new Set(arr))  // 用于数组去重

function arga(...args) {
    return Array.from(arguments, value => value + 1);
}
let arr = arga('arr', 26, 'pop');   // ['arr1', 27, 'pop1']

Array.from({ length: 3 }, () => 4); // [4, 4, 4]
```

### 二、操作数组

##### 1、增（返回值为新数组的长度）

* <code>unshift(item)</code>  &nbsp;&nbsp;&nbsp;&nbsp;往数组最前面添加一个元素（可加入多个）
* <code>push(item)</code>  &nbsp;&nbsp;&nbsp;&nbsp;往数组最后面添加一个元素（可加入多个）

##### 2、删    （返回值为被删除的元素）

* <code>shift(item)</code>  &nbsp;&nbsp;&nbsp;&nbsp;删除数组的第一个元素
* <code>pop(item)</code>  &nbsp;&nbsp;&nbsp;&nbsp;删除数组的最后一个元素

##### 3、增、删   （返回值为被删除的元素组成的数组）

* <code>splice(idx, delNum, item)</code>  &nbsp;&nbsp;&nbsp;&nbsp;改变原数组
  * idx 索引  &nbsp;&nbsp;&nbsp;&nbsp; delNum  要删除的元素的数量  &nbsp;&nbsp;&nbsp;&nbsp; item  要添加的元素

### 三、数组方法

#### 1、判断是否为数组

<code>Array.isArray()</code>

```js
Array.isArray([1,2,"jiang"]);  // true
```

#### 2、截取数组

<code>slice(start[, end])</code>  &nbsp;&nbsp;&nbsp;&nbsp;（<font color="green">返回截取的数组，不影响原数组</font>）

```js
let arr2 = arr.slice(0);  复制（属于浅拷贝）
```

!> 如果结束位置小于开始位置，则返回空数组

#### 3、拼接数组

<code>join(拼接符)</code>  &nbsp;&nbsp;&nbsp;&nbsp;将数组的每一项通过该拼接符拼接成字符串（<font color="green">返回字符串</font>）

!> 省略拼接符，会默认用逗号

#### 4、合并数组

<code>concat()</code>   &nbsp;&nbsp;&nbsp;&nbsp;（<font color="green">返回合并后的数组</font>）

```js
arr1.concat(arr2);  // 等同于 [...arr1, ...arr2]
let arr3 = arr.concat();  属于浅拷贝
```

#### 5、颠倒数组

<code>reverse()</code>  &nbsp;&nbsp;&nbsp;&nbsp;颠倒数组中元素的顺序（<font color="green">改变原数组</font>）

```js
[1,2,3,4].reverse();  // [4,3,2,1]
```

#### 6、填充数组

<code>fill(value[, start[, end]])</code>   &nbsp;&nbsp;&nbsp;&nbsp;用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引（<font color="green">返回修改后的数组</font>）

* value  用来填充数组元素的值
* start  起始索引（默认值为0，可选）
* end    终止索引（默认值为 this.length，可选）

```js
[1,2,3,4].fill(0,2,4);    // [1,2,0,0]
```

<code>copyWithin(key[, start[, end]])</code>   &nbsp;&nbsp;&nbsp;&nbsp;会按照指定范围浅复制数组中的部分内容，然后将它们插入到指定索引开始的位置

* key  开始插入的索引
* start  复制的起始索引（默认值为0，可选）
* end    复制的终止索引（默认为数组的边界，可选）

```js
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 复制索引0-3的内容，插入到索引4开始的位置
arr.copyWithin(4, 0, 3);   // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
```

#### 7、排序

<code>sort()</code>  &nbsp;&nbsp;&nbsp;&nbsp;将数组中的元素排序，并返回排序后的数组（<font color="green">改变原数组</font>）

!> sort 方法会调用每个数组项的 toString() 方法，得到字符串，然后再对得到的字符串进行排序

```js
let arr = [25, 5, 3, 25];
arr.sort();  // [15, 25, 3, 5]

sort(function(a, b){  // 数字排序，从小到大
    return a-b;
})
let arr = [25, 5, 3, 25];
arr.sort((a,b) => a-b);  // [3, 5, 15, 25]
```

#### 8、遍历数组

1. <code>forEach()</code>
2. <code>map()</code>
3. <code>filter()</code>   &nbsp;&nbsp;&nbsp;&nbsp;返回满足条件的所有 item 组成的数组
4. <code>some()</code>   &nbsp;&nbsp;&nbsp;&nbsp;只要有一项是 true，就返回 true
5. <code>every()</code>   &nbsp;&nbsp;&nbsp;&nbsp;每一项都是 true，才返回 true
6. <code>for ... of</code>  &nbsp;&nbsp;&nbsp;&nbsp;（es6）

```js
forEach(function(item,idx,arr){ })  // 遍历数组，跟 for循环没多大区别
 * item 数组中每一项     idx 数组索引    arr 整个数组的引用

map(function(item,idx,arr){return })  // 返回一个与原数组长度相等的数组

filter(function(item,idx,arr){return }) // 返回满足条件的所有 item 组成的数组

some(function(item,idx,arr){return }) // 返回布尔值
 *  函数对任何一项返回true，则返回true

every(function(item,idx,arr){return }) // 返回布尔值
 *  函数对每一项返回true，才返回true，有一个false就直接返回false
 *  空数组  返回 true

for(var item of arr){ } // item代表的是数组的每一项
```

#### 9、判断数组中是否存在某个值

1. <code>indexOf(key[,startIdx])</code>  &nbsp;&nbsp;&nbsp;&nbsp;查找key在数组中的索引，从 startIdx 开始查找

  ```js
  arr.indexOf(key) != -1  // 说明数组中存在key，即等于它的索引
  或 arr.indexOf(key) >= 0 
  ```

2. <code>lastIndexOf()</code>  &nbsp;&nbsp;&nbsp;&nbsp;查找指定元素在数组中的最后一个位置

  ```js
  let arr = [1,2,3,4,2,8];
  arr.lastIndexOf(2);  // 4  （2最后一次出现的索引）
  ```

3. <code>includes()</code>    &nbsp;&nbsp;&nbsp;&nbsp;判断一个数组是否包含一个指定的值，包含则返回true（es7）

  ```js
  let arr = [1,2,true,"江"];
  arr.includes(2);  // true
  ```

#### 10、在数组中查找符合条件的元素

1. <code>find()</code>   &nbsp;&nbsp;&nbsp;&nbsp;返回结果为查找到的元素（没有符合元素，返回 undefined）
2. <code>findIndex()</code>   &nbsp;&nbsp;&nbsp;&nbsp;返回索引值（没有符合条件的元素，返回 -1）

```js
const myArr = [1,2,3,4,5,6];
var v = myArr.find((value,index,arr)=>{
    return index==4
});
console.log(v); // 5

var i = myArr.findIndex((value,index,arr)=>value==4);
console.log(i); // 3
```

#### 11、归并方法

1. <code>reduce(fn[,initVal])</code>  &nbsp;&nbsp;&nbsp;&nbsp;迭代数组的所有项，构建一个最终返回值
2. <code>reduceRight(fn[,initVal])</code>  &nbsp;&nbsp;&nbsp;&nbsp;迭代数组的所有项，构建一个最终返回值
    * fn(pre, current, idx, arr){}
    * 4 个参数：上一个归并值、当前项、当前项的索引和数组本身
    * 如果没有 initVal 参数，第一次迭代将从数组的第二项开始，因此传给归并函数的第一个参数是数组的第一项，第二个参数是数组的第二项
    * reduce 是从第一项到最后一项；reduceRight 是从最后一项到第一项

```js
// 累加数组中所有数值
let values = [1, 2, 3, 4, 5]; 
let sum = values.reduce((prev, cur, index, array) => prev + cur); // 15
```

#### 12、数组扁平化

<code>Array.flat(depth)</code> &nbsp;&nbsp;&nbsp;&nbsp;提供了将一组数组项串联成一个全新的数组并在函数完成后返回新数组的能力

* 如果原始数组包含一个或多个嵌套数组结构，则此参数决定函数将多少数组层压扁为单个层，默认值为 1
* flat() 函数不会以任何方式改变原始数组中的任何普通或嵌套数组，因此在使用该函数之前无需维护这些数组的状态，flat() 函数唯一会改变的数组是函数完成后返回的全新数组，它只是使用原始数组的所有内容构建的
* flat() 函数将删除原始数组中存在的所有空值

```js
var array1 = [1, 2, [3, 4], [[5, 6]], [[[7, 8]]], [[[[9, 10]]]]];
var array2 = array1.flat(); // 默认为 1
// array2: [1, 2, 3, 4, [5, 6], [[7, 8]], [[[9, 10]]]]

var array3 = array1.flat(2);
// array3: [1, 2, 3, 4, 5, 6, [7, 8], [[9, 10]]]

var array4 = array1.flat(Infinity); // 无限深度
// array4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var array1 = [1, , 3, , 5];
var array2 = array1.flat(); // 删除空值
// array2: [1, 3, 5]
```

### 四、拓展

#### 1、两数组的交集

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```

#### 2、根据某变量生成树结构

```js
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }];
const nestedComments = nest(comments); 
// [{ id: 1, parent_id: null, children: [...] }]
```

#### 3、扁平数组结构转树结构

```js
function arrayToTree(items, first = 0, link = 'pid') {
  const result = [];   // 存放结果集
  const itemMap = {};  // 
  for (const item of items) {
    const id = item.id;
    const pid = item[link];

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem =  itemMap[id];
    if (pid === first) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result;
}
```
