$(document).ready(function() {
    console.log('Loaded scripts');
});
$(function() {
	$(".target").on("click", function(){
		timeoutID = window.setTimeout(targetFuncion, 100);
	});
});
function targetFuncion() {
	window.open('https://wa.me/message/CC72A6K4DSTJK1','_blank' );
}
