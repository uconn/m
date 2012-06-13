/* 
* Adding modernizr tests to check for ios
*/
Modernizr.addTest('ipad', function () {
  return !!navigator.userAgent.match(/iPad/i);
});

Modernizr.addTest('iphone', function () {
  return !!navigator.userAgent.match(/iPhone/i);
});

Modernizr.addTest('ipod', function () {
  return !!navigator.userAgent.match(/iPod/i);
});

Modernizr.addTest('appleios', function () {
  return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
});


Modernizr.addTest('android', function () {
  return !!navigator.userAgent.match(/Android/i);
});


/*
* Add extra html classes based on the modernizr tests
*/
if(Modernizr.ipad){$('html').addClass('ipad');}
if(Modernizr.android){$('html').addClass('android');}

$(document).ready(function(){
	var touchSupport = $('html').hasClass('touch');
	var clickAction;	
	clickAction = touchSupport ? 'touchstart' : 'click';
	
	$('.nav-main a').bind(clickAction,function(){
		// if this is active
			if($(this).hasClass('link-active')) {
				$('#popdown').hide();
				return;
			}
	
		// if not already active
			if(!$(this).hasClass('link-active')){
				$(this).siblings('.link-active').removeClass('link-active');
				$('#popdown').show();
				return;
			}
	});
	
	$('.nav-main a:not(.link-active)').bind(clickAction,function(){
		var targ = $(this).attr('data-target');
		targ = $("#"+targ);
		targ.siblings().hide();
		targ.show();
	});
	
	 $('a:not(.link-active)').live(clickAction, function(){
		$(this).parents('ul').find('.link-active').removeClass('link-active');
		$(this).addClass('link-active');
	});
	
	$('a.link-active').live(clickAction, function(){
		$(this).removeClass('link-active');
	});
	
	$('.android #footer-main').prepend(' <p class="app_alert">For quick access from your Android device, add this page as a bookmark, then open your Bookmarks Menu, long-press the UConn Mobile bookmark, and select "Add to Home Screen."</p>');
	
});