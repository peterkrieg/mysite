$(function(){
	

	// Dynamically adjusts height of portfolio box to always dislay a 8:5 ratio width to height

	var $portfoliobox = $('div.portfoliobox');
	var portfolioBoxWidth = parseInt($portfoliobox.css('width'));
	$portfoliobox.css('height', portfolioBoxWidth*.625+'px');

	// Does exact same code, but when window resizes, to keep everything dynamic 
	// (is there a DRY way to do this..?)

	$(window).resize(function(){
		var portfolioBoxWidth = parseInt($portfoliobox.css('width'));
		$portfoliobox.css('height', portfolioBoxWidth*.625+'px');
	})





});