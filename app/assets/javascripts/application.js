// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jQuery.BlackAndWhite.min
//= require jquery_ujs
//= require cufon-yui
//= require Quicksand_Book_400.font
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	// Black and white
	 $('.tlt').textillate();
	 $('.flexislider').flexslider({
    	animation: "slide",
    	slideshowSpeed: 12000,
    	controlNav: false,               
		directionNav: false 
  	});
	//$('#content').find('*').css('margin-left', "15px");
	//$('#overlay').fadeOut('slow', function(){});
	$('a')	.click(function(){
	  var url = $(this).attr('href');

	  $('#overlay').fadeIn('fast', function(){
	    document.location.href = url;
	  });

	  return false;
	});

	$("#brand").mouseover(function() {
     //$('#home').fadeToggle("slow")
     return false;
 	 }).mouseout(function(){
    	//$('#home').fadeOut("slow")
    	return false;
  	});
});



 