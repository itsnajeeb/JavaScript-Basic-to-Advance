function getDetails(name, callback) {
    callback(name)
}
function getAddress(callback) {
    setTimeout(() => {
        callback(`Kerla India`);
    }, 2000);
}
function getQualificationDetails(callback){
    setTimeout(() => {
        callback("B.tech from Bhopal")
    }, 3000);
}

//A callback is just a function passed as an argument to another function, to be executed later.
//It’s the main way JavaScript handled asynchronous operations before Promises/async–await.


//callback hell
getDetails("Najeeb", function (name) {
    console.log(`Hi ${name} Nice to meet you `);
    getAddress(function (address) {
        console.log(`I am from ${address}`);
    });
    getQualificationDetails(function (qualification) {
        console.log(`My Qualification is -> `, qualification);
    })
})