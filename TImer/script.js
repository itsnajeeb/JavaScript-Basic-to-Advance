let progress = document.querySelector('.progress-bar');
let percent = document.querySelector('.percent');
let heading = document.querySelector('h2');
let span = document.querySelector('h4 span');
console.dir(span);

let counter = 10;
let count = 0;

let outer = setInterval(() => {
    progress.style.width = `0%`
    if (counter >= 0) {
        span.textContent = counter; // optional display
        counter--;
    } else {
        clearInterval(outer); // stop countdown

        let intv = setInterval(() => {
            if (count <= 99) {
                count++;
                progress.style.width = `${count}%`;
                percent.textContent = `${count}%`;
            } else {
                heading.textContent = "Downloaded";
                clearInterval(intv);
            }
        }, 50);
    }
}, 1000);
