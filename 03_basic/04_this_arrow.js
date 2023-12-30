const user={
name : "Najeeb",
price : 999,
welcomeMessage : function (){
    console.log(`Welcome ${this.name}`);
    console.log(this);

}
}
// user.welcomeMessage();
// user.name="Zeeshan";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username ="najeeb";
//     console.log(this.username);//this keyword does not work with regular function 
// }
// // chai()

const chai=() =>{
    let username='najeeb';
    console.log(this);
}
// chai();

function getThis(){
    return this
}
// console.log(getThis());

// const addTwo=(num1,num2)=>(num1+num2)//implicity

const addTwo=(num1,num2)=>{
return num1+num2//explicity 
}

// console.log(addTwo(10,20));

// return object 
const returnObj=()=>{
  return { 
    name:"Najeeb",
    age:"20",
    printName:function(){console.log(`Name is ${this.name}`);}}
}
// console.log(returnObj().printName());
// console.log(returnObj());


// pert 2 immediately invoke function 
// (function db(){
//     console.log("DB CONNECTED");
// })();
// db();

// const mydb=()=> console.log("2nd Db Connected ");
// mydb()

// ( () => {console.log("Invoke : 2nd DB Connected ");})()
console.log(typeof this);