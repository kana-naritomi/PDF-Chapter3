// メソッド
const teacher = { name: "太郎", //プロパティ
  subject: "国語", //プロパティ
  profile: function() { console.log("担当教科は国語です"); } }//メソッド
  
  teacher.profile()


// 引数
function sumNum(x) {
  const result = x + 1
  console.log(result);
  };
  sumNum(2)

function sumNum(x, y) {
  const result = x + y
  console.log(result);
  };
  sumNum(5, 10)

function showText(x) {
  console.log(x);
  };
  showText(`引数`)


// コールバック関数
// function tomato(price, func) {
//   const name = "トマト";
//   func(name, price);
//   }
//   const price = function price(name, price) {
//   console.log(name + "の値段は" + price + "円です。");
//   }
//   tomato(100, price);

// const traffic_light = {
//   blue: "go",
//   yellow: "slow down",
//   red: "stop",
//   current: "",
//   change_light:function(){
//     switch(traffic_light.current){
//       case traffic_light.blue:
//         traffic_light.current = traffic_light.yellow;
//         break;
//       case traffic_light.yellow:
//         traffic_light.current = traffic_light.red;
//         break;
//       case traffic_light.red:
//         traffic_light.current = traffic_light.blue;
//         break;
//       default:
//         traffic_light.current = traffic_light.blue;
//       break
//     }
//   }
// }
// traffic_light.change_light();
// console.log(traffic_light.current);
// traffic_light.change_light();
// console.log(traffic_light.current);
// traffic_light.change_light();
// console.log(traffic_light.current);
// traffic_light.change_light();
// console.log(traffic_light.current);

// 参照:https://techacademy.jp/magazine/5562










// -----課題-----

// 1.
// プロパティ: オブジェクトの状態や特性を表す情報
// メソッド: オブジェクトの操作をするための命令

var obj = {
  showText: function() {
    console.log('Hello World');
  }
}
obj.showText();


const myData = {
  firstName: "夏菜",
  age: 30,
  birthplace: "北海道",

  getName: function() {
    console.log("名前は" + this.firstName + "です");
  },
  getAge: function() {
    console.log(this.age + "歳です");
  },
  getBirthplace: function() {
    console.log(this.birthplace + "出身です");
  }
}
myData.getName();
myData.getAge();
myData.getBirthplace();


// 2.
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
console.log(fruit("マスカット", "400"));


// 3.
function addTax(price, func) {
  // priceは値段
  // funcは実行する関数名
  // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);
  func(vegetable, taxPrice);
}
const price = function price(vegetable, price) {
  console.log(vegetable + "の値段は" + price + "円です。");
  }
// トマトの税込み価格をコンソールに表示させる処理
let vegetable = "トマト";
addTax(100, price);
// 玉ねぎの税込み価格をコンソールに表示させる処理
vegetable = "玉ねぎ";
addTax(200, price);