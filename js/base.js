var baseURL = 'https://ctjsctjs.github.io/workato_jobs_demo/apply/';
//var baseURL = '../apply/';
var APIendpoint = 'https://boards-api.greenhouse.io/v1/boards/workato/departments';
//var APIendpoint = 'https://boards-api.greenhouse.io/v1/boards/workatodemo/jobs';

var bannerText = `We’re making work automation simple and accessible for everyone.
We design products and deliver services that help people be more productive at their work — one recipe at a time.
Join our team in all around the world and help serve businesses all over the world. Come be a part of something amazing! `

var introText = `Workato is an award-winning cloud intelligent automation and integration platform with enterprise-grade capabilities and no coding required. Workato seamlessly integrates with over 300+ business applications and enables integration and task automation across all those apps.
Recognised as a Leader in Forrester Wave iPaaS for Dynamic Integrations and Leader on Debut in Gartner’s Enterprise iPaaS Magic Quadrant, Workato is the only company that provides an easy, self-service way to integrate cloud and on-premise applications for all types of businesses —
ranging from Fortune 500 Enterprises as well as SMBs.
`
var activeDep='all';
var activeLoc='all';

$( document ).ready(function() {
    loadData();
    loadText();
});

function loadData(){

  $.get(APIendpoint,

  function( data ) {
    console.log(data);

    var locationList=[];
    var departpmentName;

    $.each(data['departments'], function(i, dep) {

      departmentName = dep['name'];

      $.each(dep['jobs'], function(i, item) {

        //Get content from JSON object
        var id = item['id'];
        var title = item['title'];
        var location = item['location']['name'];
        var url = item['absolute_url'];
        var link = baseURL  + '?gh_jid=' + id;

        //Create elements and append to list
        var ul = $( ".job-list-ul" );
        var li = $('<li>').attr('class', 'job-li').appendTo(ul);

        var a = $('<a>').attr({
          'href': link,
          'class': 'job-a'
      }).appendTo(li);

        var spanTitle = $('<span>').attr('class', 'job-title').html(title).appendTo(a);
        var spanLocation = $('<span>').attr('class', 'job-location').html(location).appendTo(a);

        var spanDep = $('<span>').attr({
          'style': 'display:none;',
          'class': 'job-dep'
        }).html(departmentName).appendTo(a);

        //Add location option in filter if has not already been added
        if (locationList.indexOf(location) === -1){
          locationList.push(location);
          $('#locFilter').append($('<option>', {
            value:location,
            text:location
          }));
        }
      });

      //Add depterment into options if there are valid jobs
      if (dep['jobs'].length > 0){
        $('#depFilter').append($('<option>', {
          value:departmentName,
          text:departmentName
        }));
      }
    });
  });
}

function loadText(){
    $('#banner-text').html(bannerText);
    $('#intro-text').html(introText);
}

function filter(){

  var selectedDep=$('#depFilter').find('option:selected').val();
  var selectedLoc=$('#locFilter').find('option:selected').val();

  $('.job-a').each(function() {

    var elementDep = $(this).find('.job-dep').html();
    var elementLoc = $(this).find('.job-location').html();

    if ((elementDep==selectedDep || selectedDep=='all')&&
      (elementLoc==selectedLoc || selectedLoc=='all')){
      $(this).parent().removeClass('hide-job');
    } else {
      $(this).parent().addClass('hide-job');
    }

  })
}

$(function () {
  $(document).scroll(function () {
    console.log('test');
	  var $nav = $(".nav-bg");
    var $content = $(".nav-link");
    var $logo = $(".workato-logo");

	  $nav.toggleClass('scrolled-bg', $(this).scrollTop() > $nav.height());
    $content.toggleClass('scrolled-content', $(this).scrollTop() > $nav.height());
    $logo.toggleClass('scrolled-logo', $(this).scrollTop() > $nav.height());
	});
});

$(function () {
  $("#banner-link").click(function (){
                $('html, body').animate({
                    scrollTop: $("#job-container").offset().top
                }, 800, 'swing');
  });
});
