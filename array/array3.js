/*Calcule a soma dos elementos
Dado um array, calcule a soma de todos os seus elementos.*/

const numeros = require("./array.json")

let somaNumero = numeros[0]

for(let i = 0; i < numeros.length; i++) {
    somaNumero += numeros[i]
}

console.log(somaNumero)