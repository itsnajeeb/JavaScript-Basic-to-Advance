//A Promise is an object that represents the eventual result of an asynchoronous operation. it can be in one of three state
//1. pending -> initial state, operation no completed yet
//2. fulfilled ->  operation succeeded, has a value
//3. rejected -> operation failed, has a reason

const promise = new Promise(function (res, rej) {
    console.log('Waiting for promise result.... ');
    setTimeout(() => {
        let random = Math.floor(Math.random() * 10)
        if (random > 5) res(random)
        else rej(random)
    }, 2000);
})

// console.log(promise);//Pending state

promise.then(function (value) {
    console.log("Resolved with ", value);
}).catch(function (value) {
    console.log("Rejected with ", value);
})
