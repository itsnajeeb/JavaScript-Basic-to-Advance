// ["", "", ""]
// [{}{}{}];
let car=["Rols Royal", "BMW", "Frari", "Jaguar"];
let carName="";
for (const value of car) {
    // console.log(`Your Favroute Car is ${value}`);
    // carName += value
}
// console.log(carName);

let language="Javascript";
for (const character of language) {
    // console.log(character);
}
const map = new Map()
    map.set('IN', 'India');
    map.set('USA', 'United State of America');
    map.set('PK', 'Pakistan');
    // map.set('IN', "India");
    // console.log(map);

for (const country of map) {
    // console.log(country[0]);
}
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}
const myObject={
    'game-1' : "PUBG",
    'game-2' : "Cricket",
    'game-3' : "Football"
}
for (const [key, value] of myObject) {
    // console.log(key, value);
}