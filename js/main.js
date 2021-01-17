$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 58) {
      $('.headerNav__container').addClass('fixed');
      $('.topMenu, .header').css('opacity', '0');
    } else {
      $('.headerNav__container').removeClass('fixed');
      $('.topMenu, .header').css('opacity', '1');
    }
  });
  
  $('.topMenu2').hide();

    $('.header__list1').click(function() {
      $('.topMenu2').hide();
      $('.topMenu1').show();
      $(this).addClass('selected');
      $('.header__list2').removeClass('selected');
    });
    
    $('.header__list2').click(function() {
      $('.topMenu1').hide();
      $('.topMenu2').show();
      $(this).addClass('selected');
      $('.header__list1').removeClass('selected');
  });

  if ($('.header__list1').hasClass('selected')) {
    $('.header__list1').css('border-bottom', '1px white solid');
  }

  if ($(window).width() < 740) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 75) {
        $('.topMenu__spContainer').addClass('fixed');
      } else {
        $('.topMenu__spContainer').removeClass('fixed');
      } 
    });
      $(window).scroll(function() {
        var doch = $(document).innerHeight();
        var winh = $(window).innerHeight();
        var bottom = doch - winh;
        if (bottom <= $(window).scrollTop()){
          $('.footer__Nav').slideUp();
        } else {
          $('.footer__Nav').slideDown();
        }
      });
      
   };
});