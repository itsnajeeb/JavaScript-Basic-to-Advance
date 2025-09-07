//scope -> function scope, global scope, and block scope

// function scope -> function k ander hi use ho skti hai
// global scope -> pure program me kahi be access ho skti hai
// block scope -> {} braces mein hi use ho skti hai


// function abc() {
//     var a = 10 //function scope
//     let a = 29;
//     console.log(a);
// }

// {
//     let a=10// we cannot access out of {} because this scope variable
//     var b=20//accessible out of {} because var are function scope ignore by if for {}
// }
// console.log(b);

//Execution context

//js sabse pahle jaise hi aapka function dekhta hai, sabse pahle js banata hai execution context, ye ek process hai jo k do different phase me chalta hai, memory phase me aur execution phase me 

function abc() {
    let a = 10;
    function bcd() {
        console.log("INNER bcd > ",a);
    }
    console.log("INNER abc >  ", a);
}
abc()()




