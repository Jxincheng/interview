# markdown（md）文件的示例及效果

---

## 一、标题

<strong class="str">示例：</strong>

    # 一级标题（h1）
    ## 二级标题（h2）
    ### 三级标题（h3）
    #### 四级标题（h4）
    ##### 五级标题（h5）
    ###### 六级标题（h6）

    一级标题（h1）
    ===
    二级标题（h2）
    ---

    # 一级标题（h1） #
    ## 二级标题（h2） ##
    ### 三级标题（h3） ###
    #### 四级标题（h4） ####
    ##### 五级标题（h5） #####
    ###### 六级标题（h6） #####

## 二、强调

<strong class="str">示例：</strong>

    *字体倾斜1*   _字体倾斜2_   **字体加粗3**   __字体加粗4__   ~~删除线~~

<strong class="str">效果：</strong>

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*字体倾斜1*
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*字体倾斜2*
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**字体加粗3**
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**字体加粗4**
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~~删除线~~

## 三、表格

<strong class="str">示例：</strong>

```
| 左对齐表格效果 | 右对齐表格效果 | 居中对齐表格效果 |
| :----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

<strong class="str">效果：</strong>

| 左对齐表格效果 | 右对齐表格效果 | 居中对齐表格效果 |
| :----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

## 四、代码框

<strong class="str">示例：</strong>

    `<div>单行</div>`

    ```注释（多行用3个）
    <div>多行</div>
    ```

<strong class="str">效果：</strong>

`<div>单行</div>`

```注释（多行用3个）
<div>多行</div>
```

## 五、无序列表

<strong class="str">示例：</strong>

    * 第一种写法1
    * 第一种写法2
    + 第二种写法1
    + 第二种写法2
    - 第三种写法1
    - 第三种写法2

<strong class="str">效果：</strong>

* 第一种写法1
* 第一种写法2
+ 第二种写法1
+ 第二种写法2
- 第三种写法1
- 第三种写法2

## 六、有序列表

<strong class="str">示例：</strong>

    1. 有序列表1
    2. 有序列表2
    3. 有序列表3

<strong class="str">效果：</strong>

1. 有序列表1
2. 有序列表2
3. 有序列表3

## 七、区块引用

<strong class="str">示例：</strong>

    > 区块引用
    >> 区块引用嵌套
    >>> 区块引用嵌套
<font color="red">注意： 可以嵌套很多层</font>

<strong class="str">效果：</strong>

> 区块引用
>> 区块引用嵌套
>>> 区块引用嵌套

## 八、分割线

<strong class="str">示例：</strong>

    ***
    -----
    ____
<font color="red">注意： 每个符号三个或者三个以上</font>

<strong class="str">效果：</strong>

***
-----
____

## 九、链接

<strong class="str">示例：</strong>

    第一种行内式：
    docsify[中文文档](https://docsify.js.org/#/zh-cn/)

    第二种参数式：
    [name]: https://docsify.js.org/#/zh-cn/ 'docsify'
    [支持中文]: https://docsify.js.org/#/zh-cn/ 'docsify'
    这是[name]，也是[支持中文]

<strong class="str">效果：</strong>

docsify[中文文档](https://docsify.js.org/#/zh-cn/)

[name]: https://docsify.js.org/#/zh-cn/ 'docsify'
[支持中文]: https://docsify.js.org/#/zh-cn/ 'docsify'
这是[name]，也是[支持中文]

## 十、图片

<strong class="str">示例：</strong>

    ![我是图片](https://docsify.js.org/_media/icon.svg "文档的logo")

<strong class="str">效果：</strong>

![我是图片](https://docsify.js.org/_media/icon.svg "文档的logo")
