/* requires:
dummy_dat.js
content.js
*/

$('.search-input').click(function(){
	$('.fake-carat').hide();
});

$(document).click(function(e){
	if(!$(e.target).is('.search-input'))
    	$('.fake-carat').show();
});

$(document).keypress(function(e){
	// get keycode of current keypress event
	var code = (e.keyCode || e.which);
	// activate only if not already focused on text input box
	if(!$(e.target).is('.search-input'))
	    // do nothing if it's an arrow key
	    if(code==32 || code==33 || code==34 || code==35 || code==36 || code==38 || code==39) {
	        return;
	    }
		$('.fake-carat').hide();
    	$('.search-input').focus();
});



$( document ).ready(function() {
	var htmlElem = '';
	for (var i=0; i<data.length; i++) {
		htmlElem += makeContent(data[i]);
	}
    $(".js-content").append(htmlElem);
});
