// 関数宣言
// function functionTest() {
// // ここに処理を書いていきます。
// }
// function showAlert() {
//   alert("functionTestが実行されました。")
//   }
//   showAlert()

// 関数式
// var getText = function () {
//   return "getTextが実行されたのでこのテキストを返します。"
//   };
//   console.log(getText());

// スコープ
// var getText = function () {
//   var text = "getTextが実行されたのでこのテキストを返します。";
//   console.log(text);};


// -----課題-----

// 1.
function calcRectArea(width, height) {
  return width * height;
}
console.log(calcRectArea(5, 6));

function showAlert() {
  alert("関数難しい")
}
showAlert()

// 2.
var getRectArea = function(width, height) {
  return width * height;
}
console.log(getRectArea(3, 4));

// 3.
// スコープとは変数の名前や関数などの参照できる範囲を決めるもの。
// スコープの中で定義された変数はスコープの内側でのみ参照でき、スコープの外側からは参照できない。