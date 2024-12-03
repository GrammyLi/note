CSS
问： 简单说说浏览器的渲染流程

- 当浏览器的网络线程收到 html 文档后，会产生一个【渲染任务】，并将其传递给【渲染主线程】的消息队列，在事件循环机制下，取出渲染任务，开启【渲染流程】，流程主要分为 8 个：
  主线程：
  - html 文档解析 parse
    解析的过程中遇到 HTML 元素，就会解析 HTML 元素生成 DOM 树
    解析的过程中遇到 style 标签、link 元素、行内样式等 CSS 样式，会解析 CSS 生成 CSSOM 树
    - CSS 解析不会阻塞 HTML 解析：下载和解析 CSS 的工作是在预解析线程中进行的。
    - JS 会阻塞 HTML 解析：JS 代码可能会操作 DOM 元素或者 CSS 样式，所以 DOM 树的生成必须暂停
  - 样式计算 style
    主线程遍历得到的 DOM 树，为每一个节点计算出它最后的样式，例如：red 变成 rgba 格式，em 变成 px
  - 布局 layout
    主线程遍历得到的 DOM 树，计算每一个节点的几何信息
  - 分层 layer
    主线程会用一套复杂的策略对整个布局树进行分层，将来某一层改变之后只会修改这一层就行了，提高效率
  - 绘制 paint
    主线程会为每一个层单独产生绘制指令，用于表示这一层的内容该如何绘制出来

---

主线程将每个图层的绘制信息交给合成线程，接下来的三个阶段，是由合成线程完成 - 分块 tilling
将每一层进行分块，为了多线程操作 - 光栅化 raster
确定像素的位置信息 - 画 draw
合成线程拿到每个层每个块的位图后，确定每个位图应该画到那个位置以及考虑到旋转、缩放等变形，变形发生在合成线程，这也是要使用 transform 效率高的原因
每一个阶段的输出都会作为下一个阶段的输入，形成生产流水线

问： 什么是回流（重排） reflow
reflow 的本质就是重新计算 layout（布局）树
在获取元素属性的时候，可能会造成回流

问： 什么是重绘 repaint
repaint 的本质就是重新根据分层信息计算了绘制指令，所以重排一定重绘

问： 为什么 transform 效率高
因为 transform 是在浏览器渲染流程的最后一步（draw）里面实现的，几乎不会影响主线程的渲染

问： 如何减少回流重绘

- 尽量使用 CSS 样式的简写方式
- 尽量不要在 for 循环中获取元素的属性
- 尽量避免使用 table 布局（一旦触发了回流，table 中的所有元素都回流）
- 批量修改元素样式，比如用 class

问： addEventListener 有那些参数

- el 事件对象
- type 事件类型
- listener 事件处理函数
- useCapture （可选）可以是 boolean 也可以是对象
  - {
    capture: false // === useCapture
    once: false // 是否只监听一次
    passive: false // 是否阻止冒泡
    }

问： HTML 的 DOCTYPE 的作用
用于声明当前 HTML 的版本，用来告知浏览器文档使用哪种 HTML 和 XHTML 规范来解析文档
如果不写，浏览器会以老旧的”怪异模式“去渲染页面，不同的浏览器下显示的效果不一致

问： e.target 和 e.currentTarget 的区别

- e.target 是事件的真正发生者，即点击的元素
- e.currentTarget 事件绑定的元素

问： 如何获取浏览器的内核

- navigator.appCodeName

问： 浏览器下载资源是并行的还是串行的

- 是并行的，同时可以有 6 个

问： webp 有了解过吗

- 用于更好的展示有损和无损的压缩图片

问： line-height: 120% 和 line-height: 1.2 的区别

- 都是指该元素的字体大小的 120%，但是 line-height: 1.2 能够继承，即父元素设置了之后，子元素也等于是有 line-height: 1.2

#### 1、介绍一下 BFC

