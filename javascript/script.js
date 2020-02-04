// お問い合わせフォーム(お問い合わせ種別)-----------------------------------------

//関数changeItemを定義し、引数としてobjを受け取る
//objの値が0（入力がなかったとき）colorを指定しない''
//そうでない場合（入力されたとき）color(#333)を指定する''
function changeItem(obj) {
  if ( obj.value == 0 ) {
    obj.style.color = '';
  } else {
    obj.style.color = '#333';
    // console.log(obj)
    // console.log(obj.value)
  }
}

// セレクトボックスで項目を選ぶ
// イベントハンドラ「onChange」でchangeItem関数が発動
// changeItem(this)で値と一緒に返ってくる→changeItem(obj)で受け取る
// objで値（value）を受け取った時はcolorを変える

// ------------console.log(obj)→出力結果------------------------
// <select id="type" name="type" class="select inputs-type" onchange="changeItem(this)"> <!-- selectの値が変更されたときに発動 -->
  // <option value="" disabled="disabled" selected class="no-select">ーーー</option>
  // <option value="toi1">問１</option>
  // <option value="toi2">問２</option>
  // <option value="toi3">問３</option>
// </select>
// ------------console.log(obj)→出力結果------------------------

// ------------console.log(obj.value)→出力結果------------------------
// 問１を選択すれば toi1
// 問２を選択すれば toi2
// 問３を選択すれば toi3
// ------------console.log(obj.value)→出力結果------------------------

// お問い合わせフォーム(お問い合わせ種別)-----------------------------------------


