---
title: CSS 禁止文字选中
date: 2017-01-06 14:52:34
categories: 技术
tags:
 - CSS
---

<blockquote class="blockquote-center">

现象：html中可能有些地方不想让用户复制文字，或是用a标签做了个点击按钮，点快的时候文字会被选中，很丑，这个时候可以使用下面的方案禁止文字选中。

</blockquote>

<!--more-->


## 原因：鼠标点快了。

### 解决方案：

不同的浏览器设置的内容不一样，user-select不是一个W3C的标准，浏览器的支持不完成，需要对不同的浏览器进行调整。

```

body{

	-moz-user-select:none;/*火狐*/

	-webkit-user-select:none;/*webkit浏览器*/

	-ms-user-select:none;/*IE10*/

	-khtml-user-select:none;/*早期浏览器*/

	user-select:none;

}

```
user-select有2个值（none表示不能选中文本，text表示可以选择文本）