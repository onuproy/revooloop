jQuery(document).ready(function(){ 
	
	jQuery(function () {
		jQuery("#tabs").tabs();
	});

	jQuery(function () {
		jQuery("#tabs_2").tabs();
	});


	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		autoplay:false,
		dots:true,
		items:1,
	});
	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area_2').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: false,
		dots: true,
		items: 1,
	});
	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area_3').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: false,
		dots: true,
		items: 1,
	});
	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area_4').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: false,
		dots: true,
		items: 1,
	});
	// Hero owlCarousel
	jQuery('.tabs_owl_slider_area_5').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: false,
		dots: true,
		items: 1,
	});


	
	// Hero owlCarousel
	// jQuery('.').owlCarousel({
	// 	loop: true,
	// 	margin: 25,
	// 	nav: true,
	// 	autoplay: false,
	// 	navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	// 	dots: false,
	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 		},
	// 		576: {
	// 			items: 2,

	// 		},
	// 		768: {
	// 			items: 2,
	// 		},
	// 		1200: {
	// 			items: 3,
	// 		}
	// 	}
	// });






   //Dropdown menu 
   jQuery('.country_dropdown').click(function () {
	jQuery('.country_dropdown span').toggleClass('active_arrow');
		return false;
	});
	jQuery('.country_dropdown ul li').click(function () {
		jQuery('.country_dropdown span').removeClass('active_arrow');
		return false;
			
	});

	

		
		
	

});