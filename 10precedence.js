//4.0_(b)运算子对的优先顺序(precedence)
let x = 1 + 2 * 3;
console.log(x);

x = (1 + 2) * 3;
console.log(x);

x = x + 1; // x2 = x + 1;
console.log(x); // console.log(x2);
