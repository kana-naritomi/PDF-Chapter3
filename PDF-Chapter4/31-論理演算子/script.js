// // AND(&&)

// var numA = 20;
// var numB = 40;
// if (numA == 20 && numB == 40) {
// console.log("ANDの条件と一致した処理");
// console.log(numA == 20 && numB == 40);
// } else {
// console.log("ANDの条件と一致しなかった処理");
// console.log(numA == 20 && numB == 40);
// };


// // OR(||)

// var numA = 10;
// var numB = 40;
// if (numA == 20 || numB == 40) {
// console.log("ANDの条件と一致した処理");
// console.log(numA == 20 || numB == 40);
// } else {
// console.log("ANDの条件と一致しなかった処理");
// console.log(numA == 20 || numB == 40);
// };


// // NOT(!)

// var boolean = false;
// if (!boolean) {
// console.log("NOTの条件と一致した処理");
// console.log(boolean);
// } else {
// console.log("NOTの条件と一致しなかった処理");
// console.log(boolean);
// };


// --------課題--------

// 1.AND
var numA = 10;
var numB = 50;
if(numA == 10 && numB == 50) {
  console.log("ANDの条件と一致した処理");
  console.log(numA == 10 && numB == 50);
} else {
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 10 && numB == 50);
};

// 2.OR
var numA = 2;
var numB = 4;
if (numA == 2 || numB == 4) {
  console.log("条件一致");
  console.log(numA == 2 || numB == 4);
} else {
  console.log("条件不一致");
  console.log(numA == 2 || numB == 4);
};

// 3.NOT
var num = 100;
if (num != 100) {
  console.log("NOT条件一致");
  console.log(num != 100);
} else {
  console.log("NOT条件不一致");
  console.log(num != 100);
};