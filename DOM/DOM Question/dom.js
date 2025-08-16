//select all class that have buy-now name
let cls = document.querySelectorAll('.buy-now');
// console.log(cls);

//Select Heading of a page by id and change it's text to "Welcome to Shyrians";

let heading = document.getElementById('heading');
heading.innerText = "Text Change by JS"

//Select all <li> elements and print their text using a loop.

let lis = document.querySelectorAll('li');

lis.forEach((val) => {
    // console.log(val.textContent);
})

//what is difference between innerText, textContent and innerHTML
// innerText = <i>inner text </i> // it will print as it is
// innerHTML =  <i>inner text </i> // i tag will convert into html tag means italic tag 

//when should we use textContent instead of innerText
//text content show even content is hidden but innerText show only visible text

//select a paragraph and replace its content with:
//<b>Updated</b> by javascript
let para = document.querySelector('p')
para.innerHTML = "<b>Updated</b> by javascript"

// how do you get the src of an image using Javascript

let img = document.querySelector('img')
// console.log(img.src);
// console.log(img.getAttribute('src'));

//what does setAttribute do ?

img.setAttribute('src', 'https://imgs.search.brave.com/ZOhW9WQpqq8CN5zycqsIU1ZtbxnFZNyJWmniDz5NI6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bmF0dXJlc3RvY2su/Y29tL3dwLWNvbnRl/bnQvdGhlbWVzL2Zy/ZWVuYXR1cmVzdG9j/ay9hc3NldHMvaW1n/L3ByZXNldHMvbmF0/dXJlLmpwZw')

//select a link and update its href to point to https://sheryians.com

let a = document.querySelector('a');
a.setAttribute('href', 'https://sheryians.com')

let div = document.querySelector('div')
div.setAttribute('title', "This is title ")

let btn = document.querySelector('.btn')
// btn.disabled=false
// btn.removeAttribute('disabled')

//what does createElement() do? what's returend?
let elem = document.createElement('li')
// console.log(elem);

//what is difference between appendChild and prepend()
//appendChild always add element at the end
//prepend always add element into begining

//can we remove a element using removeChild
let divParent = document.querySelector('.div')
let childElem = document.querySelector('.para')
// divParent.removeChild(childElem)

//Create a new list item <li>New Task </li> and added to it a end of ul
let ul = document.querySelector('ul')
let newLiElem = document.createElement('li')
newLiElem.textContent = "NEW TASK"
ul.appendChild(newLiElem)


//Create a new image element with a placeholder source  and added it at the top of a div
let newImgElem = document.createElement('img')
newImgElem.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg')
newImgElem.setAttribute('width', '100px')
newImgElem.setAttribute('height', '100px')
document.querySelector('div').prepend(newImgElem)

//Select the first item in a list and delete it from the DOM.
console.log(lis[0].remove());

//what is the difference between .classList.add() and .classList.toggle();
//classList.add() //add the class 
//classList.toggle() //if Class added then remove and not then add

//add hightlight class to every even item in a list 
console.log();

for (let i = 0; i < lis.length; i++) {
    if (i % 2 == 0) {
        lis[i].classList.add('heighlight')
    }
}


//set the font size of all <p> element to 18px using .style 
let container = document.querySelector('.container');
let pTag = container.querySelectorAll('p')
console.log(pTag);
pTag.forEach((elem)=>{
    elem.style.fontSize='18px'
    // elem.style.color='red'
})









