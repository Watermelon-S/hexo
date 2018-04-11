---
title: Hello World
date: 2018-04-06 14:52:34
tags:
 - CSS
photos: 
 - "http://ogb8wavl2.bkt.clouddn.com/hello-world.jpg"
---

### 测试内容

<h4 data-type="CSS">CSS</h4>
```css
.el {
  transition: max-height 0.5s;
  overflow: hidden;
  max-height: 0;
}
.trigger:hover > .el {
  max-height: var(--max-height);
}
```
<h4 data-type="HTML">HTML</h4>
```html
<div class="trigger">
    <p>Hover me to see a height transition.</p>
    <div class="el">
        <p>Welcome to [Hexo](https://hexo.io/)!</p>
        <p>This is your very first post.</p>
        <p>Check [documentation](https://hexo.io/docs/) for more info.</p>
        <p>If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).</p>
    </div>
</div>
```
<h4 data-type="JavaScript">JavaScript</h4>
```JavaScript
var el = document.querySelector('.el');
var height = el.scrollHeight;
el.style.setProperty('--max-height', height + 'px');
```
#### Demo