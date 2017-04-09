// Test to see if jQuery is working
/*
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/
$(document).ready(function() {
	$(".menubutton").mouseenter(function() {
    	$(this).css({"z-index" : "900"});
	});
	$(".menubutton").mouseleave(function() {
    	$(this).css({"z-index" : "0"});
	});
/*	
	$("#slide").slideUp("slow");

	$(".menubutton").click(function() {
	    var clickedVal = $(this).attr("data-target");
	    $("#slide").slideDown("slow");    
	    setInterval(function() {
        	window.location.href = clickedVal;
    	}, 500);
	});
*/

$("#opacity").toggleClass("show-opacity");
	

});