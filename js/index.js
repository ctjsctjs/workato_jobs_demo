var bannerText = `We’re making work automation simple and accessible for everyone.
We design products and deliver services that help people be more productive at their work — one recipe at a time.
Join our team in all around the world and help serve businesses all over the world. Come be a part of something amazing! `

var introText = `Workato is an award-winning cloud intelligent automation and integration platform with enterprise-grade capabilities and no coding required. Workato seamlessly integrates with over 300+ business applications and enables integration and task automation across all those apps.
Recognised as a Leader in Forrester Wave iPaaS for Dynamic Integrations and Leader on Debut in Gartner’s Enterprise iPaaS Magic Quadrant, Workato is the only company that provides an easy, self-service way to integrate cloud and on-premise applications for all types of businesses —
ranging from Fortune 500 Enterprises as well as SMBs.
`

$( document ).ready(function() {
    loadText();
    $('body').addClass('toggle-body');
});

function loadText(){
    $('#banner-text').html(bannerText);
    $('#intro-text').html(introText);
}

$(function () {
  $(".banner-link-scroll").click(function (){
                $('html, body').animate({
                    scrollTop: $("#job-container").offset().top
                }, 800, 'swing');
  });
});
