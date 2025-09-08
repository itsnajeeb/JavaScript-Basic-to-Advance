let form = document.querySelector('form')
let nameInput = document.querySelector('#name')
let bioInput = document.querySelector('#bio')
let photoInput = document.querySelector('#photo')
let roleInput = document.querySelector('#role')
let span = document.querySelector('.span')
let userManger = {
    users: [],

    addUser: function (event) {

        event.preventDefault(); // stop page refresh
        username = nameInput.value;
        bio = bioInput.value;
        photo = photoInput.value;
        role = roleInput.value;

        this.users.push({
            username: username,
            bio: bio,
            photo: photo,
            role: role
        })
        form.reset()
        console.log(this.users);
        this.renderUI()
    },
    renderUI: function () {
        document.querySelector('.users').innerHTML = ""
        this.users.forEach((user, index) => {
            let card = document.createElement('div')
            card.className = 'relative bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-[250px]'

            //delete user
            let span = document.createElement('span')
            span.className = 'span absolute top-2 right-2 text-red-600 cursor-pointer'
            span.innerHTML = '<i class="fa-solid fa-trash"></i>'
            span.addEventListener('click', () => {
                this.deleteUser(index)
            })

            let image = document.createElement('img');
            image.className = 'w-24 h-24 rounded-full mb-3'
            image.setAttribute('src', user.photo || 'https://plus.unsplash.com/premium_photo-1705563088246-3673a401ed6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            let name = document.createElement('h3')
            name.textContent = user.username
            let role = document.createElement('p')
            role.textContent = user.role
            let bio = document.createElement('p')
            bio.textContent = user.bio
            card.appendChild(span)
            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(role)
            card.appendChild(bio)
            document.querySelector('.users').appendChild(card)
        });
    },
    deleteUser: function (index) {
        console.log(index);
        this.users.splice(index, 1)//remove from an array
        this.renderUI()
    }
}

form.addEventListener('submit', userManger.addUser.bind(userManger))
