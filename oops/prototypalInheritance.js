// ek object hai aap chaho to uski sari props/methods ko inherit kara dete ho dusre object me

const Animal = {
    name: "Cat",
    voice: 'meo meo',
    speak: function () {
        console.log(`${this.name} will be ${this.voice} `);
    }
}
const dog = Object.create(Animal);
// const dog = {
//     ...Animal,
//     name: "dog",
//     voice: "bho bho",
// }
dog.name = "DOG"
dog.voice = "bho bho"
console.log(dog);
dog.speak()

console.log(Animal.speak() === dog.speak());

