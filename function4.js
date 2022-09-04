// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
// let username="rakesh";
// let password=1234;

// let inputuser="rakesh";
// let inputpass=12345;

// if(username==inputuser&&password==inputpass){
//   console.log("Login");
// } else if(username!=inputuser&&password!=inputpass){
//   console.log("wrong user & password");
// }
// else if(username!=inputuser){
//   console.log("wrong username");
// }else if(password!=inputpass){
//   console.log("wrong password");
// }
function checkvalidation(username,password,inputuser,inputpass){
  if(username==inputuser&&password==inputpass){
  return "Login"
} else if(username!=inputuser&&password!=inputpass){
  return "wrong user & password"
}
else if(username!=inputuser){
return "wrong username"
}else if(password!=inputpass){
 return "wrong password"
}
}
console.log( checkvalidation("rk2284",1235,"rk28284",12345))