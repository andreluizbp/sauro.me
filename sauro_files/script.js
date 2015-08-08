$(document).ready(function() {
	$(".nav-toggle").click(function() {
		$(this).toggleClass("close");
		$(".site-navigation").slideToggle();
		event.preventDefault();
	});
	
	$('#home').particleground({
	density: '20000',
	particleRadius: '10',
	dotColor: '#f0f0f0',
	parallaxMultiplier: '5',
	lineColor: '#f5f5f5',
});

	
});