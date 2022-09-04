// Problem 3: Given 2 numbers a and b print which is greater or "both equal".

// let a=5;
// let b=4;
// if(a>b){
//   console.log("greater");
// } else if(a<b) {
//   console.log("lesser");
//   } else {
//   console.log("equal");
//   }
function checknumber(a,b){
  if(a>b){
  return "greater"
} else if(a<b) {
  return "lesser"
  } else {
  return "equal"
  }
}
console.log(checknumber(5,5))