---
title: JS控制页面加载实现loading动画效果
date: 2016-12-28 14:42:19
categories:	技术
tags:
 - JavaScript
---

<blockquote class="blockquote-center">
主题思路,页面是自上至下开始加载的,所以加载的动画要在其他dom之间开始,把要展示的东西放到head里面先加载就好了。
具体步骤内容看下文
</blockquote>

<!--more-->

> ## 简洁明了的教程 直接开始

### 需要准备

CSS3 loading样式 或者GIF图 都可以

**相关文章阅读**

* [纯CSS3炫酷loading加载动画特效](http://www.htmleaf.com/css3/css3donghua/201503301596.html)


### HTML 部分

```
	<head>
		<!-- 将下面js放入页面 head 里的尾部,也就是最下方 -->
		<link rel="stylesheet" type="text/css" href="loading.css">
		<script type="text/javascript" src='js/loading.js'></script>
	</head>

```
### JavaScript 部分 loading.js内容

```
    var _LoadingHtml = '此位置写loading显示的内容 如：<div id='XX'>...</div>'
    //呈现loading效果 
    document.write(_LoadingHtml);  

    //监听加载状态改变  
    document.onreadystatechange = completeLoading; 

    //加载状态为complete时移除loading效果  
    function completeLoading() { 

		//  uninitialized - 还未开始载入
		//  loading - 载入中
		//  interactive - 已加载，文档与用户可以开始交互
		//  complete - 载入完成

    	if (document.readyState == "complete") {
			$('#loading').fadeOut(1500);
    	}  
	}  

```