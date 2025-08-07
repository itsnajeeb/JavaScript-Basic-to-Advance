
const div = document.querySelector('div')
let h1 = document.createElement('h1')
h1.textContent= "This heading created by JS"
let span = document.createElement('span')
h1.appendChild(span)
div.append(h1)
