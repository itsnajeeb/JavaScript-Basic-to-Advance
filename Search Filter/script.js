const users = [
    {
        name: "Najeeb",
        pic: "https://images.unsplash.com/photo-1753625606793-47749a65e80f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Software engineer who loves coffee and open-source."
    },
    {
        name: "Kamil",
        pic: "https://images.unsplash.com/photo-1756634355438-3a6837b62e11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Traveler and street photographer capturing city life."
    },
    {
        name: "Shadab",
        pic: "https://images.unsplash.com/photo-1740645164225-1af1d4750139?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Designer passionate about minimalism and typography."
    },
    {
        name: "Nehal ",
        pic: "https://images.unsplash.com/photo-1756660011546-c0aba6372da2?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Entrepreneur always learning and building startups."
    },
    {
        name: "Saif ",
        pic: "https://images.unsplash.com/photo-1691593364974-34ef1439ddbf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "Musician who enjoys blending classical and modern styles."
    },
    // {
    //     name: "James Miller",
    //     pic: "https://images.unsplash.com/photo-1755278338952-39f52d8e6eab?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     bio: "Dreamer, doer, and lifelong student of technology."
    // },
    // {
    //     name: "Olivia Garcia",
    //     pic: "https://images.unsplash.com/photo-1641253763060-13dc41645aad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     bio: "Fitness and wellness advocate, yoga lover."
    // },
    // {
    //     name: "Ethan Martinez",
    //     pic: "https://images.unsplash.com/photo-1555073162-14036df45480?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     bio: "Foodie exploring new flavors and street foods."
    // },
    // {
    //     name: "Ava Rodriguez",
    //     pic: "https://images.unsplash.com/photo-1604287106739-1b98b069b4b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     bio: "Nature lover, hiker, and environmental activist."
    // },
    // {
    //     name: "William Anderson",
    //     pic: "https://images.unsplash.com/photo-1604163305178-df7f96e81881?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     bio: "Tech enthusiast building cool web projects."
    // }
];



function showUser(arr) {
    arr.forEach(function (user) {
        const card = document.createElement('div')
        card.classList.add('card')

        //create image
        const img = document.createElement('img')
        img.classList.add('bg-image')
        img.src = user.pic;

        const blur_div = document.createElement('div')
        blur_div.style.backgroundImage = `url(${user.pic})`
        blur_div.classList.add('blurred-layer');

        const content = document.createElement('div')
        content.classList.add('content')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')

        h3.textContent = user.name
        p.textContent = user.bio

        content.appendChild(h3)
        content.appendChild(p)

        card.appendChild(img)
        card.appendChild(blur_div)

        card.appendChild(content)

        const cards = document.querySelector('.cards');
        cards.appendChild(card)
    });

}

let input = document.querySelector('input')
input.addEventListener('input', function () {
    let newUser = users.filter((user) => {
        return user.name.startsWith(input.value)
    })
    document.querySelector('.cards').innerHTML=""

    showUser(newUser)

})
