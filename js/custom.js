$(document).ready( function() {
	if($('.slick-carousel').length > 0) {
		$('#carousel-hero .carousel-inner').slick({
			speed: 800,
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 2500,
			prevArrow: '<button type="button" data-role="none" class="carousel-control left slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="carousel-control right slick-next">Next</button>',
		});
	}
	if($('.media-carousel').length > 0) {
		$('.media-carousel').slick({
			dots: true,
			prevArrow: '<button type="button" data-role="none" class="btn slick-prev">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="btn slick-next">Next</button>'
		});
	}
	// indicate mobile browser
	var ua = navigator.userAgent,
	isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
	if (isMobileWebkit) {
		$('html').addClass('mobile');
	}
	// ease click
	$('.self').on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1500, 'easeInOutExpo');
		return false;
	});
	$('.stu').on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1500, 'easeInOutExpo');
		return false;
	});
	$('.edu').on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1500, 'easeInOutExpo');
		return false;
	});
	$('.pap').on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1500, 'easeInOutExpo');
		return false;
	});
	// goto Top
	$('.js-gotop').on('click', function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $('html').offset().top
		}, 500, 'easeInOutExpo');
		return false;
	});
	$(window).scroll(function(){
		var $win = $(window);
		if ($win.scrollTop() > 200) {
			$('.js-top').addClass('active');
		} else {
			$('.js-top').removeClass('active');
		}
	});

});
window.onload=function(){$('.locations').html("<h3 class=\"footer-heading\">VIEW MAP<\/h3><script type=\"text/javascript\" id=\"clustrmaps\" src=\"//cdn.clustrmaps.com/map_v2.js?d=&cl=d1d1d1&co=49494b&ct=ffffff&cmo=e04300&cmn=218491&w=a\"><\/script>");setTimeout(function(){$('#clustrmaps-widget-v2').attr("target","_blank");},2000);};
jQuery(window).load(function() {
	"use strict";
		// will first fade out the loading animation
	jQuery(".status").fadeOut();
		// will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
});