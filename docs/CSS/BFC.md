# BFC

---
> BFC 是 Block Formatting Context 的缩写，即块格式化上下文。BFC是CSS布局的一个概念，是一个环境，里面的元素不会影响外面的元素。

<strong class="str">布局规则</strong>：

Box是CSS布局的对象和基本单位，页面是由若干个Box组成的。元素的类型和display属性，决定了这个Box的类型。不同类型的Box会参与不同的Formatting Context。

<strong>创建</strong>：浮动元素 display：inline-block position:absolute

<strong>应用</strong>：

1. 分属于不同的BFC时,可以防止margin重叠
2. 清除内部浮动
3. 自适应多栏布局

#### BFC 块级格式化上下文

>1. 每一个BFC区域只包括其子元素，不包括其子元素的子元素。
>2. 并不是所有的元素都能成为一块BFC区域，只有当这个元素满足条件的时候才会成为一块BFC区域
>3. 每一个BFC区域都是独立隔绝的,互不影响！

#### 触发BFC的条件（满足以下任意一个条件）

>1. body根元素
>2. 设置浮动，不包括none
>3. 设置定位，absoulte或者fixed
>4. 行内块显示模式，inline-block
>5. 设置overflow，即hidden，auto，scroll
>6. 表格单元格，table-cell
>7. 弹性布局，flex
