$(function(){


// top scroll function
// $(window).scroll(function(){
//   $("header").css("opacity", 1 - $(window).scrollTop() / 500);
// });

$(document).on('scroll', function(){
  var currPos = $(document).scrollTop();
  var fader = $('.fader');
  fader.each(function(){
    var offset = $(this).offset().top;

    if(currPos > offset) {
      $(this).css('opacity', 1 - (currPos - offset) / 1500);
    }
  })
});

// nav

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 650);
    return false;
});

//carousel + ligtbox

 $('.carousel').carousel();
 $('.materialboxed').materialbox();



// testimonials

var testimonialsIndex = 1;
showTestimonials(testimonialsIndex);

function plusTestimonials(n) {
  showTestimonials(testimonialsIndex += n);
}

function currentTestimonials(n) {
  showTestimonials(testimonialsIndex = n);
}
function auto(){
  setInterval(function(){
    plusTestimonials(1)
  }, 5000)
}

auto()

function showTestimonials(n) {
  var i;
  var testimonials = $(".myTestimonials");
  var dots = $('.dot')
  if (n > testimonials.length) {testimonialsIndex = 1}
    if (n < 1) {testimonialsIndex = testimonials.length}
    for (i = 0; i < testimonials.length; i++) {

      $(testimonials[i]).css('display', "none")
    }
    for (i = 0; i < dots.length; i++) {
    $(dots[i]).removeClass('active')
    }

  $(testimonials[testimonialsIndex-1]).css('display', "block")
  $(dots[testimonialsIndex-1]).toggleClass('active')
}

});
