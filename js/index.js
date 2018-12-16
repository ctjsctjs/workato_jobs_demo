/*
Store content for index.html
*/
var content = {
  'copy': {
    'bannerText': `
      We’re making work automation simple and accessible for everyone.
      We design products and deliver services that help people be more productive at their work — one recipe at a time.
      Join our team in all around the world and help serve businesses all over the world.
      `,

    'introText': `
      Workato is the operating system for today's fast-moving business. Recognized as a leader by both Gartner and Forrester, 
      it is the only AI-based middleware platform that enables both business and IT to integrate their apps and automate complex 
      business workflows with security and governance. Given the massive and growing fragmentation of data, apps, 
      and business processes in enterprises today, our mission is to help companies integrate and automate at least 10 
      times faster than traditional tools and at a tenth of the cost of ownership.
      `
  },
  'culture': {

    'Getting Things Done': `
    We love our work and will do whatever it takes to get things done.
    No matter your job scope, you’ll be able to contribute and have fun
    at the same time.
    `,

    'A Diverse Team': `
    We’re a diverse team of bikers, runners, climbers, cricketers, photographers, ultimate frisbee players, netflix-bingers from 9 different countries.
    We value diversity and there’s never a boring conversation at lunch.
    `,

    'Move fast': `
    Connecting business apps happens in real time. We believe in taking
    risks and making decisions fast. If we fail, we learn and move on.
    `,

    'Transparency': `
    The ability to see the big picture allows us to understand the cause,
    make sensible decisions and work collectively to solve problems.
    We are obsessed with productivity, remember?
    `
  },
  'testimony': {

    'Alvin': `
    We love our work and will do whatever it takes to get things done.
    No matter your job scope, you’ll be able to contribute and have fun
    at the same time.
    `,

    'Bob': `
    We’re a diverse team of bikers, runners, climbers, cricketers, photographers, ultimate frisbee players, netflix-bingers from 9 different countries.
    We value diversity and there’s never a boring conversation at lunch.
    `,

    'Jeannie': `
    Connecting business apps happens in real time. We believe in taking
    risks and making decisions fast. If we fail, we learn and move on.
    `,

    'Kim': `
    The ability to see the big picture allows us to understand the cause,
    make sensible decisions and work collectively to solve problems.
    We are obsessed with productivity, remember?
    `
  }
}

$(document).ready(function () {
  loadText();
});

/*
  Function to load text content
*/
function loadText() {
  $("#banner-text").append(content["copy"]["bannerText"]);
  $("#intro-content").append(content["copy"]["introText"]);
}

/*
  Function to add onClick to "View Openings"
  to scroll to openings section
*/
$(function () {
  $("#banner-link-loc").click(function () {
    $("html, body").animate({
      scrollTop: $("#location-content").offset().top
    }, 800, "swing");
  });
});

$(function () {
  $("#banner-link-dep").click(function () {
    $("html, body").animate({
      scrollTop: $("#department-content").offset().top
    }, 800, "swing");
  });
});
