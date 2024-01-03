let num=[1,2,3,4,5,6,7,8,9, 10]
let initialValue=0
let finalValue=num.reduce(  (acc,cur) => { 
    // console.log(`acc ${acc} and cur : ${cur} and total is ${acc+cur}`);
    return acc+cur  }, initialValue)

// console.log(finalValue);

const shoppingCard=[
    {
        itemName:"JS Course",
        price : 999
    },
    {
        itemName : "Web Development",
        price : 999
    },
    {
        itemName : "Mobile App dev",
        price : 999,
    },
    {
        itemName : "Data Science",
        price : 999
    }
]

let totalValue=shoppingCard.reduce( (item, itemPrice)=> item+itemPrice.price, 0);
console.log(totalValue);