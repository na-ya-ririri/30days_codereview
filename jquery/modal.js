$(function() {

  var overLay = $('.modal-overlay');
  var modal = $('.privacy-modal__wrapper');

  // プライバシーリンクをクリックしたらモーダルとオーバーレイを表示
  $('.privacy-content').on('click', function() {
    overLay.fadeIn();
    modal.fadeIn();
  });

  // ✕ボタンおよび閉じるリンク(共通クラスを付与)をクリックしたらモーダルとオーバーレイを非表示
  $('.close-modal').on('click', function() {
    overLay.fadeOut();
    modal.fadeOut();
  });

  // オーバーレイをクリックしてもモーダルを非表示
  overLay.on('click', function() {
    overLay.fadeOut();
    modal.fadeOut();
  });

});