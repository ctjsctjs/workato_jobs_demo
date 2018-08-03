$(function () {
  $(".nav-hamburg").click(function (){
                $('.side-nav').toggleClass('side-nav-extend');
                $('.page').toggleClass('body-extend');
                $("body").toggleClass('no-scroll');
  });
});
