$(function() {

  $('.qa__list--item').each(function() {
    $(this).on('click', function() {
      $(">.qa__q", this).toggleClass('open');
      $(">.qa-a__wrapper", this).slideToggle();
    });
  });

});