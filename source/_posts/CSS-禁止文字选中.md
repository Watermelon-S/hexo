---
title: CSS 禁止文字选中
date: 2017-01-06 14:52:34
tags:
 - CSS
photos: 
 - "https://i.loli.net/2018/04/27/5ae2e824e0083.jpg"
---
### 现象
<blockquote class="blockquote-center">
	html中可能有些地方不想让用户复制文字，或是用a标签做了个点击按钮，点快的时候文字会被选中。
</blockquote>

### 解决方案：

> 不同的浏览器设置的内容不一样，user-select不是一个W3C的标准，浏览器的支持不完整，需要对不同的浏览器进行调整。
> user-select有2个值（none表示不能选中文本，text表示可以选择文本）

<h4 data-type="CSS">CSS</h4>
```css
body{
	-moz-user-select:none;/*火狐*/

	-webkit-user-select:none;/*webkit浏览器*/

	-ms-user-select:none;/*IE10*/

	-khtml-user-select:none;/*早期浏览器*/

	user-select:none;
}
```
<h4 data-type="HTML">HTML</h4>
```html
	<p>我不可以被选中</p>
```
#### Demo