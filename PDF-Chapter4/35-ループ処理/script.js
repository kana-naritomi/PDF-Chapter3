// for
for (var i = 1; i < 10; i++) {
  console.log("ループ" + i + "回目");
  };

// for in
var items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
console.log(items[index]);
};

// for of
var teachers = [ { name: "太郎", age: 25, subject: "国語", }, { name: "浩司", age:
30, subject: "数学", }, { name: "花子", age: 26, subject: "社会", } ] 
for (teacher of teachers) { console.log(teacher); };


// -----課題-----

// 1.
for (var i = 10; i < 40; i++) {
  console.log(i);
};

// 2.
var items = ["あか","あお","きいろ"];
for (index in items) {
  console.log(items[index]);
}

// 3.
var members = [ { name: "朱莉", age: 24, color: "ブルー"},
  {name: "莉佳子", age: 21, color: "イエロー"},
  {name: "萌衣", age: 22, color: "アクアブルー"} ]
for (member of members) { console.log(member); };