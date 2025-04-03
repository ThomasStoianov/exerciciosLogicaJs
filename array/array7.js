/*Remova duplicatas
Dado um array com números repetidos, retorne um novo array apenas com
valores únicos.*/

const numeros = require("./array.json")

let unicos = []

for(let i = 0; i < numeros.length; i++) {
    let existe = false

    for(let j = 0; j < unicos.length; j++) {
        if(numeros[i] === unicos[j]) {
            existe = true
            break
        }
    }

    if (!existe) {
        unicos.push(numeros[i])
    }
}

console.log(unicos)