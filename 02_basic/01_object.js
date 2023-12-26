// object literals
 
// 1st way to create and object 

// const person={};
// person.name = "Najeeb";
// person.age=20;
// person.qualification = "B.tech"

const person={
    name :"Najeeb",
    "full name" : "Najeeb Rahman",
    "age" : 20,
    "qualification" : "B.tech",
    email : "najeeb@google.com"
}

// console.log(person.name);
// console.log(person["name"]); //2nd way to access the object value and it is the best way 
// console.log(person.age);
// console.log(person.qualification);
// console.log(person["full name"]);

// over ride the properties value 
person.email ="rahman@gmail.com"
Object.freeze(person)//for all properties 
// Object.freeze(person.email)//for specific properties 
person.name = "Kamil"
// console.log(person.name);


// create a symbol 
let mysym = Symbol("MyKey-1");
const person1 = {
    name : "Najeeb",
    age : "20",
    // mysym : "Key-2"//this is not the right syntax of symbol 
    [mysym] : "Key-2"//This is Ok

}
// console.log(person1.mysym);
// console.log(person1[mysym]);


// create a function in object 
const person3={
    name : "Najeeb",
    role : "Programmer",
    greeting : function (){
        // return ("Hy Mr Coder ")
       console.log(`Hello ${this.name}`);
    }
}
person3.greeting()
// console.log(person3.greeting());//if function return the value 
