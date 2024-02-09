//3.3_const
const height = 1.75; // constant :a particular number or amount that never changes 常数
// const 不能改变的变数
//用 const 就算不看下面,也知道值不会被改变
// 用 const 也可以减少这类错误发生的机率 
const weight = 65;

//height = 1; (wrong) //TypeError: Assignment to constant variable.

const BMI = weight / height / height ;
console.log(BMI);
//3.5_可读性(readability)
//可以非常清楚的看出来 它的目的到底是什么?
//正确的使用一些中间的变数 然后加上好的命名方式 可以增加可读性的效果
//新手常犯的错误:莫名的中介变数, 逻辑不明 但是可读性也没变高
//不需要无谓的多余变数 时时保持思考,会慢慢进步

console.log(65/1.75/1.75);//只有结果而已 看起来只是在运算