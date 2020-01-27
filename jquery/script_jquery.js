// -------スムーススクロール-----------------------------
// navクラスにある<a>のクリックファンクション
// navHight(任意の名前)を100pxに指定
// <a>をクリックしたときのhrefの値をattrで取得し、id(任意の名前)に代入
// topからid(各セクションのサイト内位置)までの距離 - navHight(fixedにしてあるナビバー100px分の高さ) + 1px
// (AセクションからBセクションへメニューをクリックして移動すると、BセクションにいるのにAセクションメニューに
// 下線がついたままになるのを、強制的に1pxスクロールさせることで下線をBセクションメニューへ移動させるため)
// scrollTop(ページ最上部)からpositionまでの距離を500ミリ秒で移動させる

// ナビバー
$('.nav a').on('click',function() {
  var navHeight = 100;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});
// お問い合わせボタン
$('.top__contact').on('click',function() {
  var navHeight = 100;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});
// priceお問い合わせリンク
$('.price-table-contact__link').on('click',function() {
  var navHeight = 100;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});
// フッターメニュー
$('.footer__menu--list-link').on('click',function() {
  var navHeight = 100;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});
// TOPリンク
$('.footer__top-link').on('click',function() {
  var navHeight = 100;
  var id = $(this).attr('href');
  console.log(id)
  var position = $(id).offset().top - navHeight + 1;
  console.log(position)
  $('html, body').animate({
    'scrollTop':position
  }, 500); 
});

// -------↓コンソールの正しい書き方-------
// $('.nav a').on('click', function () {
//   var navHeight = 100;
//   console.log('navHeight: ' + navHeight);
//   var id = $(this).attr('href');
//   console.log('id: ' + id);
//   var position = $(id).offset().top
//   console.log('position: ' + position);
//   $('html, body').animate({
//     'scrollTop': position
//   }, 500);
//   return false;
// });
// -------↑コンソールの正しい書き方-------

// ↓？のところが分からなかった→https://www.sejuku.net/blog/23627
// $(function(){
//   $('a[href^="#"]').click(function(){
//       var speed = 500;
//       var href= $(this).attr("href");
//       var target = $(href == "#" || href == "" ? 'html' : href);
//       var position = target.offset().top
//       $("html, body").animate({scrollTop:position}, speed, "swing")
//       return false
//   });
// });
// -------スムーススクロール END-------------------------

// -------カレント表示-----------------------------------
$(function() {
  var positionCurrent = $('.current-pos');
    console.log(positionCurrent);
  var nav = $('#current-nav li a'); //追加した
    console.log(nav);
  var top = 600; //追加
  // 各コンテンツのページ上部からの開始位置と終了位置を配列にする
  var positionTopArray = [];
    console.log(positionTopArray);
  // 配列の長さの分だけ繰り返す
  for (var i = 0; i < positionCurrent.length; i++) {
     // 複数の”.item”の中からインデックス番号を指定することで特定の要素だけを取得
     var target = nav.eq(i).attr('href');
      console.log(target);
     if(target.charAt(0) == '#') {
     // ページ上部からコンテンツの開始位置までの距離を取得。-100はheader分。
     var targetTop = $(target).offset().top - 100;
      console.log(targetTop);
     // ページ上部からコンテンツの終了位置までの距離を取得(引数にtrueを設定することで、marginも含んだ高さを取得できます)
     var targetBottom = targetTop + $(target).outerHeight(true);
      console.log(targetBottom);
     // 配列に格納
     positionTopArray[i] = [targetTop, targetBottom]
      console.log(positionTopArray);
     }
  };

 // 現在地をチェックする
  function currentNow() {
    // 現在のスクロール位置
    var positionScroll = $(window).scrollTop();
      console.log(positionScroll);
    for (var i = 0; i < positionTopArray.length; i++) {
      // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
      if(positionTopArray[i][0] <= positionScroll && positionTopArray[i][1] >= positionScroll) {
        // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
        nav.removeClass('current');
        nav.eq(i).addClass('current');
      } else if(positionScroll <= top) {
        // スクロールがトップ(サイト上部から600px)にいる場合、ナビゲーションからcurrentクラスを削除
        nav.removeClass('current');
      }
    };
  }

  // ページ読み込み時とスクロール時に、現在地をチェックする
  $(window).on('load scroll', function() {
    currentNow();
  });

  nav.on('click',function() {
    nav.removeClass('current');
    $(this).addClass('current');
      console.log(this);
  });

});
// -------カレント表示 END---------------------------------