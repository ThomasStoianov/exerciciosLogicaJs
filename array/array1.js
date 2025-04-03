/*Encontre o maior número
Dado um array, retorne o maior número presente nele.*/
const numeros = require("./array.json")

let maiorNumero = numeros[0]

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maiorNumero ) {
        maiorNumero = numeros[i]
    }
}

console.log(maiorNumero)