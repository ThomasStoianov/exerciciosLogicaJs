/*Conte os números pares e ímpares
Dado um array de números inteiros, conte quantos são pares e quantos são
ímpares.*/

const numeros = require("./array.json")

let pares = 0
let impares = 0 

for(i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares++
    }
    else {
        impares++
    }
}

console.log(pares)
console.log(impares)