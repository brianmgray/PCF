$("#star").click(function() {
  $("#star").html('<%= image_tag("star_filled.png", :height => 20)%>')
});

$('#nav-bar').hide();
   
// $(window).on('scroll',function() {
//   var scrolltop = $(this).scrollTop();

//   if(scrolltop >= 65) {
//     $('#nav-bar').fadeIn(250);
//     $('.schedule-nav-contain').addClass('fixed container');
//   }
   
//   else if(scrolltop <= 60) {
//     $('#nav-bar').fadeOut(250);
//     $('.schedule-nav-contain').removeClass('fixed container');
//   }
// });