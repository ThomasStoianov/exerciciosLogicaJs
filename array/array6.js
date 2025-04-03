/*Inverta um array
Dado um array, retorne um novo array com os elementos invertidos.*/

const numeros = require("./array.json")

let arrayInvertido = []

for(let i = numeros.length -1; i >= 0; i--) {
    arrayInvertido.push(numeros[i])
}

console.log(arrayInvertido)