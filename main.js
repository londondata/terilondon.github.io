$(function(){


// top scroll function
$(window).scroll(function(){
  $("header").css("opacity", 1 - $(window).scrollTop() / 500);
});

// nav

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 650);
    return false;
});

 $('.carousel').carousel();
 $('.materialboxed').materialbox();


});

