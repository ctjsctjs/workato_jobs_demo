var bannerHeader = `
We are looking for passionate and like-minded people.
`

var bannerText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed venenatis nibh quis dui pretium, a pharetra tellus tempus.
Mauris et quam sem. Ut facilisis nunc nunc, sed aliquet erat egestas in.
`

$( document ).ready(function() {
    loadText();
});

/*
  Function to load text content
*/
function loadText(){
    $("#banner-header").html(bannerHeader);
    $("#banner-text").html(bannerText);
}
