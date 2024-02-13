//3.0_变数与运算算子 let 是用来宣告变数
let a = 1;
console.log(a);

let characterHP = 100;
console.log(characterHP);

let myHp = 200;
console.log(myHp);

let noTnitialValue;

myHp = 1 + 200 + 3;
console.log(myHp);
//3.1_懒人运算子 += -= *= /= // ++ -- ** //
// myHp = myHp - 3;
myHp -= 3;
console.log(myHp);

myHp += 5;
console.log(myHp);

myHp *= 2;
console.log(myHp);

myHp /= 3;
console.log(myHp);

//4.3_i+ vs. ++i
let i = 0;
console.log(i++); //0
//（后置递增）(Post-increment)
console.log(i); //1
console.log("---------"); //---------
i = 0;
console.log(++i); //1
//（前置递增）(Pre-increment)
console.log(i); //1

//extra 4.3_i-- vs. --i
let x = 1;
console.log(i--); //1
console.log(i); //0
let g = 1;
console.log(--g); //0
console.log(g); //0
