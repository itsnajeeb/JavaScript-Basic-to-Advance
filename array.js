const arr = [2, 4, 12, 5, 8, 11, 19, 29, 38, 49, 29, 48, 75, 57]

let result = arr.filter((val) => {
    return val % 2 == 0
})
console.log(result);
