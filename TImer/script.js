let progress = document.querySelector('.progress-bar');
let percent = document.querySelector('.percent')
let heading = document.querySelector('h2')
let count = 0;
let intv = setInterval(() => {
    if (count <= 99) {
        count++
        progress.style.width = `${count}%`
        percent.textContent= `${count}%`
    }
   
    else{
        heading.textContent="Downloaded"
        clearInterval(intv)
    }
}, 50);