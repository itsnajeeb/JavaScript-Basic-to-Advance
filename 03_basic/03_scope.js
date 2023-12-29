// let a=10;
// var b=20;
// const c=30;
// console.log(a);
// console.log(b);
// console.log(c);
function printvalue() {
  var a = 10;
  let b = 20;
//   console.log("Inside function " + a);
//   console.log("Inside function " + b);
  function printOne(){
    let a=30;
    // console.log("PrintOne " + a);
  }

  printOne()
}
// console.log(a);
// console.log(b);
printvalue();


// another mehtod 
if(true){
    let a=100;
    var b=200;
}
// console.log(b);


let a =100;
if(true){
    let a=200
    // console.log(a);
}
// console.log(a);

// scope 2 
function one (){
    const username = "najeeb";
    function two(){
        const website = "bluehillsacademy";
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()
// console.log(username);//Not Accessable 

if(true){
    const username="najeeburrahman"
    if(username=="najeeburrahman"){
        const website =" youtube";
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// console.log((addone(5)));
// console.log(addTwo(10));

function addone(num){
    return num + 1;
}
const addTwo = function (num){
    return num+2
}
// console.log((addone(5)));
// console.log(addTwo(10));