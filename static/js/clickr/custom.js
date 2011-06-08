// -- Cycle Slider Settings --

$(document).ready(function(){
	$('#slider').cycle({
		fx: 'scrollHorz',
		speed:  1300, 
		timeout: 8000,
		easing:'backinout',		
		sync:1,
		pause:true,		
		pager:'#pager', 	
		// callback fn that creates a thumbnail to use as pager anchor 
		pagerAnchorBuilder: function(idx, slide) { 
			return '<li><a href="#"></a></li>'; 
		}
	});
})
