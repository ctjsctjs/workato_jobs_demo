---
---
  $(document).ready(function () {
    loadData();
  });

/*
Function to load departments, jobs and locations
*/

function loadData() {
  //Base URL fpr application form link
  var baseURL = "{{ '/apply/' | prepend: site.baseurl }}";
  //API Endpoint to retrive job board

  var APIendpoint = "https://boards-api.greenhouse.io/v1/boards/workato/offices";
  var officeId;
  var officeName = $("#banner-header").html();

  $.get(APIendpoint,
    function (data) {
      //Each office
      $.each(data["offices"], function (i, office) {
        console.log(office["name"]);

        if (office["name"] == officeName) {

          //Each department
          $.each(office["departments"], function (j, dep) {

            depName = dep["name"];

            //Each job
            $.each(dep["jobs"], function (k, job) {
              //Get content from JSON object
              var id = job["id"];
              var title = job["title"];
              var url = job["absolute_url"];
              var link = baseURL + "?gh_jid=" + id;

              genListElement(title, link, depName);
            });

            //Add department into options if there are valid jobs
            if (dep["jobs"].length > 0) {
              $("#depFilter").append($("<li>", {
                text: depName,
                class: "filter-dep"
              }));
            }
          })
        }
      })
    })

  function genListElement(title, link, dep) {
    //Create elements and append to list
    var ul = $(".job-list-ul");
    var li = $("<li>").attr("class", "job-li").appendTo(ul);
    var a = $("<a>").attr({ "href": link, "class": "job-a" }).appendTo(li);
    var spanTitle = $("<span>").attr("class", "job-title").html(title).appendTo(a);
    var spanLocation = $("<span>").attr("class", "job-dep").html(dep).appendTo(a);
  }

  /*
  Function to change state of filter
  */
  $(function () {
    $(document).on("click", ".filter-form li", function () {

      //Declare variables
      var allDepLabel = "All Departments";
      var value = $(this).html();
      var activeDepElement;
      var activeDep;
  
      //Get current active department
      $(".filter-dep").each(function () {
        if ($(this).hasClass("active")) {
          activeDep = $(this).html();
          activeDepElement = $(this);
        }
      });

      //Change state of filter based on clicked filter
      activeDep = value;
      $(this).addClass("active");
      $(activeDepElement).removeClass("active");

      //Filter the job list by toggling display mode
      $(".job-a").each(function () {

        var elementDep = $(this).find(".job-dep").html();

        if ((elementDep == activeDep || activeDep == allDepLabel)) {
          $(this).parent().removeClass("hide-job");
        } else {
          $(this).parent().addClass("hide-job");
        }
      })
    })
  })
};
