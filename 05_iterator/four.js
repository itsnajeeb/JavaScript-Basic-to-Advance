const myObject={
    js : 'javascript',
    cpp : "C++",
    py : "Python",
    java : "Java"
}
for (const key in myObject) {
    // console.log(`${key} shortcout is for ${myObject[key]}`);
}
let programming=['Js', 'py', 'CPP', 'java']
for (const key in programming) {
    // console.log(programming[key]);
}
const map = new Map();
map.set('IND', "India")
map.set('PK' , 'Pakistan')
map.set('USA' , "United State of America ")
map.set("NEP", "Nepal")
for (const key in map) {
 console.log(key);
}