let inputData = document.querySelectorAll('input')
let form = document.querySelector('form')
let main = document.querySelector('#main')


form.addEventListener('submit', function (dets) {
    dets.preventDefault()
    let card = document.createElement('div')
    card.classList.add('card')

    let profile = document.createElement('div');
    profile.classList.add('profile')

    let img = document.createElement('img')
    img.setAttribute('src', inputData[0].value)
    profile.appendChild(img)

    let h2 = document.createElement('h2')
    h2.textContent = inputData[1].value
    let h3 = document.createElement('h3')
    h3.textContent = inputData[2].value
    let p = document.createElement('p')
    p.textContent = inputData[3].value

    card.appendChild(profile);

    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(p)

    main.appendChild(card)

    inputData[0].value = ""
    inputData[1].value = ""
    inputData[2].value = ""
    inputData[3].value = ""

})
