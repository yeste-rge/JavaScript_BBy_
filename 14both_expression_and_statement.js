//4.2_表达式 vs. 陈述式 (非常重要的概念，以便写程式的逻辑清楚许多)
//1.表达式(expressions) ->The expression itself is a value
//2.陈述式(statements) -> A statement (is) performs(执行) an action
//同时是表达式也是陈述式?
// e.g.
// let i = 0;
// console.log((i = 100));
// //Set i to 100(statements)陈述式 //The value of the entire row(整行) itself is 100(expressions)表达式

// console.log(i++); // i = i + 1
// //Add 1 to the value of i (statements)陈述式
// //The value of the entire row(整行) itself is 100(expressions)表达式
// //the value printed to the console will be the original value of i before the increment (which is 100)
// console.log(i);
// //And then i will be internally updated to become 101.

//要怎么区分((表达式)(expressions)/ (陈述式)(statements))
//不太需要指着在[区分是哪一种]上
//重点是[用什么视角]看
//If you focus on [its value], treat(视为/对待) it as an expression(表达式)
//If you focus on [what to do], treat it as a statement(陈述式)

//分号代表一个陈述式(statements)的结尾, 一般可加可不加
//但如不把表达式(expressions)当成陈述式就一定要加
//e.g.
// 3;
// 1 + 3;
// "World" + "World";

// let i = 0;
// //因为这一句它是一个陈述式 所以它本身没有值 所以它就给我们 undefined
// //简单来说它是一个没有值的陈述式
// i++; //上面i的值是0
// console.log(i); //1
//看i的值
console.log(1);
//1
//undefined
//(从node)
//console.log是陈述式, 它会印出1
//但这个陈述式它本身的值是undefined
