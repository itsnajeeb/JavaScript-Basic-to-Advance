
//SET ATTRIBUTE
let a = document.querySelector('a');
a.innerText = "Go to Google"
a.setAttribute('href', 'https://google.com');
a.setAttribute('target', '_blank')
a.setAttribute('style', 'display:block')
// console.dir(a)


let img = document.querySelector('img')
img.setAttribute('src', 'https://images.unsplash.com/photo-1753808298097-56f002db8f6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
img.setAttribute('width', '200px')
img.setAttribute('alt', 'Unplash image')
// console.dir(img);


//GET ATTRIBUTE

// console.log(a.getAttribute("href"));
// console.log(img.getAttribute("src"));

//REMOVE ATTRIBUTE
// a.removeAttribute('href')
// img.removeAttribute('src')


//CREATE ELEMENT 
//APPEND / PREPEND WHERE YOU WANT TO ELEMENT 
//APPEND MTLB PAHLE AUR PREPEND MTLB AAKHIRI ELEMENT YE HOGA 
let h1= document.createElement('h1')
h1.textContent="This is h1 tag created by JS ";

document.body.prepend(h1)







