console.log('hello world');
var baseURL = 'https://ctjsctjs.github.io/workato_jobs_demo/';

$.get( "https://boards-api.greenhouse.io/v1/boards/workatodemo/jobs",
function( data ) {

  console.log(data);

  $.each(data['jobs'], function(i, item) {

    var id = item['id'];
    var title = item['title'];
    var url = item['absolute_url'];
    var link = baseURL  + '?gh_jid=' + id;
    var content = '<li>'
    + title
    + '<a href="' + link + '"/a>' + 'Apply' + '</a>'
    + '</li>'

    $( ".job_list_ul" ).append(content);
  });
});
