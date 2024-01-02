const coding =["JS", "CPP", "JAVA", "PYTHON"];
// coding.forEach( function(value){
//     console.log(value);
// } )
coding.forEach((value) => {
    // console.log(value);
} )




function printMe(item){
    // console.log(item);
}
// printMe(coding)
coding.forEach(printMe)



coding.forEach((item,index,arr) =>{
    // console.log(item , index, arr);
})

const myCoding=[
    {
        languageName : "javascript",
        extention : ".js"
    } ,
    {
        languageName : "C++",
        extention : ".cpp"
    },
    {
        languageName : "Python",
        extention : ".py"
    }
]
myCoding.forEach((value,index) => {
    console.log(`${value.languageName} extention is ${value.extention}`);
    // console.log(value.extention);
})