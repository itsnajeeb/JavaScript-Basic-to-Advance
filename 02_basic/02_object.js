const tinderUser = new Object();
// console.log(tinderUser);
tinderUser.id="123bcd";
tinderUser.name="Najeeb";
tinderUser.email="najeeb@gmail.com";
// console.log(tinderUser.id);


// object in object 
const regularUser={
    email : "rahman@hotmail.com",
    fullname : {
        firstname: "Najeeb",
        lastname : "Rahman",
        loginCredential : {
            username : "najeeb@username",
            password : "123abc",
        },
        subject : ["Hindi","English","Urdu","Science"]
    }
}
// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstname);
// console.log(regularUser.fullname.loginCredential);
// console.log(regularUser.fullname.loginCredential.username);
// console.log(regularUser.fullname.subject[3]);

// combine the object 
const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3={c:6,e:8}
// console.log(obj1);
// let targetObje=Object.assign(obj1,obj2,obj3)
// console.log(targetObje);
// console.log(obj1==targetObje);


// const targetObj=Object.assign({},obj1,obj2,obj3);
// console.log(targetObj==obj1);

const studentInfo={
    studntName : "Najeeb",
    RollNo : "0123CS2123",
    Branch : "CSE",
    Batch : 2024,
    role : "",
    intrestFiled : "Programming"

}
// console.log(Object.keys(studentInfo));
// console.log(Object.values(studentInfo));
// console.log(Object.entries(studentInfo)[0][1]);
console.log(studentInfo.hasOwnProperty('Batch'));