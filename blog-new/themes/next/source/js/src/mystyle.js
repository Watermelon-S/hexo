
$(document).ready(function () {
	$(document).pjax('a', '#content', { fragment: ('#content'), timeout: 10000 });
	$(document).on('pjax:start', function(xhr, options) { 
		NProgress.start();
	});
	$(document).on('pjax:end', function() {
	  	NProgress.done();
	  	NexT.motion.middleWares.postList(NexT.motion.integrator);
	    $('.archive-year').velocity('transition.slideLeftIn');     
	    $('#home-sign').velocity('transition.slideDownIn', {duration: 400});
	});

	
	if($('.header-bgimg').css('display') === 'block'){
		$('.header-bgimg').velocity('transition.slideDownIn', {duration: 400});
	}
	
	$('#menu li').click(function(){
		$(this).addClass('menu-item-active').siblings('li').removeClass('menu-item-active');
	});

	var sign = new Number(),k = true;
	// $("#content").mCustomScrollbar({
	// 	theme : "dark-thick",
	// 	scrollInertia: 2500,
	// 	callbacks:{
	// 		whileScrolling:function(){
	// 		    var THRESHOLD = 80;
	// 		    var $top = $('.back-to-top');
	// 			$top.toggleClass('back-to-top-on', this.mcs.draggerTop > THRESHOLD);
	// 			$top.on('click', function () {
	// 		      	$("body").mCustomScrollbar("scrollTo","top",{
	// 				    scrollInertia:2000
	// 				});
	// 		    });
	// 		    $(scrollpercent).find('span').text(this.mcs.topPct);
	// 			if(k){
	// 				if(this.mcs.draggerTop > sign){
	// 					// console.log('隐藏',sign,this.mcs.draggerTop);
	// 					k = false;
	// 					$('.header-inner').velocity({
	// 				    		top:"-65px;"
	// 				    	}, 
	// 				    	{ 
	// 				    		duration: "fast" 
	// 			    	});
	// 				}
	// 			}
	// 			else{
	// 				if(this.mcs.draggerTop < sign){
	// 					// console.log('显示',sign,this.mcs.draggerTop);
	// 					k = true;
	// 					$('.header-inner').velocity({
	// 				    		top:"0px;"
	// 				    	}, 
	// 				    	{ 
	// 				    		duration: "fast" 
	// 			    	});
	// 				}
	// 			};
	// 			if(Math.abs(this.mcs.top) > 460){
	// 				$(".post-toc-wrap").css("top",Math.abs(this.mcs.top)-460+'px');
	// 			}
				
	// 		},
	// 		onScrollStart:function(){
	// 	        sign = this.mcs.draggerTop;
	// 	    },
	// 		onUpdate:function(){
	// 	        $('#posts.posts-expand').toggleClass('is-index', $('#posts.posts-expand').find('article').length > 1);
	// 	        $('#menu .menu-item-archives').toggleClass('menu-item-active',!$('#posts.posts-expand').hasClass('is-index'));
	// 	        $('#menu .menu-item-home').toggleClass('menu-item-active',$('#posts.posts-expand').hasClass('is-index'));
	// 	        $('.post-toc a').on('click', function (e) {
	// 	        	e.preventDefault();
	// 	        	let _id = $(this).attr('href');
	// 	        	$("body").mCustomScrollbar("scrollTo",$(_id));

	// 	        });
	// 	    }
	// 	}
	// });
	
});