BFC（BLOck Floating Context）块级格式化范围，指一个独立的渲染区域，不受外界干扰也不干扰外界，可以解决「高度坍塌」，「外边距重叠」等问题。
触发 BFC 的条件：
1.float 的值不为 none。
2.position 的值不为 static 或者 relative。
3.display 的值是 inline-block、table-cell、flex、table-caption 或者 inline-flex
4.overflow 的值不为 visible
在使用 flex 布局时，通常不需要额外创建 BFC 来处理子元素的外边距重叠问题，因为 flex 布局本身已经提供了有效的解决方案

#### 2、display、visibility、opacity 的区别

display: none 元素不会被渲染，但是元素本身还在，不占位，不可点击
visibility: hidden 元素不会被渲染，元素本身还在，占位，不可点击
opacity: 0 元素不会被渲染，元素本身还在，占位，可点击

  <!-- 继承性 -->

display、opacity，非继承性
visibility 继承（即子元素设置 visible， 也可以显示出来）

  <!-- 继承性 -->

display 文档回流
opacity、visibility 重绘，性能消耗较小

#### 3、设置多行文本省略

  <!-- CSS -->

overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
text-overflow: ellipsis;
white-space: nowrap;

  <!-- JS -->

计算高度、宽度，超出则截取

#### 4、居中为什么使用 transform 而不是使用 marginTop，marginLeft

因为 transform 属于合成属性，对于合成属性，浏览器会将被动画的元素放在一个独立的层进行动画，而不对整个页面进行重绘，从而提高性能，而 marginTop，marginLeft 属于布局属性，每次元素发生变化时，浏览器会对整个页面进行重绘、重拍，对性能有一定的影响

#### 5、transition 和 animation 都有哪些属性

  <!-- transition -->

    property 需要过度的属性
    duratiion 动画持续的时间
    timming-function 动画的缓动效果
        linear：均匀的速度
        ease：缓慢启动，然后加速
        ease-in：缓慢启动
        ease-out：缓慢结束
        ease-in-out：组合 ease-in 和 ease-out
    delay 动画延迟的时间

  <!-- animation -->

    @keyframes name {} 动画名称
     duratiion 动画持续的时间
     delay 动画延迟的时间
     times 动画播放次数

#### 6、设置一个三角形

.demo {
width: 0;
height: 0;
border: 10px solid red;
border-left-color: transparent;
border-right-color: transparent;
border-top-color: transparent;
}

#### 7、清除浮动

主要是为了解决元素浮动影响排列的问题，清除浮动的方法有：
1、父元素设置高度
2、父元素设置 overflow: hidden, 触发 BFC
3、::after 追加一个伪元素， display: block; clear: both;

#### 8、z-index 什么时候会失效

父元素设置 position: relative
元素即设置了 float 又设置了 z-index

#### 9、CSS 的加载会造成阻塞吗

CSS 不会阻塞 dom 的解析，但是会阻塞 dom 的渲染，会阻塞后面的 js 执行
解决方式：
1、使用 CDN
2、CSS 压缩， webpake 压缩 gzip
3、合理使用缓存，cache-control expirse
4、减少 http 请求数， 将多个 css 文件合并 或者写成内敛样式（但是不能缓存）

#### px、em、rem、rpx 的区别

px 是绝对单位
rpx 是绝对单位，是小程序独有的单位
em 和 rem 是相对单位，em 是相对于父元素 font-size，rem 是相对于根元素的 font-size，默认是 16px
rem 在移动端项目中，配合 media 媒体查询实现在屏幕尺寸发生变化的时候，控制根节点的字体大小，从而实现响应式
vw 项目中，也是同样的原理
@media (min-width: 768px) {
html {
font-size: 100px;
}
}

#### 重排和重绘

重绘：元素外观发生变化，但是布局没有改变，重新绘制的过程
重排：dom 发生变化影响元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在指定的位置的过程
重绘不一定重排，重排一定重绘
