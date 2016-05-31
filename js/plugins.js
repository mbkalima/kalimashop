$(document).ready(function () {
$('.carousel').carousel({
	interval: 6000
});

// Show Color Option Div when Click On The Gear
$('.gear_check').click(function () {
	$('.color_option').fadeToggle();
});

// Change Theme color On Click
var colorLi = $(".color_option ul li");
colorLi
	.eq(0).css("backgroundColor", "#E41b17").end()
	.eq(1).css("backgroundColor", "#9928E3").end()
	.eq(2).css("backgroundColor", "#000CFF").end()
	.eq(3).css("backgroundColor", "#DCD820");

//colorLi.click(function() {
//$("link[href*='theme']").attr("href",$(this).attr("data-value"));




//console.log($(this).attr("data-value"))

});
});

//loading Screen
$(window).load(function () {
	$(".loading-overlay").fadeOut(1000);

});