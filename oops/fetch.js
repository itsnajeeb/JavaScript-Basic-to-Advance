const fetchData = fetch('https://randomuser.me/api/')

fetchData
    .then(async (data) => {
        let result = await data.json()
        console.log(result.results);
    })
    .catch(err => {
        console.log("We are failed to fetching data", err);
    })


