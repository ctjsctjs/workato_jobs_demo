var bannerHeader = `
We believe that you do your best work when you feel your best
`

var bannerText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed venenatis nibh quis dui pretium, a pharetra tellus tempus.
Mauris et quam sem. Ut facilisis nunc nunc, sed aliquet erat egestas in.
Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id pharetra nisi.
`

$( document ).ready(function() {
    loadText();
});

function loadText(){
    $('#banner-header').html(bannerHeader);
    $('#banner-text').html(bannerText);
}
