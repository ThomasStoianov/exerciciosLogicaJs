/*Rotacione um array para a direita
Dado um array e um número k, rotacione os elementos k vezes para a direita.*/

// const array = require("./array.json")

let array = [1, 2, 3, 4, 5]

let k = 2

console.log([...array.slice(-k), ...array.slice(0, array.length - k)])