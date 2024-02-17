//5.1_if_else c陈述式
// //const condition = false;
// const condition = true;

// // if (condition) {
// if (true) {
//   console.log("条件成立");
//   //unless除非 it's const condition = true; It will print it
// }

// console.log("程式结束");

const weight = 50;
//weight(体重/重量)

const height = 160;
const BMI = weight / (height / 100) ** 2;

console.log("BMI:", BMI);
if (BMI < 18.5) {
  //BMI < 18.5 is (表达式)(expression)
  //true
  // console.log("BMI:", BMI);
  console.log("Too lightweight太轻");
} else if (BMI >= 24) {
  console.log("Too much weight太重");
} else {
  //false
  // console.log("BMI:", BMI);
  console.log("normal");
}
