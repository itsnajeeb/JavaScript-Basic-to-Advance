const promise = new Promise(function (res, rej) {
    let random = Math.floor(Math.random() * 10)
    if (random > 5) res(random)
    else rej(random)
})

async function PromiseResult() {
    try {
        let data = await promise;
        console.log("Resolved with ", data);
    } catch (err) {
        console.log("Reject with ", err);
    }
}

PromiseResult()