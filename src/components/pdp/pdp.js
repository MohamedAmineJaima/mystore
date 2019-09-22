export default function () {

  (function($) {

	  $('.owl-carousel.pdp_carousel').owlCarousel({
	  	// Enable thumbnails
	    thumbs: true,
	    thumbImage: true,
	    // Class that will be used on the thumbnail container
	    thumbContainerClass: 'owl-thumbs',
	    // Class that will be used on the thumbnail item's
	    thumbItemClass: 'owl-thumb-item',
	  	loop: false,
	    margin: 0,
	    items: 1
	  });

	  $('.pdp_collapse-item').on('click', function() {
	  	if($(this).hasClass('hide')) {
	  		$('.pdp_collapse-item').addClass('hide');
	  		$('.pdp_collapse-item + .pdp_collapse-content').addClass('d-none');
	  		$(this).closest('.pdp_collapse-item').removeClass('hide');
	  		$(this).closest('.pdp_collapse-item').next('.pdp_collapse-content').removeClass('d-none');
	  	} else {
	  		$('.pdp_collapse-item').addClass('hide');
	  		$('.pdp_collapse-item + .pdp_collapse-content').addClass('d-none');
	  	}
	  });

  })(jQuery);
};