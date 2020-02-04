// カルーセル swiper--------------------------------------------------------------
var swiper = new Swiper('.swiper-container', { //初期化
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true, //スライドをループ
  speed: 500, //スライドのスピード:デフォルトは300(0.3秒)
  autoplay: { //スライドを自動再生
    delay: 2000, //スライドが切り替わる間の秒数
    disableOnInteraction: false, //スライドを操作していても、自動再生を止めない
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets', //○●○の形で現在何番目のスライダーかを明示
    clickable: true, //ページネーションのクリックを有効化(※type: 'bullets'時のみ有効)
  },
});
// カルーセル---------------------------------------------------------------------

// カルーセル slick---------------------------------------------------------------
$('.slick-wrapper').slick({
  autoplay: true, //自動再生
  autoplaySpeed:2000,
  dots:true, //ページネーション
  infinite: true, //スライドのループ有効化
  fade: true, //フェードの有効化
  prevArrow: '<img src="../img/carousel/slider/arrow-prev.svg" class="slide-arrow prev-arrow">', //ここでボタンの画像を指定＋共通クラス、個別クラスを付与してスタイリング
  nextArrow: '<img src="../img/carousel/slider/arrow-next.svg" class="slide-arrow next-arrow">'
});
// カルーセル---------------------------------------------------------------------