//var baseURL = 'https://ctjsctjs.github.io/workato_jobs_demo/';
var baseURL = '/apply/';
var APIendpoint = 'https://boards-api.greenhouse.io/v1/boards/workato/jobs';
//var APIendpoint = 'https://boards-api.greenhouse.io/v1/boards/workatodemo/jobs';

var bannerText = `We’re making work automation simple and accessible for everyone.
We design products and deliver services that help people be more productive at their work — one recipe at a time.
Join our team in all around the world and help serve businesses all over the world. Come be a part of something amazing! `

var introText = `Workato is an award-winning cloud intelligent automation and integration platform with enterprise-grade capabilities and no coding required. Workato seamlessly integrates with over 300+ business applications and enables integration and task automation across all those apps.
Recognised as a Leader in Forrester Wave iPaaS for Dynamic Integrations and Leader on Debut in Gartner’s Enterprise iPaaS Magic Quadrant, Workato is the only company that provides an easy, self-service way to integrate cloud and on-premise applications for all types of businesses —
ranging from Fortune 500 Enterprises as well as SMBs.
`


$( document ).ready(function() {
    loadData();
    loadText();
});

function loadData(){
  $.get(APIendpoint,
  function( data ) {

    console.log(data);

    $.each(data['jobs'], function(i, item) {

      var id = item['id'];
      var title = item['title'];
      var location = item['location']['name'];
      var url = item['absolute_url'];
      var link = baseURL  + '?gh_jid=' + id;


      var content = '<a href="'   + link   + '">'
      + '<li>'
      + '<span class="job-title">'
      + title
      + '</span>'
      + '<span class="job-location">'
      + location
      + '</span>'
      + '</li>'
      + '</a>'
      $( ".job-list-ul" ).append(content);
    });
  });
}
  function loadText(){
    $('#banner-text').html(bannerText);
    $('#intro-text').html(introText);
}

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".nav-bg");
    var $content = $(".nav-link");
    var $logo = $(".workato-logo");

	  $nav.toggleClass('scrolled-bg', $(this).scrollTop() > $nav.height());
    $content.toggleClass('scrolled-content', $(this).scrollTop() > $nav.height());
    $logo.toggleClass('scrolled-logo', $(this).scrollTop() > $nav.height());
	});
});
