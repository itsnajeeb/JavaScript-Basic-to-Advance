let addNote = document.querySelector('#add_notes')
let formContainer = document.querySelector("#formModal");
let closeForm = document.querySelector(".closeForm")
const stack = document.querySelector("#stack");
let upBtn = document.querySelector('#upBtn')
let downBtn = document.querySelector('#downBtn')
let form = document.querySelector('form');
let imageUrlInput = form.querySelector("input[name='imageUrl']")
let fullNameInput = form.querySelector("input[name='fullName']")
let homeTownInput = form.querySelector("input[name='homeTown']")
let purposeInput = form.querySelector("input[name='purpose']")
let categoryInput = form.querySelectorAll("input[name='category']")

let submitBtn = document.querySelector("button[type='submit']")

//Code is start from here 
addNote.addEventListener('click', function () {
    formContainer.classList.remove('hidden')
})
closeForm.addEventListener('click', () => {
    formContainer.classList.add('hidden')
})


function saveDataToLocalStorage(obj) {

    if (localStorage.getItem("tasks") === null) {
        let oldData = []
        oldData.push(obj)
        console.log(oldData);

        localStorage.setItem("tasks", JSON.stringify(oldData))
    }
    else {
        let oldData = localStorage.getItem('tasks')
        oldData = JSON.parse(oldData)
        oldData.push(obj)
        localStorage.setItem('tasks', JSON.stringify(oldData))
    }
}


form.addEventListener('submit', function (evt) {
    evt.preventDefault()

    const imageUrl = imageUrlInput.value.trim()
    const fullName = fullNameInput.value.trim()
    const homeTown = homeTownInput.value.trim()
    const purpose = purposeInput.value.trim()

    let selectedCategory = false
    categoryInput.forEach((cat) => {
        if (cat.checked) {
            selectedCategory = cat.value
        }
    })
    if (imageUrl === "") {
        alert("Please Enter Image Url")
        return;
    }
    if (fullName === "") {
        alert("Please Enter Full Name")
        return;
    } if (homeTown === "") {
        alert("Please Enter Home Town ")
        return;
    } if (purpose === "") {
        alert("Please Enter Purpose")
        return;
    }
    if (!selectedCategory) {
        alert("Please select a category")
        return
    }
    saveDataToLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        selectedCategory
    })
    form.reset()
    formContainer.classList.add('hidden')
    showAllCards()
})

function createCard(data, direction = "up") {
    const defaultImage = "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8=";

    // Create card wrapper
    const card = document.createElement("div");
    card.className = "w-80 p-6 rounded-2xl shadow-lg bg-black transition-colors card";

    // Top section
    const topSection = document.createElement("div");
    topSection.className = "flex items-center space-x-4 mb-4";

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "w-12 h-12 bg-gray-600 rounded-full";

    const profileImage = document.createElement("img");
    profileImage.className = "rounded-full w-full h-full profileImage";
    profileImage.src = data.imageUrl || defaultImage;

    imgWrapper.appendChild(profileImage);

    const name = document.createElement("h2");
    name.className = "text-2xl font-semibold";
    name.textContent = data.fullName;

    topSection.appendChild(imgWrapper);
    topSection.appendChild(name);

    // Info section
    const infoSection = document.createElement("div");
    infoSection.className = "space-y-2";

    const townRow = document.createElement("div");
    townRow.className = "flex justify-between text-gray-300";
    townRow.innerHTML = `<span>Home town</span><span>${data.homeTown}</span>`;

    const purposeRow = document.createElement("div");
    purposeRow.className = "flex justify-between text-gray-300";
    purposeRow.innerHTML = `<span>Purpose</span><span>${data.purpose}</span>`;

    infoSection.appendChild(townRow);
    infoSection.appendChild(purposeRow);

    // Button section
    const buttonSection = document.createElement("div");
    buttonSection.className = "flex space-x-3 mt-5";

    const callButton = document.createElement("button");
    callButton.className = "flex-1 flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-white text-black font-medium";
    callButton.textContent = "📞 Call";

    const messageButton = document.createElement("button");
    messageButton.className = "flex-1 flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 text-black font-medium";
    messageButton.textContent = "💬 Message";

    buttonSection.appendChild(callButton);
    buttonSection.appendChild(messageButton);

    // 👉 Animation
    card.classList.add(direction === "up" ? "slide-up" : "slide-down");
    card.addEventListener("animationend", () => {
        card.classList.remove("slide-up", "slide-down");
    });

    // Put all together
    card.appendChild(topSection);
    card.appendChild(infoSection);
    card.appendChild(buttonSection);
    return card;
}

function showAllCards() {
    let allData = localStorage.getItem('tasks');

    if (allData === null) {
        return stack.innerHTML = "<h2>There is Card no available</h2> Please click + to add card"
    }
    let userInfo = JSON.parse(allData) || [];

    stack.innerHTML = ""; // prevent duplication
    userInfo.forEach((data, i) => {
        const card = createCard(data, "up");
        stack.appendChild(card);
    });

    updateStack();
}

function updateStack() {
    const cards = stack.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
        card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;
        card.style.opacity = `${1 - index * 0.2}`;
    });
}

// Initial render
showAllCards();

// Controls
// Controls
upBtn.addEventListener('click', function () {
    let lastChild = stack.lastElementChild;
    if (lastChild) {
        lastChild.classList.add("slide-up"); // animation
        lastChild.addEventListener("animationend", () => {
            stack.insertBefore(lastChild, stack.firstElementChild);
            lastChild.classList.remove("slide-up");
            updateStack();
        }, { once: true }); // ek hi baar chale
    }
});

downBtn.addEventListener('click', function () {
    let firstChild = stack.firstElementChild;
    if (firstChild) {
        firstChild.classList.add("slide-down"); // animation
        firstChild.addEventListener("animationend", () => {
            stack.appendChild(firstChild);
            firstChild.classList.remove("slide-down");
            updateStack();
        }, { once: true });
    }
});

function changeColor(bgColor) {
    let card = document.querySelector('.card')
    card.className = `absolute left-0 w-full p-6 rounded-2xl shadow-lg transition-colors z-20 -top-[120px] ${bgColor}`;
}
