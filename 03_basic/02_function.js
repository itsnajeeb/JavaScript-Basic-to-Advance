// const person = {
//   name: "Najeeb",
//   age: 20,
//   branch: "CSE",
// };
// console.log(person);
function takeObject(userObject) {
  // console.log(`The name of the user is ${userObject.name}, age of the user is ${userObject.age} and the course of the user is ${userObject.branch}`);
  // console.log(userObject);
}
// takeObject(person)
takeObject({
  name: "Zeeshan",
});

function Car(make,modal,year,owner){
    this.make=make
    this.modal=modal,
    this.year=year,
    this.owner=owner
}
const mycar=new Car("Najeeb","2BA1",2009);
const car2=new Car("Zeeshan", "2BAC", 2010)
// console.log(mycar.make);
// console.log(car2.modal);
function person(name,age,sex){
    this.name =name;
    this.age=age;
    this.sex=sex;
}
let najeeb=new person("Najeeb",20,"Male");

const car3=new Car("Najeeb","20B",2009, najeeb)
// console.log(car3);
// console.log(car3.owner.name);



// work with Array 
// function takeArr(userArr){
//     return userArr;
// }

// console.log(takeArr([20,20,30,40]));