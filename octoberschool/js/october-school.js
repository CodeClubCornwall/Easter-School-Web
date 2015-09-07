$(function(){
	$(".headline .container").typed({
		strings: ["<h1><span style='color:red'>&gt; </span><span style='color:#04E013'> new </span> Coding_School{};</h1><h2><span style='color:red'>&gt; </span>mission_to('Mars');</h2><h3><span style='color:red'>&gt; </span>start = 26-October-2015;</h3><h3><span style='color:red'>&gt; </span>end = 30-October-2015;</h3>"],
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
