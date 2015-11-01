/*
	* @package Barrister
	* @subpackage Barrister HTML
	* 
	* Template Scripts
	* Created by Tripples
		
	1.    	Style Switcher
	2.    	Fixed Header
	3.    	Parallax
	4.    	Parallax for Chrome
	5.		Main slideshow
	6.		Counter
	7.		Owl Carousel
	8.		Flex slider
	9.		Animation
	10.		Prettyphoto
	11.		Back to top
	
*/


	jQuery(function($) {
	"use strict";


	 /* ----------------------------------------------------------- */
	 /*  Style Switcher
	 /* ----------------------------------------------------------- */

		(function($) { "use strict";
			 $(document).ready(function(){
					 $('.style-switch-button').click(function(){
					 $('.style-switch-wrapper').toggleClass('active');
					 });
					 $('a.close-styler').click(function(){
					 $('.style-switch-wrapper').removeClass('active');
					 });
			});
		})(jQuery);


	 /* ----------------------------------------------------------- */
	 /*  Fixed header
	 /* ----------------------------------------------------------- */

		(function() {
				
				var docElem = document.documentElement,
					didScroll = false,
					changeHeaderOn = 100;
					document.querySelector( 'header' );
					
				function init() {
					window.addEventListener( 'scroll', function() {
						if( !didScroll ) {
							didScroll = true;
							setTimeout( scrollPage, 250 );
						}
					}, false );
				}
				
				function scrollPage() {
					var sy = scrollY();
					if ( sy >= changeHeaderOn ) {
						$('.top-bar').slideUp(300);
						$("header").addClass("header-fixed");
						
					}
					else {
						$('.top-bar').slideDown(300);
						$("header").removeClass("header-fixed");
						
					}
					didScroll = false;
				}
				
				function scrollY() {
					return window.pageYOffset || docElem.scrollTop;
				}
				
				init();
				
		})();


 		/* ----------------------------------------------------------- */
		/*  Parallax
		/* ----------------------------------------------------------- */
		function isScrolledIntoView(elem) {
				var docViewTop = $(window).scrollTop();
				var docViewBottom = docViewTop + $(window).height();
				var elemTop = $(elem).offset().top;
				return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
		}

		$.fn.parallax = function (options) {

				var windowHeight = $(window).height();

				// Establish default settings
				var settings = $.extend({
						speed  : 0.15,
						type   : 'background',  // background, transform,
				}, options);

				// Iterate over each object in collection
				return this.each(function () {

						// Save a reference to the element
						var $this = $(this);

						// Set up Scroll Handler
						$(window).on('scroll',function (e) {

								//e.stopImmediatePropagation();

								var scrollTop = $(window).scrollTop();
								var offset = $this.offset().top;
								var height = $this.outerHeight();

								// Check if above or below viewport
								if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
										return;
								}

								var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

								//console.log( yBgPosition );

								var transform = Math.round((scrollTop) * settings.speed);


								// Apply the Y Background Position to Set the Parallax Effect
								if (settings.type == 'background') {
										$this.css('background-position', 'center ' + -yBgPosition + 'px');
								}

								else if ((settings.type == 'transform')) {
										$this.css('-webkit-transform', 'translateY(' + transform + 'px)')
												.css('-moz-transform', 'translateY(' + transform + 'px)')
												.css('transform', 'translateY(' + transform + 'px)');
								}
						});
				});
		}

		$('#slideshow-wrapper').parallax({
				speed: 0.5,
				type : 'transform'
		});

		

		/* ----------------------------------------------------------- */
		/*  Parallax for Chrome
		/* -----------------------------------------------------------*/

		var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		if (isChrome)
		{

			var itemArr = $('.parallax');

			$(window).scroll(function()
			{
					var pos = $(window).scrollTop();
					var wh = window.innerHeight;

					$(itemArr).each(function(i, item){

							var p = $(item).position();
							var h = $(item).height();
							if (p.top + h > pos && p.top < pos+wh)
							{
									// items ir redzams
									var prc = (p.top - pos +h)/wh ;
									//console.log(prc);
									$(item).css({'background-position':'center '+prc+'%'});
							}

					});
			});

		}


	/* ----------------------------------------------------------- */
	/*  Main slideshow
	/* ----------------------------------------------------------- */

		 $('#main-slide').carousel({
				pause: true,
				interval: 100000,
		 });


	 /* ----------------------------------------------------------- */
	 /*  Counter
	 /* ----------------------------------------------------------- */

		$('.counter').counterUp({
		 delay: 10,
		 time: 1000
		});



	/* ----------------------------------------------------------- */
	/*  Owl Carousel
	/* ----------------------------------------------------------- */

		//Testimonial
		$("#testimonial-carousel").owlCarousel({
 
			navigation : true, // Show next and prev buttons
			slideSpeed : 600,
			pagination:false,
			singleItem:true
 
		});

		// Custom Navigation Events
		var owl = $("#testimonial-carousel");

		// Custom Navigation Events
		$(".next").click(function(){
			owl.trigger('owl.next');
		})
		$(".prev").click(function(){
			owl.trigger('owl.prev');
		})
		$(".play").click(function(){
			owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
		})
		$(".stop").click(function(){
			owl.trigger('owl.stop');
		})
		

	 	//Clients

		$("#client-carousel").owlCarousel({

			navigation : false, // Show next and prev buttons
			slideSpeed : 400,
			pagination: true,
			items : 5,
			rewindNav: true,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			stopOnHover:true,
			autoPlay:true

		});

		//Attorneys
		$(".attorneys").owlCarousel({

			navigation : true, // Show next and prev buttons
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			slideSpeed : 800,
			pagination:false,
			items : 4,
			rewindNav: true,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			stopOnHover:true

		});

		//Partners
		$(".partners").owlCarousel({

			navigation : true, // Show next and prev buttons
			navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			slideSpeed : 800,
			pagination:false,
			items : 4,
			rewindNav: true,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3],
			stopOnHover:true

		});

		//Slide
		 $("#slide-carousel").owlCarousel({

			 navigation : true, // Show next and prev buttons
			 navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			 slideSpeed : 800,
			 pagination:false,
			 items : 3,
			 rewindNav: true,
			 itemsDesktop : [1199,3],
			 itemsDesktopSmall : [979,2],
			 stopOnHover:true

		 });


	 /* ----------------------------------------------------------- */
	 /*  Flex slider
	 /* ----------------------------------------------------------- */

		//Second item slider
		$(window).load(function() {
			$('.flexSlideshow').flexslider({
				 animation: "fade",
				 controlNav: false,
				 directionNav: true ,
				 slideshowSpeed: 8000
			});
		});

		 
	 /* ----------------------------------------------------------- */
	 /*  Animation
	 /* ----------------------------------------------------------- */

		//Wow
		new WOW().init();


	 /* ----------------------------------------------------------- */
	 /*  Prettyphoto
	 /* ----------------------------------------------------------- */

		$("a[data-rel^='prettyPhoto']").prettyPhoto();


	 /* ----------------------------------------------------------- */
	 /*  Back to top
	 /* ----------------------------------------------------------- */

			 $(window).scroll(function () {
						if ($(this).scrollTop() > 50) {
								$('#back-to-top').fadeIn();
						} else {
								$('#back-to-top').fadeOut();
						}
				});
			// scroll body to 0px on click
			$('#back-to-top').click(function () {
					$('#back-to-top').tooltip('hide');
					$('body,html').animate({
							scrollTop: 0
					}, 800);
					return false;
			});
			
			$('#back-to-top').tooltip('hide');

});


