let userName = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    document.querySelector('#nameErrorMsg').textContent = ''
    document.querySelector('#emailErrorMsg').textContent = ''
    document.querySelector('#passwordErrorMsg').textContent = ''


    let isValid = true

    if (userName.value.length <= 5) {
        let emailError = document.querySelector('#nameErrorMsg');
        emailError.style.display = 'block'
        emailError.textContent = 'Name must be at least 5 character'
        isValid = false
    }

    const validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; // or pick one above
    let result = validEmail.test(email.value);

    if (!result) {
        let userNameError = document.querySelector('#emailErrorMsg');
        userNameError.textContent = 'Email is Incorrect'
        userNameError.style.display = 'block'
        isValid = false
    }


    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let validPassword = PasswordRegex.test(password.value)

    if (!validPassword) {
        let passwordError = document.querySelector('#passwordErrorMsg')
        passwordError.textContent = 'Password is Incorrect'
        passwordError.style.display = 'block'
        isValid = false
    }
    if (isValid) {
        document.querySelector('.error_message').style.display = 'none'
        // console.log("Form Submitted Successfully");
        alert("Form Submitted Successfully ")
        userName.value = ""
        email.value = ""
        password.value = ""
    }

})