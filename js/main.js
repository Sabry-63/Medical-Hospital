/*global $, AOS*/
$(function () {
	'use strict';
    $('.navbar-nav .nav-item .nav-link').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000);
    });
    
	$('.panel-heading').click(function (e) {
        e.preventDefault();
		$(this).addClass('active').parent().siblings().find('.panel-heading').removeClass('active');
	});
    
	AOS.init({
		disable: window.innerWidth < 767,
		duration: 1500
	});
    
	$('.counter').counterUp({
		delay: 50,
		time: 3000
	});
});