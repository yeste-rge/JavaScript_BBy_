//4.1_templete string
//在字串中插入表达式
const r = 5; //宣告变数r是圆的半径
const area = r * r * 3.14; //算圆的面积是半径的平方*3.14

//还没有用templete string
// const str =
//   "圆半径为" + r.toString() + ", 圆面积为" + area.toString() + "平方公分";

//用 templete string
const str = `圆半径为${r}公分, 圆面积为${area}平方公分`;
console.log(str);
