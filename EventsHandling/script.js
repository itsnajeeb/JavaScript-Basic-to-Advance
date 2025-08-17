let heading = document.querySelector('h1')
window.addEventListener('keydown', function (dets) {
    if (dets.key != " ")
        heading.textContent = dets.key
    else
        heading.textContent = "SPACE"



})