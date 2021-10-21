// Exercice 1 : Push sans Push

let fruits = ['Apple', 'Orange', 'Banana']

fruits = [...fruits, 'Raspberry']

console.log(fruits)

// Exercice 2 : Unshift sans Unshift : 

let fruits2 = ['Apple', 'Orange', 'Banana']

fruits2 = ['Raspberry', ...fruits2]

console.log(fruits2)

// Exercice 3 : Array concatenation : 

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// Exercice 4 : Objects : 

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
}

const Bobby = {
    firstName: "Bobby",
    ...user

}

console.log(Bobby)

// Exercice 5 : For Each : 

const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(function () {
    const [a, b, c, d, e, f] = numbers
    console.log(numbers)

})


