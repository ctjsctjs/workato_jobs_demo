---
---
/*
  Function to toggle navigation bar background when scrolled
*/

$(function () {
  $(".workato-logo").attr("src", "{{ '/img/workatoJobs_logo.svg' | prepend: site.baseurl }}")
  $(".nav-bar").addClass("nav-home");
  $("#nav-dummy").removeClass("nav-dummy");

  $(document).scroll(function () {
	  var $nav = $(".nav-bar");
    var $bg = $(".nav-bg");
    var $content = $(".nav-home ul li a");
    var $logo = $(".workato-logo");

    $nav.toggleClass("scrolled-nav", $(this).scrollTop() > $nav.height());
	  // $bg.toggleClass("scrolled-bg", $(this).scrollTop() > $nav.height());
    // $content.toggleClass("scrolled-content", $(this).scrollTop() > $nav.height());
    // $logo.toggleClass("scrolled-logo", $(this).scrollTop() > $nav.height());

    if($nav.hasClass("scrolled-nav")){
      $bg.addClass("scrolled-bg");
      $content.addClass("scrolled-content");
      $logo.attr("src", "{{ '/img/workatoJobs_logo_color.svg' | prepend: site.baseurl }}")
    } else {
      $bg.removeClass("scrolled-bg");
      $content.removeClass("scrolled-content");
      $logo.attr("src", "{{ '/img/workatoJobs_logo.svg' | prepend: site.baseurl }}")
    }
	});
});
