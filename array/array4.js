/*Calcule a média dos elementos
Dado um array de números, retorne a média dos valores.*/

const numeros = require("./array.json")

let somaNumero = 0

for(let i = 0; i < numeros.length; i++) {
    somaNumero += numeros[i]
}

let media = somaNumero/numeros.length

console.log(media)