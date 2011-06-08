 $(document).ready(function() {




$('select#left-backgrounds').change(function () { 
	var n = $(this).children(":selected").val();
	if (n == 'bg1') {
		$('#left').css('backgroundColor', '#2b2b2b').removeClass().addClass("plates");
	}
	
	else if (n == 'bg2') {
		$('#left').css('backgroundColor', '#2b2b2b').removeClass().addClass("grid-left");
	}
	else if (n == 'bg3') {
		$('#left').css('backgroundColor', '#2b2b2b').removeClass().addClass("noise");
	}
});	


$('select#right-backgrounds').change(function () { 
	var n = $(this).children(":selected").val();
	if (n == 'rbg1') {
		$('#right').css('backgroundColor', '#f7f7f7').removeClass().addClass("lines-1");
	}
	
	else if (n == 'rbg2') {
		$('#right').css('backgroundColor', '#f7f7f7').removeClass().addClass("lines-2");
	}
	else if (n == 'rbg3') {
		$('#right').css('backgroundColor', '#f7f7f7').removeClass().addClass("square-grid");
	}
	else if (n == 'rbg4') {
		$('#right').css('backgroundColor', '#f7f7f7').removeClass().addClass("square-grid-big");
	}
	else if (n == 'rbg5') {
		$('#right').css('backgroundColor', '#f7f7f7').removeClass().addClass("cross");
	}
	else if (n == 'rbg6') {
		$('#right').css('backgroundColor', '#f7f7f7').removeClass().addClass("cross-big");
	}
});	


$('select#presets').change(function () { 
	var w = $(this).children(":selected").val();
	if (w == 'pre1') {
		window.location.href = "../../single/orange/index.html";
	}
	
	else if (w == 'pre2') {
		window.location.href = "../../single/lime/index.html";
	}
	else if (w == 'pre3') {
		window.location.href = "../../single/blue/index.html";
	}
	else if (w == 'pre4') {
		window.location.href = "../../single/pink/index.html";
	}
	else if (w == 'pre5') {
		window.location.href = "../../single/red/index.html";
	}
	else if (w == 'pre6') {
		window.location.href = "../../single/purple/index.html";
	}
	else if (w == 'pre7') {
		window.location.href = "../../single/turquoise/index.html";
	}
	else if (w == 'pre17') {
		window.location.href = "../../single/beige/index.html";
	}
	else if (w == 'pre18') {
		window.location.href = "../../single/blue-dark/index.html";
	}
	else if (w == 'pre19') {
		window.location.href = "../../single/green/index.html";
	}
	else if (w == 'pre9') {
		window.location.href = "../../single/orange/index-cycle-slider.html";
	}
	else if (w == 'pre10') {
		window.location.href = "../../single/lime/index-cycle-slider.html";
	}
	else if (w == 'pre11') {
		window.location.href = "../../single/blue/index-cycle-slider.html";
	}
	else if (w == 'pre12') {
		window.location.href = "../../single/pink/index-cycle-slider.html";
	}
	else if (w == 'pre13') {
		window.location.href = "../../single/red/index-cycle-slider.html";
	}
	else if (w == 'pre14') {
		window.location.href = "../../single/purple/index-cycle-slider.html";
	}
	else if (w == 'pre15') {
		window.location.href = "../../single/turquoise/index-cycle-slider.html";
	}
	else if (w == 'pre16') {
		window.location.href = "../../single/beige/index-cycle-slider.html";
	}
	else if (w == 'pre20') {
		window.location.href = "../../single/blue-dark/index-cycle-slider.html";
	}else if (w == 'pre21') {
		window.location.href = "../../single/green/index-cycle-slider.html";
	}
});	

	
$('.close').click(function () {
	$('#optwrap').animate({"left": "-=210px"}, "4000");
	$(this).hide();
	$('.open').show();
	return false;
});

$('.open').click(function () {
	$('#optwrap').animate({"left": "+=210px"}, "4000");
	$(this).hide();
	$('.close').show();
	return false;
});



}); // end of jquery
  
  
  
  
  
  