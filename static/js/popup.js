/***************************/
  //@Author: Adrian "yEnS" Mato Gondelle
  //@website: www.yensdesign.com
  //@email: yensamg@gmail.com
  //@license: Feel free to use it, but keep this credits please!	
  //
  //  Note: Edited to be reusable
  //				
  /***************************/

  //SETTING UP OUR POPUP
  //0 means disabled; 1 means enabled;
  var popupStatus = 0;

  //loading popup with jQuery magic!
  function loadPopup(dialog_id){
	  //loads popup only if it is disabled
	  if(popupStatus==0){
		  $("#dialogBG-"+dialog_id).css({
			  "opacity": "0.7"
		  });
		  $("#dialogBG-"+dialog_id).fadeIn("slow");
		  $("#"+dialog_id).fadeIn("slow");
		  popupStatus = 1;
		  
		  //request data for centering
	    var windowWidth = document.documentElement.clientWidth;
	    var windowHeight = document.documentElement.clientHeight;
	    var popupHeight = $("#"+dialog_id).height();
	    var popupWidth = $("#"+dialog_id).width();
	    //centering
	    $("#"+dialog_id).css({
		    "position": "fixed",
		    "top": windowHeight/2-popupHeight/2,
		    "left": windowWidth/2-popupWidth/2
	    });
	    //only need force for IE6
	
	    $("#dialogBG-"+dialog_id).css({
		    "height": windowHeight
	    });
	  }
  }

  //disabling popup with jQuery magic!
  function disablePopup(dialog_id){
	  //disables popup only if it is enabled
	  if(popupStatus==1){
		  $("#dialogBG-"+dialog_id).fadeOut("slow");
		  $("#"+dialog_id).fadeOut("slow");
		  popupStatus = 0;
	  }
  }
