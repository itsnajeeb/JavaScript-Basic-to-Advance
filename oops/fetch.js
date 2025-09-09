const fetchData = fetch('https://randomuser.me/api/')

fetchData
    .then(async (data) => {
        let result = await data.JSON()
        console.log(result);
    })
    .catch(err => {
        console.log("We are failed to fetching data", err);
    })


