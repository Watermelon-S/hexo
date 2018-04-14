---
title: 页面加载loading动画
date: 2016-12-28 14:42:19
categories:	技术
tags:
 - JavaScript
photos: 
 - "http://ogb8wavl2.bkt.clouddn.com/default-image-6.jpg"
---
### 主题思路
<blockquote class="blockquote-center">
	页面是自上至下开始加载的,所以加载的动画要在其他dom加载之前开始,
	把要展示的东西放到head里面先加载就好了。
	具体步骤内容看下文
</blockquote>

### 需要准备

CSS3样式 或者 GIF图 都可以

**相关文章阅读**

[纯CSS3炫酷loading加载动画特效](http://www.htmleaf.com/css3/css3donghua/201503301596.html)

<h4 data-type="HTML">HTML</h4>
```html
	<head>
		<!-- 将下面js放入页面 head 里的尾部 -->
		<link rel="stylesheet" type="text/css" href="loading.css">
		<script type="text/javascript">
		    //动画需要的 HTML
		    var _LoadingHtml = `<div class="xxx">...</div>`;

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
					$('div').fadeOut(1500);
		    	}  
		    }
		</script>
	</head>
```