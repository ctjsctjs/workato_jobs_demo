---
---
$( document ).ready(function() {
    loadData();
});

/*
Function to load departments, jobs and locations
*/

function loadData(){
  //Base URL fpr application form link
  var baseURL = "{{ '/apply/' | prepend: site.baseurl }}";
  //API Endpoint to retrive job board
  var APIendpoint = "https://boards-api.greenhouse.io/v1/boards/workato/departments";

  $.get(APIendpoint,
  function( data ) {

    //Declare variables
    var locationList=[];
    var departpmentName;

    $.each(data["departments"], function(i, dep) {

      departmentName = dep["name"];

      $.each(dep["jobs"], function(i, item) {

        //Get content from JSON object
        var id = item["id"];
        var title = item["title"];
        var location = item["location"]["name"];
        var url = item["absolute_url"];
        var link = baseURL  + "?gh_jid=" + id;

        //Create elements and append to list
        var ul = $( ".job-list-ul" );
        var li = $("<li>").attr("class", "job-li").appendTo(ul);
        var a = $("<a>").attr({"href": link, "class": "job-a"}).appendTo(li);
        var spanTitle = $("<span>").attr("class", "job-title").html(title).appendTo(a);
        var spanLocation = $("<span>").attr("class", "job-location").html(location).appendTo(a);
        var spanDep = $("<span>").attr({ "style": "display:none;", "class": "job-dep" }).html(departmentName).appendTo(a);

        //Add location option in filter if has not already been added
        if (locationList.indexOf(location) === -1){
          locationList.push(location);
          $("#locFilter").append($("<li>", {
            text:location,
            class:"filter-loc"
          }));
        }
      });

      //Add department into options if there are valid jobs
      if (dep["jobs"].length > 0){
        $("#depFilter").append($("<li>", {
          text:departmentName,
          class:"filter-dep"
        }));
      }
    });
  });
}

/*
Function to change state of filter
*/
$(function () {
  $(document).on("click", ".filter-form li", function() {

    //Declare variables
    var allLocLabel = "All Offices";
    var allDepLabel = "All Departments";
    var value = $(this).html();
    var filterClass =  $(this).attr("class");
    var activeLocElement;
    var activeDepElement;
    var activeLoc;
    var activeDep;
    var totalJobCount=0;
    var jobHiddenCount=0;

    //Get current active location
    $(".filter-loc").each(function() {
      if ($(this).hasClass("active")){
        activeLoc = $(this).html();
        activeLocElement = $(this);
      }
    })

    //Get current active department
    $(".filter-dep").each(function() {
      if ($(this).hasClass("active")){
        activeDep = $(this).html();
        activeDepElement = $(this);
      }
    })

    //Change state of filter based on clicked filter
    if(filterClass == "filter-loc"){
      activeLoc = value;
      $(this).addClass("active");
      $(activeLocElement).removeClass("active");

    } else if (filterClass == "filter-dep"){
      activeDep = value;
      $(this).addClass("active");
      $(activeDepElement).removeClass("active");
    }

    //Filter the job list by toggling display mode
    $(".job-a").each(function() {

      totalJobCount+=1;
      var elementDep = $(this).find(".job-dep").html();
      var elementLoc = $(this).find(".job-location").html();

      if ((elementDep==activeDep || activeDep==allDepLabel)&&
        (elementLoc==activeLoc || activeLoc==allLocLabel)){
        $(this).parent().removeClass("hide-job");
      } else {
        $(this).parent().addClass("hide-job");
        jobHiddenCount+=1;
      }
    })

    console.log(totalJobCount);
    console.log(jobHiddenCount);

    if(totalJobCount == jobHiddenCount){
      $(".no-jobs").removeClass("hide-job");
    } else {
      $(".no-jobs").addClass("hide-job");
    }
  })
});
