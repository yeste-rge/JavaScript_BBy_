//4.0_(d)"+"(operation)
//two function 1)Add numbers 数字相加 2)string concatenation字串串接
console.log("123" + 4); //'1234'(string)   //"123" is string, 4 is number //4 turned to string and add "123"
console.log(1 + "234"); //'1234'(string)

const str3 = 1 + 2 + "3" + 4 + 5; //'3345' //1+2 = 3, 再跟"3"加在一起变成"33", 4跟5 加在”33"里面 就变成 "3345"
//Normally I don't recommend adding相加 strings and numbers 容易粗心出意外 手动操作比较安心
console.log(str3);

const age = 18;
const str4 = "我今年" + age.toString() + "岁";
console.log(str4); //我今年18岁
