$(document).ready(function(){
	  $('.boxgrid').hover(function(){
		  $(".car").animate({left:'0px'},{duration:300});
	  }, function() {
		  $(".car").animate({left:'720px'},{duration:300});
	  });
});