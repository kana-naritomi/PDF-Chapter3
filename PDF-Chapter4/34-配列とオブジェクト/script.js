var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits);

var teacher = {
  name: "太郎",
  age: 25,
  subject: "国語",
  }
  console.log(teacher.name);


// -----課題-----

// 1.
var animal = ["cat", "lion", "dog", "bird"];
console.log(animal[1]);
console.log(animal[2]);

// 2.
// key = オブジェクトでのプロパティ名
// value = オブジェクトでの値
// プロパティ = あらかじめ設定しておいた値に名前をつけたもの

// 3.
var family = {
  name: "太郎",
  age: 30,
  relationship: "父"
}
console.log(family);

// 4.
var family = [
  {
    name: "花子",
    age: 30,
    relationship: "母"
  },
  {
    name: "一郎",
    age: 5,
    relationship: "長男"
  },
  {
    name: "次郎",
    age: 3,
    relationship: "次男"
  },
  {
    name: "桃子",
    age: 1,
    relationship: "長女"
  }
]
console.log(family[0].age);
console.log(family[3].relationship);