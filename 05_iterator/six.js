// const coding=["js","python","java","cpp"]

// let language = coding.forEach((item)=>{
//     console.log(item);
// })

// let language=coding.filter( (item)=> item.length>4 )

// console.log(language);

const myNum=[1,2,3,4,5,6,7,8,9,10]

let number=myNum.filter( (item) => item>5 )
// console.log(number);



// let newNum=[];
// let newNum=0;
myNum.forEach( (item) => {
    // console.log(item);
    if(item>4){
        // newNum.push(item)
        // newNum +=item//for newNum=0
    }
})
// console.log(newNum);



const books=[
    {title : 'Booke One', genre : 'Fiction', publish : 1981, edition : 2004},
    {title : 'Booke Two', genre : 'Non- Fiction', publish : 1990, edition : 2001},
    {title : 'Booke Three', genre : 'Fiction', publish : 1880, edition : 2000},    
    {title : 'Booke Five', genre : 'History', publish : 1970, edition : 1999},
    {title : 'Booke Six', genre : 'Non- Fiction', publish : 1990, edition : 2003},
    {title : 'Booke Seven', genre : 'Fiction', publish : 1885, edition : 2006},
    {title : 'Booke Eight', genre : 'History', publish : 1997, edition : 2006},
    {title : 'Booke Nine', genre : 'History', publish : 1995, edition : 2002},
    {title : 'Booke Ten', genre : 'Fiction', publish : 1980, edition : 1996},
]

// let bookEdition=[];
// books.forEach((book)=> {
//     if(book.publish>1960){
//         bookEdition.push(book.publish)
//         // console.log(book.publish);
//     }
// });
// console.log(bookEdition);


// with the help of filter 
// const userBook=books.filter((bk) => bk.edition>1900)
// const userBook=books.filter((bk) => bk.genre=='History')
const userBook=books.filter((bk) => bk.publish>1980)
console.log(userBook);