let parent = document.querySelector('.parent')
let loading_heading = document.querySelector('.loading_heading')

// Show loading message before fetch starts

function LoadUser() {
    loading_heading.textContent = "Loading users...";
    parent.innerHTML = ""
    fetch('https://randomuser.me/api/?results=3')
        .then(async (data) => {
            let result = await data.json()
            loading_heading.textContent = '';

            users = result.results;
            users.forEach(user => {

                let cardContainer = document.createElement('div')
                cardContainer.className = 'max-w-sm  mx-auto p-4'

                //Create image div and set src
                let div = document.createElement('div')
                div.className = 'rounded-2xl bg-white dark:bg-gray-900 shadow-md dark:shadow-black/30 p-6 flex items-center space-x-4'
                let image = document.createElement('img')
                image.className = 'w-16 h-16 rounded-full object-cover';
                image.src = `${user.picture?.large}`
                div.appendChild(image)

                //user info 
                let userInfoDiv = document.createElement('div')

                let h2 = document.createElement('h2')
                h2.className = 'text-lg font-semibold text-gray-900 dark:text-gray-100'
                h2.textContent = `${user.name?.title} ${user.name?.first}${user.name?.last}`

                let p = document.createElement('p')
                p.className = 'text-sm text-gray-600 dark:text-gray-400'
                p.textContent = `${user?.email}`

                let statusDiv = document.createElement('div')
                statusDiv.className = 'mt-2 flex items-center'

                let span = document.createElement('span')
                span.className = `w-2.5 h-2.5 rounded-full ${user.registered?.age > 20 ? 'bg-green-500' : 'bg-red-500'} mr-2`

                let spanText = document.createElement('span')
                spanText.className = 'text-sm text-gray-700 dark:text-gray-300'
                spanText.textContent = `${user.registered?.age > 20 ? "Online" : "Offline"}`

                statusDiv.appendChild(span)
                statusDiv.appendChild(spanText)

                cardContainer.appendChild(div)
                div.appendChild(userInfoDiv)

                userInfoDiv.appendChild(h2)
                userInfoDiv.appendChild(p)
                userInfoDiv.appendChild(statusDiv)

                parent.appendChild(cardContainer)
            });
        })
}

LoadUser()

document.querySelector('button').addEventListener('click', function () {
    LoadUser()
})