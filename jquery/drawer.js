$(function() {
  var openBtn = $('.drawer-btn');
  var drawerMenu = $('.drawer-menu');
  var closeBtn = $('.drawer-btn-close');
  var overlay = $('.overlay');

  function menuOpen() {
    drawerMenu.addClass('open'); //ドロワーメニューを表示
    overlay.fadeIn();
    closeBtn.fadeIn();
  }
  function menuClose() {
    drawerMenu.removeClass('open'); //ドロワーメニューを非表示
    overlay.fadeOut();
    closeBtn.fadeOut('fast');
  }

  openBtn.on('click', function() {
    menuOpen();
  });
  closeBtn.on('click', function() {
    menuClose();
  });
  overlay.on('click', function() { //Closeボタン以外(背景)クリックでもドロワーメニューを非表示にさせる
    menuClose();
  });

});