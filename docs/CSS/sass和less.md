# sass 和 less

---
##### 相同：

1. 混入 ---- class中的class
2. 参数混入 ---- 可以传递参数的class，就像函数一样
3. 嵌套规则 ---- class中嵌套class，从而减少重复的代码
4. 运算 ---- css中的数学运算
5. 颜色功能 ---- 可以编辑你的颜色
6. 命名空间 ---- 样式分组，从而方便被调用
7. 作用域 ---- 局部修改样式
8. JavaScript表达式 ---- 在css中使用JavaScript表达式赋值

##### 不同：

1. less是基于JavaScript，是在客户端处理的；sass是基于Ruby的，是在服务端处理的
2. 变量在less中用 @ ，在sass中用 $
3. sass有  
  if 条件结构：  
  &nbsp;&nbsp;&nbsp;&nbsp;@if 条件 {}  
  &nbsp;&nbsp;&nbsp;&nbsp;@else {}  
  for 循环结构  
  while 循环结构  
  each 循环变量
