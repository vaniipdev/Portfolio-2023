// $('.background').ripples({
// 			resolution: 512,
// 			dropRadius: 20, //px
// 			perturbance: 0.04,

// 		});

// 	setInterval(function() {
// 		var $el = $('.background');
// 		var x = Math.random() * $el.outerWidth();
// 		var y = Math.random() * $el.outerHeight();
// 		var dropRadius = 20;
// 		var strength = 0.08 + Math.random() * 0.08;
// 		$el.ripples('drop', x, y, dropRadius, strength);
// 	}, 400);;


//water ripples effect

// $('.background').ripples({
// 		resolution: 512,
// 		dropRadius: 20, //px
// 		perturbance: 0.04,

// 	});

// setInterval(function() {
// 	var $el = $('.background');
// 	var x = Math.random() * $el.outerWidth();
// 	var y = 0
// 	var dropRadius = 30;
// 	var strength = 1 + Math.random() * 0.08;
// 	$el.ripples('drop', x, y, dropRadius, strength);
// }, 700);;





//Navbar

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 900) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});
})(jQuery);




	  
    

//Password

function LogIn( fm ){
    var pw = fm.password.value;
    switch( pw ){
		case "vaniip_portfoli0": 
		// window.location.href = "http://www.w3schools.com";
		    gotoPlace = "./index-logged.html";
		break;

	default: 
	    // gotoPlace = "http://msn.com";
		document.getElementById("error").innerHTML = "wrong password"
}
fm.action = gotoPlace;
};

//password button appear



$("input").focus(function() {
	$("button").css("visibility", "visible");
  });
  
//   $("input").focusout(function() {
// 	$("button").css("visibility", "hidden");
//   });





// scroll button appear- back to top







(function($) { "use strict";

		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 80;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 

