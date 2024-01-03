const myNumber=[1,2,3,4,5,6,7,8,9,10];

// let newNum=myNumber.map((num) => num+1)
// console.log(newNum);


// myNumber.forEach( (value)=> console.log(value+1) )

// chaining 

let newNum=myNumber.map( (num) => num *10 ).map( (value) => value+1). filter( (value) =>value>40 );
// console.log(newNum);





let person=[
    {first_name: "Najeeb", last_name : "Rahman"}, 
    {first_name: "Zeeshan", last_name : "Saikh"}, 
    {first_name: "Rafid", last_name : "Andaleeb"}, 
]
let userInfo=person.map(username);

function username(item){
    return [item.first_name, item.last_name].join( " ")
}
// console.log(userInfo);

