const promisOne = new Promise(function (resolve, reject) {
    //Do an async task
    setTimeout(() => {
        // console.log('Async task is completed');
        resolve()
    }, 1000);
})
promisOne.then(function () {
    // console.log('Promise Consumed');
})
new Promise(function (resolve, reject) {
    setTimeout(() => {
        // console.log('Async Task 2');
        resolve()
    }, 1000);
}).then(function () {
    // console.log('Async 2 Resolved');
})

const promisThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})
promisThree.then(function (user) {
    // console.log(user);
})

const promisFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            // resolve({ username: "Najeeb", password: '1234' })
        } else {
            // reject("ERROR : Something went wrong")
        }
    }, 1000);
})
promisFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    }).finally(() => {
        // console.log("The promise is either resolved or rejected");
    })
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Najeeb", password: 123 })
        }
        else {
            reject("ERROR : JS Went Wrong")
        }
    }, 1000)
})
async function consumePromisFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromisFive()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
console.log(data);
})
.catch((err)=>{
console.log(err);
})