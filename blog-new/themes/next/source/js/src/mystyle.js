
$(document).ready(function () {
	/*=============== init ===============*/
	fCodeInstantDisplay();
	fScrollInit();
	/*=============== pjax ===============*/
	$(document).pjax('a', '#content', { fragment: ('#content'), timeout: 10000 });
	$(document).on('pjax:start', function(xhr, options) { 
		fPjaxRollBack();
	});
	$(document).on('pjax:end', function(xhr, options) {
		fPjaxEndCallback(xhr);
	});
	
	if($('.header-bgimg').css('display') === 'block'){
		$('.header-bgimg').velocity('transition.slideDownIn', {duration: 400});
	}
});
function fScrollInit(){
	$("body").mCustomScrollbar({
		theme : "minimal-dark",
		scrollInertia: 250,
		callbacks:{
			whileScrolling:function(){
			    var THRESHOLD = 80;
			    var $top = $('.back-to-top');
				$top.toggleClass('back-to-top-on', this.mcs.draggerTop > THRESHOLD);
				$top.on('click', function () {
			      	$("body").mCustomScrollbar("scrollTo","top",{
					    scrollInertia:1000
					});
			    });
			}
		}
	});
	$(".highlight").mCustomScrollbar({
		theme : "minimal-dark",
		scrollInertia: 250,
		axis:"x"
	});
}
function fPjaxRollBack(){
	NProgress.start();
}
function fPjaxEndCallback(e){
	NProgress.done();
	fCodeInstantDisplay();
  	NexT.motion.middleWares.postList(NexT.motion.integrator);
    $('.archive-year').velocity('transition.slideLeftIn');
    $(".highlight").mCustomScrollbar({
		theme : "minimal-dark",
		scrollInertia: 250,
		axis:"x"
	});
    if ($(e.relatedTarget).hasClass('nav-item')) {
    	$("#menu-button").click();
    }
}
function fCodeInstantDisplay(){
    let sCSS,sHTML,sJS,PageCode,i,d,t,n,r,l;
	sCSS = $(".snippet .highlight.css .code").text(),
	sHTML = $(".snippet .highlight.html .code").text(),
	sJS = $(".snippet .highlight.javascript .code").text();
	PageCode = `<style>${sCSS}</style><body>${sHTML}</body><script type="text/javascript">${sJS}</script>`
	i = document.createElement('iframe'),
	i.src = URL.createObjectURL(new Blob([PageCode], {
	  	'type': 'text/html'
	}));
	d = document.createElement('div');
	d.className = "snippet-demo";
	d.appendChild(i);
	t = document.createElement("form");
    t.action = "https://codepen.io/pen/define",
    t.method = "POST",
    t.target = "_blank";
    n = document.createElement("input");
    n.type = "hidden",
    n.name = "data";
    r = document.createElement("button");
    r.classList = "btn is-large codepen-btn",
    r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>Edit on Codepen';
    l = {
    	title: $(".snippet > h3 > span").text(),
        css: sCSS.replace(/(\{|\;|\})/g,"$1\n"),
        html: sHTML ? sHTML.replace(/(\>)/g,"$1\n"): "",
        js: sJS ? sJS.replace(/(\;)/g,"$1\n"): ""
    };
    n.value = JSON.stringify(l),
    t.appendChild(n),
    t.appendChild(r),
    $("#Demo").after(d,t);
}
