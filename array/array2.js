/*Encontre o menor número
Dado um array, retorne o menor número presente nele.*/

const numeros = require("./array.json")

let menorNumero = numeros[0]

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] < menorNumero ) {
        menorNumero = numeros[i]
    }
}

console.log(menorNumero)