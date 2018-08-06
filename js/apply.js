---
---
/*
Function to get URL Parameters
*/
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/*
If parameter is empty, redirect to 404 page
*/
if (getUrlParameter('gh_jid')==undefined){
  window.location.replace('{{ "/404/" | prepend: site.baseurl }}');
}
