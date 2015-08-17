$(window).load(function(){
	
	//Loader
	$('.loader .inner').fadeOut(500, function(){
		$('.loader').fadeOut(750);
	});


	// middle align content.
	$('.vertical-align-middle').each(function() {
		this.style.position = 'absolute';
		this.style.top = $(this).parent().height() / 2 + 'px';
		this.style.marginTop = -$(this).height() / 2 + 'px';
		this.style.left = ($(this).parent().width() - $(this).width()) / 2 + 'px';
	});


	// double rainbow backup.
	//var rainbow = [ "#00a081", "#fb8472", "#de3f3f", "#5bb0ec", "#c671fb", "#ec5b9f", "#ecaa5b", "#46bc62" ];
	var rainbow = [ "#00a081", "#006681", "#a857a7", "#66bb5b", "#e24152", "#fb8472", "#de3f3f", "#5bb0ec"];
	var colourPicker = rainbow[Math.floor(Math.random() * rainbow.length)];
	$('body').css('border-top-color', colourPicker);
	$('a,h3,h2').css('color', colourPicker);
	$('.down').css('fill', colourPicker);
	$('hr,.btn').css('border-color', colourPicker);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

});