let btn = document.querySelector('#btn')
let fileInp = document.querySelector('#fileInp');

btn.addEventListener('click', (dets) => {
    fileInp.click()
})


fileInp.addEventListener('change', (dets) => {
    let file = dets.target.files[0];
    if (file)
        btn.innerText = file.name
})


