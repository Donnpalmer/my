$('.mouse-parallax').on('mousemove',(e) => {
   const x = e.pageX / $(window).width();
   const y = e.pageY / $(window).height();

   $('.mouse-parallax_background').css(
       'transform',
       'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
   );

   $('.mouse-parallax_content').css(
    'transform',
    'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
   );
});