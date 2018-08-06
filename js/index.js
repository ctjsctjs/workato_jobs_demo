/*
Store content for index.html
*/
var content = {
  'copy':{
    'bannerText':`
      We’re making work automation simple and accessible for everyone.
      We design products and deliver services that help people be more productive at their work — one recipe at a time.
      Join our team in all around the world and help serve businesses all over the world.
      `,

    'introText':`
      Workato is an award-winning cloud intelligent automation and
      integration platform with enterprise-grade capabilities and no coding required. Workato seamlessly integrates with over 300+ business applications and enables integration and task automation across all those apps.
      `
    },
  'culture':{

    'Getting Things Done':`
    We love our work and will do whatever it takes to get things done.
    No matter your job scope, you’ll be able to contribute and have fun
    at the same time.
    `,

    'A Diverse Team':`
    We’re a diverse team of bikers, runners, climbers, cricketers, photographers, ultimate frisbee players, netflix-bingers from 9 different countries.
    We value diversity and there’s never a boring conversation at lunch.
    `,

    'Move fast':`
    Connecting business apps happens in real time. We believe in taking
    risks and making decisions fast. If we fail, we learn and move on.
    `,

    'Transparency':`
    The ability to see the big picture allows us to understand the cause,
    make sensible decisions and work collectively to solve problems.
    We are obsessed with productivity, remember?
    `
  },
  'testimony':{

    'Alvin':`
    We love our work and will do whatever it takes to get things done.
    No matter your job scope, you’ll be able to contribute and have fun
    at the same time.
    `,

    'Bob':`
    We’re a diverse team of bikers, runners, climbers, cricketers, photographers, ultimate frisbee players, netflix-bingers from 9 different countries.
    We value diversity and there’s never a boring conversation at lunch.
    `,

    'Jeannie':`
    Connecting business apps happens in real time. We believe in taking
    risks and making decisions fast. If we fail, we learn and move on.
    `,

    'Kim':`
    The ability to see the big picture allows us to understand the cause,
    make sensible decisions and work collectively to solve problems.
    We are obsessed with productivity, remember?
    `
  }
}

$( document ).ready(function() {
    loadText();
    loadCulture();
});

/*
  Function to load text content
*/
function loadText(){
    $("#banner-text").append(content["copy"]["bannerText"]);
    $("#intro-left-panel").append(content["copy"]["introText"]);
}

/*
  Function to load culture navigation tabs
*/
function loadCulture(){

    initContent=false;

    $.each(content["culture"], function(label, content) {

      //Create elements and append to list
      var ul = $( "#culture-nav" );
      var li = $("<li>").attr("class", "cult-li").appendTo(ul);
      $(li).html(label);

      if (initContent == false){
        var output = $("#culture-right-panel");
        $(output).html(content);
        initContent = true;
      }
    })
}

/*
  Function to change "culture" body content on "culture" tab hover
*/
$(function () {
  $(".cult-li").hover(function() {
    var label = $( this ).html();
    var fetchedContent = content["culture"][label];
    var output = $("#culture-right-panel");
    $(output).html(fetchedContent);
  });
});

/*
  Function to add onClick to "View Openings"
  to scroll to openings section
*/
$(function () {
  $(".banner-link-scroll").click(function (){
                $("html, body").animate({
                    scrollTop: $("#job-container").offset().top
                }, 800, "swing");
  });
});
