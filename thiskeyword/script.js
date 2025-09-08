// NOTES
//1. global - window
//2. function - window 
//3. method with es5 function - object
//4. method with es6 arrow function - window 
//5. es5 function inside es5 method - window
//6. arrow function inside es5 method - object
//7. event handler - event
//8. class - blank object


// console.log("Global ", this)

function abc() {
    let name = 'najeeb'
    console.log("Regular Function ", this.name);
}
// abc()

let bcd = () => {
    const name = "Kamil"
    console.log("Arrow Function ", this.name);
}
// bcd()

const obj = {
    name: "Najeeb",
    sayName: () => {
        bcd: () => {
            console.log("this in Arrow function ", this);
        }
        console.log("In Object > ", this);
        bcd()
    }
}

// obj.sayName()

// document.querySelector('.heading').addEventListener('click', function () {
//     console.log(this.style.color = "red");//yahan pr this heading ko refer krega q ki listner hading pr laga hai 
// })

//call apply bind 
//functin call krte wqt aap set kr skte ho ki this ki value kya hogi