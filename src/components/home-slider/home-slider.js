export default function () {

  (function($) {

	$('.banner-carousel.owl-carousel').owlCarousel({
		autoplay: true,
	    loop: true,
	    dots: true,
	    margin: 10,
	    responsive: {
	        0: {
	            items: 1,
	        }
	    }
	});

	// Twitter: @mikedevelops

    // your custome placeholder goes here!
    var ph = $('.input--search').attr('placeholder'),
        searchBar = $('.input--search'),
        // placeholder loop counter
        phCount = 0;

    // function to return random number between
    // with min/max range
    function randDelay(min, max) {
      return Math.floor(Math.random() * (max-min+1)+min);
    }

    // function to print placeholder text in a
    // 'typing' effect
    function printLetter(string, el) {
      // split string into character seperated array
      var arr = string.split(''),
          input = el,
          // store full placeholder
          origString = string,
          // get current placeholder value
          curPlace = $(input).attr("placeholder"),
          // append next letter to current placeholder
          placeholder = curPlace + arr[phCount];

      setTimeout(function(){
        // print placeholder text
        $(input).attr("placeholder", placeholder);
        // increase loop count
        phCount++;
        // run loop until placeholder is fully printed
        if (phCount < arr.length) {
          printLetter(origString, input);
        } else {

          setTimeout(function() {

            ph = $('.input--search').attr('placeholder');
            searchBar = $('.input--search');
            // placeholder loop counter
            phCount = 0;
            placeholderFunc();

          }, 1500);

        }
        // use random speed to simulate
        // 'human' typing
      }, randDelay(90, 120));
    }

    // function to init animation
    function placeholderFunc() {
      $(searchBar).attr("placeholder", "");
      printLetter(ph, searchBar);
    }

    placeholderFunc();

    })(jQuery);

}