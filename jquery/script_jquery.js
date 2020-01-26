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
// SHOさんの解説↓
// var positionCurrent = $('.current-pos');
// console.log(positionCurrent);
// 変数 positionCurrent  に、current-posクラスがあるセクションのDOMを配列として代入して、
// それをconsole.logで見るコードになります。
// 5つ取れてるのがわかると思います。
// console.log(positionCurrent[0]); とすると、
// 最初のセクションのDOMにアクセスできます。
// たくさんありますが、ここで大事な項目は「offsetTop（各セクションが一番上からどのぐらい離れているか[px]）の値」です
// console.log(positionCurrent[0].offsetTop); とすると、
// 最初のセクションのoffsetTopにアクセスできます。ここでは700になっていると思います。
// 上記を前提として、下記のソースで、ドキュメント読み込み（アクセス）時に、current-posクラスがある全てのセクションのoffsetTop（上からの距離）を配列 positionTopArray に格納することができます。
// $(function () {
//   var nav = $('#current-nav li a');
//   // console.log(nav);
//   var positionCurrent = $('.current-pos');
//   // console.log(positionCurrent); →5(セクション数分)と出力される
//   // console.log(positionCurrent[0]); →0なので最初のセクションが出力される
//   // console.log(positionCurrent[0].offsetTop); →700(最初のセクションのサイト一番上からの距離)が出力される
//   var positionTopArray = [];
//   for (var i = 0; i < positionCurrent.length; i++) {
//     positionTopArray[i] = (positionCurrent[i].offsetTop);
//   }
//   // console.log(positionTopArray); →各セクションのサイト上部からの距離が出力される
//   $(window).scroll(function () {
//     var positionScroll = $(window).scrollTop();
//     // console.log(positionScroll); →スクロールしていくとサイト上部からの距離がばーっと出力される
//     for (i = 0; i < positionTopArray.length; i++) {
//     }
//   });
// });


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

// http://www.kenjisugimoto.com/2016/02/26/jquery%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%9F%E3%82%A8%E3%83%AA%E3%82%A2%E3%81%BE%E3%81%A7%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E3%81%A8%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE-2/


// http://begoingto.jp/demo/scroll_menu/


// https://shogo-log.com/link-current/


// $(window).on('load resize',function(){
//   var set = 100;
//   var top = 600;
//   var pos01 = Math.round($("#card").offset().top - set);
//   var pos02 = Math.round($("#news").offset().top - set);
//   var pos03 = Math.round($("#price").offset().top - set);
//   var pos04 = Math.round($("#access").offset().top - set);
//   var pos05 = Math.round($("#contact").offset().top - set);
//   $(window).on('load resize scroll',function(){
//     var posScroll = $(window).scrollTop();
//     if(pos01 <= posScroll - top && posScroll < pos02) {
//       $(".nav .flex li").removeClass('current');
//       $("#card-current-link").addClass('current');
//     } else if(pos02 <= posScroll && posScroll < pos03) {
//       $(".nav .flex li").removeClass('current');
//       $("#news-current-link").addClass('current');
//     } else if(pos03 <= posScroll && posScroll < pos04) {
//       $(".nav .flex li").removeClass('current');
//       $("#price-current-link").addClass('current');
//     } else if(pos04 <= posScroll && posScroll < pos05) {
//       $(".nav .flex li").removeClass('current');
//       $("#access-current-link").addClass('current');
//     } else if(pos05 <= posScroll) {
//       $(".nav .flex li").removeClass('current');
//       $("#contact-current-link").addClass('current');
//     }
//   });
// });
// https://designsupply-web.com/knowledgeside/3011/


// $(function() {
//   // ナビゲーションのリンクを指定
//  var navLink = $('#current-nav li a');

//   // 各コンテンツのページ上部からの開始位置と終了位置を配列に格納しておく
//  var contentsArr = new Array();
// for (var i = 0; i < navLink.length; i++) {
//      // コンテンツのIDを取得
//     var targetContents = navLink.eq(i).attr('href');
//     // ページ内リンクでないナビゲーションが含まれている場合は除外する
//     if(targetContents.charAt(0) == '#') {
//        // ページ上部からコンテンツの開始位置までの距離を取得
//           var targetContentsTop = $(targetContents).offset().top;
//        // ページ上部からコンテンツの終了位置までの距離を取得
//           var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
//        // 配列に格納
//           contentsArr[i] = [targetContentsTop, targetContentsBottom]
//     }
//  };

// // 現在地をチェックする
//  function currentCheck() {
//      // 現在のスクロール位置を取得
//       var windowScrolltop = $(window).scrollTop();
//       for (var i = 0; i < contentsArr.length; i++) {
//          // 現在のスクロール位置が、配列に格納した開始位置と終了位置の間にあるものを調べる
//         if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
//               // 開始位置と終了位置の間にある場合、ナビゲーションにclass="current"をつける
//              navLink.removeClass('current');
//              navLink.eq(i).addClass('current');
//               i == contentsArr.length;
//           }
//      };
// }

//  // ページ読み込み時とスクロール時に、現在地をチェックする
// $(window).on('load scroll', function() {
//     currentCheck();
// });

// });
// https://www.tam-tam.co.jp/tipsnote/javascript/post4996.html


// https://satohmsys.info/post-1389/


// http://webdrawer.net/javascript/positioncurrent.html

// -------カレント表示 END---------------------------------