//localStorage ->
    // A key-value storage built into browser 
    // saves data persistently (even after reload or browser restart)
    // stores only string (but you can JSON.stringfy Object / array)

//Store / save the data 
localStorage.setItem('Name', "Najeeb")
localStorage.setItem('Profession', "Programmer")

// Remove 
// localStorage.removeItem('Name')

//Update 
localStorage.setItem('Profession', "Software Engineer")

//Get 
let item =localStorage.getItem('Profession',)
localStorage.clear()

localStorage.setItem('friend' , JSON.stringify(["Najeeb", "Kamil", "Zeeshan"]))

console.log(JSON.parse(localStorage.getItem('friend')));



