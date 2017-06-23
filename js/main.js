jQuery(function($) {

	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	$('#slider_home').slick({
		dots:false,
	});

	//Widget-slider
	$('.widget_slide').slick({
		dots:true,
	});

	//customer-slider
	$('#customers_slide').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	//customer-slider
	$('#partner_slide').slick({
		dots: true,
		slidesToShow: 6,
		slidesToScroll: 3,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	/*Nav icon mobile*/
	$('#navtop_icon').click(function(){
		$(this).toggleClass('open');
		$('.navtop_collapse').toggleClass('open');
		$('.overlay').toggleClass('open');
		$('html , body').toggleClass('fixScroll');
	});

	/*Dropdown Mobile*/
/*	$('.arrowDown').click(function () {
		var abc = $(this).next('.submenu');
		$(this).toggleClass('xoay');
		abc.toggleClass('show');

	});*/

	/* When user clicks outside */
	$(".overlay").click(function() {
		$(this).toggleClass('open');
		$("#nav-icon").toggleClass("open");
		$(".navTop").toggleClass("open");
		$('html , body').toggleClass('fixScroll');
	});

});


