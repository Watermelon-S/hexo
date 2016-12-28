// Cookie JS
function Cookie(key,value)
{
    this.key=key;
    if(value!=null)
    {
        this.value=escape(value);
    }
    this.expiresTime=null;
    this.domain=null;
    this.path="/";
    this.secure=null;
}
Cookie.prototype.setValue=function(value){this.value=escape(value);}
Cookie.prototype.getValue=function(){return (this.value);}

Cookie.prototype.setExpiresTime=function(time){this.expiresTime=time;}
Cookie.prototype.getExpiresTime=function(){return this.expiresTime;}

Cookie.prototype.setDomain=function(domain){this.domain=domain;}
Cookie.prototype.getDomain=function(){return this.domain;}

Cookie.prototype.setPath=function(path){this.path=path;}
Cookie.prototype.getPath=function(){return this.path;}

Cookie.prototype.Write=function(v)
{
    if(v!=null)
    {
        this.setValue(v);
    }
    var ck=this.key+"="+this.value;
    if(this.expiresTime!=null)
    {
        try
        {
            ck+=";expires="+this.expiresTime.toUTCString();;
        }
        catch(err)
        {
            alert("expiresTime参数错误");
        }
    }
    if(this.domain!=null)
    {
        ck+=";domain="+this.domain;
    }
    if(this.path!=null)
    {
        ck+=";path="+this.path;
    }
    if(this.secure!=null)
    {
        ck+=";secure";
    }
    document.cookie=ck;
}
Cookie.prototype.Read=function()
{
    try
    {
        var cks=document.cookie.split("; ");
        var i=0;
        for(i=0;i <cks.length;i++)
        {
            var ck=cks[i];
            var fields=ck.split("=");
            if(fields[0]==this.key)
            {
                this.value=fields[1];
                return (this.value);
            }
        }
        return null;
    }
    catch(err)
    {
        alert("cookie读取错误");
        return null;
    }
}

// Cookie 判断
var ck = new Cookie("HasLoaded"),_LoadingHtml; //每个页面的new Cookie名HasLoaded不能相同
if (ck.Read() == null) { //未加载过，Cookie内容为空
    // alert("首次打开页面");
    var dd = new Date();
    console.log(dd)
    dd.setDate(dd.getDate() + 0.025);
    console.log(dd)
    ck.setExpiresTime(dd); //过期时间
    ck.Write("true"); //设置Cookie。只要IE不关闭，Cookie就一直存在
    _LoadingHtml = "<div id='loading'><div class='loader'><div class='loader_overlay'></div><div class='loader_cogs'><div class='loader_cogs__top'><div class='top_part'></div><div class='top_part'></div><div class='top_part'></div><div class='top_hole'></div></div><div class='loader_cogs__left'><div class='left_part'></div><div class='left_part'></div><div class='left_part'></div><div class='left_hole'></div></div><div class='loader_cogs__bottom'><div class='bottom_part'></div><div class='bottom_part'></div><div class='bottom_part'></div><div class='bottom_hole'><!--lol--></div></div><p>loading</p></div><h1>Southveil Red</h1><h2>Welcome to my blog</h2></div></div>";
} else {
    // alert("页面刷新");
    _LoadingHtml = "<div id='loading'><div class='loader'><div class='loader_overlay'></div><div class='loader_cogs'><div class='loader_cogs__top'><div class='top_part'></div><div class='top_part'></div><div class='top_part'></div><div class='top_hole'></div></div><div class='loader_cogs__left'><div class='left_part'></div><div class='left_part'></div><div class='left_part'></div><div class='left_hole'></div></div><div class='loader_cogs__bottom'><div class='bottom_part'></div><div class='bottom_part'></div><div class='bottom_part'></div><div class='bottom_hole'><!--lol--></div></div><p>loading</p></div></div></div>";
}

//呈现loading效果 

document.write(_LoadingHtml);  

//监听加载状态改变  
document.onreadystatechange = completeLoading;  
  
//加载状态为complete时移除loading效果  
function completeLoading() { 
	// alert(document.readyState) ;
    if (document.readyState == "interactive") {  

		$('#loading').fadeOut(1500);
    }  
}  