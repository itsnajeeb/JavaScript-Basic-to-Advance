function addTwoNuber(){
    let a=20;
    let b=30;
    return a+b;
}
// console.log(addTwoNuber());

function addTwoNumberPara( a,  b){
//  return a+b;
console.log(a+b);
}
// addTwoNumberPara(10,10)


const myArr=[10,20,30,40,50,60]

function arrFun(getArr){

    // console.log(getArr.length);
    // for (let index = 0; index < getArr.length; index++) {
    //     // const element = getArr[index];
    //     console.log(`At Index ${index} value is ${getArr[index]}`);
    // }
    
}
arrFun(myArr[0])

const newArr=[45];

function UpdateArr(getArr){
    return getArr[0]=30;
}

// console.log(newArr[0]);
// console.log(UpdateArr(newArr));

// Add Item To Cart 

function ItemPrice(...item){
    console.log(item);
    console.log(item.length);
    const total=0;
    for (let i = 1; i < item.length; i++) {
         total=+ item[i];
    }
    return total;
}

let TotalPrice=ItemPrice(20,30,40,50,60);
console.log(TotalPrice);





