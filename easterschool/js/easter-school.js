$(function(){
	$(".headline .container").typed({
		strings: ["<h1><span style='color:red'>> </span><span style='color:#04E013'> new </span> Easter_School{};</h1><h2><span style='color:red'>> </span>mission_to('Mars');</h2><h3><span style='color:red'>> </span>start = 10-April-2017;</h3><h3><span style='color:red'>> </span>end = 13-April-2017;</h3>"],
		typeSpeed: 10,
		backDelay: 500,
		loop: false,
		contentType: 'html', // or text
		// defaults to false for infinite loop
		loopCount: false
	});
});
		
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
   		 }
  	});
});
