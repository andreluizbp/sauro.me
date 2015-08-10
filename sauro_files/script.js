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
	var rainbow = [ "#00a081", "#006681", "#f4a82c", "#e64f48", "#a857a7", "#05ade2", "#66bb5b", "#e24152", "#fb8472", "#de3f3f", "#5bb0ec", "#c671fb", "#ec5b9f", "#ecaa5b", "#46bc62" ];
	var colourPicker = rainbow[Math.floor(Math.random() * rainbow.length)];
	$('a').css('color', colourPicker);
	$('a:hover').css('color', colourPicker);
	$('h3').css('color', colourPicker);
	$('.down').css('fill', colourPicker);
	$('.st0').css('fill', colourPicker);
	$('.st1').css('fill', colourPicker);
	$('.st3').css('fill', colourPicker);
	$('.st2').css('fill', 'rgba(0, 0, 0, 0.2)');
	$('.section-title').css('border-color', colourPicker);
	$('body').css('border-top-color', colourPicker);


/*
	// double rainbow.
	var rainbow = [ "#00a081", "#fb8472", "#de3f3f", "#5bb0ec", "#c671fb", "#ec5b9f", "#ecaa5b", "#46bc62" ];
	var x = 0;
        var colourPicker = rainbow[x];
        x++;
        if (x == rainbow.length) {
            x = 0;
        }
	$('a').css('color', colourPicker);
	$('a:hover').css('color', colourPicker);
	$('h3').css('color', colourPicker);
	$('body').css('border-top-color', colourPicker);
*/
    	
	// Nav bar.
	$(".nav-toggle").click(function() {
		$(this).toggleClass("close");
		$(".site-navigation").slideToggle();
		event.preventDefault();
	});
	
});