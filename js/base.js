console.log('hello world');

$.get( "https://boards-api.greenhouse.io/v1/boards/workatodemo/jobs",
function( data ) {
  $( ".result" ).html( data.jobs );
  console.log(data.jobs['0'].id);
});
