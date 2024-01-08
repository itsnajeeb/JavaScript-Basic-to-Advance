let buttons = document.querySelectorAll('.buttons')
let body=document.querySelector('body');

// console.log(body);
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // console.log("Clicked");
        // console.log(e.target.id);
        body.style.backgroundColor =e.target.id ;



    })
})