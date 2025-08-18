let a = document.querySelector('.a')
let b = document.querySelector('.b')
let c = document.querySelector('.c')
let d = document.querySelector('.d')
let btn = document.querySelector('button')


//Bubbling Click
btn.addEventListener('click', function(){
    console.log("Button Clicked");
})
a.addEventListener('click', function(){
    console.log("A Clicked");
})
d.addEventListener('click', function(){
    console.log("D Clicked");
})
c.addEventListener('click', function(){
    console.log("C Clicked");
})
b.addEventListener('click', function(){
    console.log("B Clicked");
})

//Catch Event

