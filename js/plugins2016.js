/* global ,console , $ , alert */

$(document).ready(function () {
	"use stict";
	$('.carousel').carousel({
		interval: 6000
	});



	//	lien==> au plomberie
	$(".lien-plomberie").click(function () {
		$("html , body").animate({
			scrollTop: $("#plomberie").offset().top
		}, 1000);
	});

	//	lien==> auchuffager
	$(".lien-chauffage").click(function () {
		$("html , body").animate({
			scrollTop: $("#chauffage").offset().top
		}, 1000);
	});

	//show div :couleurs-option when click on the Gear (.gear-check)
	$(".gear-check").click(function () {
		$(".couleurs-option").fadeToggle();
	})

	//change theme color on click
	var colorLi = $(".couleurs-option ul li");
	colorLi.eq(0).css("backgroundColor", "#ed1b17").end()
		.eq(1).css("backgroundColor", "#3498db").end()
		.eq(2).css("backgroundColor", "#e67e22").end()
		.eq(3).css("backgroundColor", "#9b59b6").end()
		.eq(4).css("backgroundColor", "#2ecc71");

	colorLi.click(function () {
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));


	});

});

//  chargement ....loading screen 
$(window).load(function () {

	//Loadings elements
	$(".loading-overlay,.loading-overlay .spinner").fadeOut(2000);
});