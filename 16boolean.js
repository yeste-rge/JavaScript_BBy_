//5.0_布林值 boolean

//比大小
// > <
console.log("3>4", 3 > 4); //3>4 false
console.log("3<4", 3 < 4); //3<4 true

//>=, <=
console.log("3>=4", 3 >= 4); //3>=4 false
console.log("3<=4", 3 <= 4); //3<=4 true
console.log("3>=3", 3 >= 3); //3>=3 true
console.log("3<=3", 3 <= 3); //3<=3 true

//等于
// ==
//值一样就true
console.log("3 == 3", 3 == 3); //3 == 3 true
console.log('3=="3"', 3 == "3"); //3=="3" true
console.log("3==4", 3 == 4); //3==4 false
console.log("3 == 4", 3 == "4"); //3 == 4 false
//===
//型别与值都一样才true
//使用===, 要型别与值都一样才成立
console.log(3 === "3"); //false
console.log(3 === "4"); //false

let x = 3; //undefined (from node.js)
console.log(x == 3); //true
console.log(x === 3); //true

//比较和赋值是不同的概念
//e.g.
console.log((x = 3)); //3
//Change the value of x to 3
console.log((x = 4)); //4
//Change the value of x to 4

console.log(x === 4); // false

//一般写code 通常以===为主
//用==有时候会出现没注意到的bug
//但这个还是要看情况去判断

//不等于 !== !=
//!= -> == 的相反
//!== -> === 的相反
console.log(3 != 3); // false
console.log(3 != "3"); //false

console.log(1 !== 2); //true
console.log(3 !== 3); //false

//且&&,或 ||
// && -> 两边都要成立才true
// || -> 其中一边成立才 true
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); // false
console.log(1 < 3 && 2 > 1); //true
//这是一个表达式(expressions)(可化为一个值)
// && 的优先顺序是先做完后and才会作用
console.log(23 > 25 && 12 < 1); //false
console.log(1 > 3 && 2 === 2); //false
// && = 且 = 而且 = 两边都要成立

// || = 或 = 一边成立即可
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(3 > 1 || 1 != 3); //true
console.log(3 > 5 || 1 != 1); // false
console.log(3 > 5 || 1 === 1); //true

//! 相反（not)
//!true => false
//!false => true
console.log(!true); //false
console.log(!false); //true
console.log(!(3 > 1)); //false
//(跟上面一样的意思)
//console.log(3 > 1 === false); //false

console.log(3 < 2); //false
console.log(!(3 < 2)); //true
