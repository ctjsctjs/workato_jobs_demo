/*
  Function to toggle navigation bar background when scrolled
*/
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".nav-bg");
    var $content = $(".nav-home ul li a");
    var $logo = $(".workato-logo");

	  $nav.toggleClass("scrolled-bg", $(this).scrollTop() > $nav.height());
    $content.toggleClass("scrolled-content", $(this).scrollTop() > $nav.height());
    $logo.toggleClass("scrolled-logo", $(this).scrollTop() > $nav.height());
	});
});
