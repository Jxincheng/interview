# mask

---

mask 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域。

```css
/* Keyword values 关键字值 */
mask: none;

/* Image values */
mask: url(mask.png);                       /* 使用位图来做遮罩 */
mask: url(masks.svg#star);                 /* 使用 SVG 图形中的形状来做遮罩 */

/* Combined values 组合的值 */
mask: url(masks.svg#star) luminance;       /* Element within SVG graphic used as luminance mask */
mask: url(masks.svg#star) 40px 20px;       /* 使用 SVG 图形中的形状来做遮罩并设定它的位置：离上边缘 40px，离左边缘 20px */
mask: url(masks.svg#star) 0 0/50px 50px;   /* 使用 SVG 图形中的形状来做遮罩并设定它的位置和大小：长宽都是 50px */
mask: url(masks.svg#star) repeat-x;        /* 使用SVG图形中的形状在水平方向重复来做遮罩 */
mask: url(masks.svg#star) stroke-box;      /* 使用SVG图形中的形状延伸到由笔画包围的方框来做遮罩 */
mask: url(masks.svg#star) exclude;         /* 使用SVG图形中的形状并使用不重叠的部分与背景结合来做遮罩 */

/* Global values 全局值 */
mask: inherit;
mask: initial;
mask: unset;
```

### mask-image 设置遮罩图片的路径

### mask-mode 设置遮罩图片的模式

* <strong class="str">alpha</strong>  此关键字指示应使用掩码层图像的透明度（阿尔法通道）值作为掩码值。
* <strong class="str">luminance</strong> 此关键字指示掩膜层图像的亮度值应用作掩码值。
* <strong class="str"><font color="crimson">match-source</font></strong> 根据资源的类型自动采用合适的遮罩模式。（默认值）

### mask-position 设置遮罩图片的位置

* 单个值：top/bottom/left/right/center
* 垂直和水平方向两个值，例 mask-position: top left;
* 各类数值，例：
  * mask-position: 30% 50%;
  * mask-position: 10px 5rem;
* x轴和y轴方向，例：
  * mask-position-x: 30px;
    mask-position-y: 10px;

### mask-size 设置遮罩的大小

* auto（默认值）
* cover 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小
* contain 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小
* 支持各类数值，例：

```css
/* 一个值 */
mask-size: 50%;
mask-size: 3em;
mask-size: 12px;
/* 两个值 */
mask-size: 50% auto;
mask-size: 3em 25%;
mask-size: auto 6px;
mask-size: auto auto;
```

### mask-repeat 设置遮罩图片的重复性

* <strong class="str">repeat-x</strong> 水平x平铺
* <strong class="str">repeat-y</strong> 垂直y平铺
* <strong class="str"><font color="crimson">repeat</font></strong> 默认值，水平和垂直平铺
* <strong class="str">no-repeat</strong> 不平铺，会看到就一个遮罩图形孤零零的挂在左上角
* <strong class="str">space</strong> 表示遮罩图片尽可能的平铺同时不发生任何剪裁
* <strong class="str">round</strong> 表示遮罩图片尽可能靠在一起没有任何间隙，同时不发生任何剪裁。这就意味着图片可能会有比例的缩放

```css
/* 两个值：水平 垂直 */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;
```

### mask-origin

### mask-clip 设置区域，会被遮罩图片影响

* content-box
* padding-box
* <strong class="str"><font color="crimson">border-box</font></strong> 默认值
* margin-box
* fill-box
* stroke-box
* view-box

### mask-composite 设置遮罩图层的组合操作

* <strong class="str"><font color="crimson">add</font></strong> 遮罩累加（默认值）
* subtract 遮罩相减。也就是遮罩图片重合的地方不显示。意味着遮罩图片越多，遮罩区域越小。
* intersect 遮罩相交。也就是遮罩图片重合的地方才显示遮罩
* exclude 遮罩排除。也就是后面遮罩图片重合的地方排除，当作透明处理
