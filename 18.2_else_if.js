const n = 1;
//如果第一个条件已经符合了 它就不会进到第二个条件里面 就算第二个条件符合 它也不会进来
if (n < 1) {
  console.log("n<1");
} else if (n < 2) {
  console.log("n<2");
} else if (n < 3) {
  console.log("n<3");
} else {
  console.log("n>=3");
}
