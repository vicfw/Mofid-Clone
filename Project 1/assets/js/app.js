//animation Sal.js
sal({
  threshold: 0.1,
});

//Nav Scroll Animation
$(document).ready(function () {
  var scrollStart = 0;
  $(document).scroll(function () {
    var currentscroll = $(this).scrollTop();
    if (currentscroll > scrollStart) {
      $(".navbar").slideUp("fast");
    } else {
      $(".navbar").slideDown("fast");
    }
    scrollStart = currentscroll;
  });
});

//Count Animation
$(function () {
  $(".shobe").rCounter({
    duration: 35,
  });
});

$(function () {
  $(".welf").rCounter({
    duration: 35,
  });
});

$(function () {
  $(".account").rCounter({
    duration: 35,
  });
});
