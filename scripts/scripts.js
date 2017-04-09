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
	$("button").mouseenter(function() {
    	$(this).css({"z-index" : "900"});
	});
	$("button").mouseleave(function() {
    	$(this).css({"z-index" : "0"});
	});
});