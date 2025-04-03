/*10. Encontre o maior elemento de uma matriz
Dada uma matriz N x M, encontre o maior número presente nela.*/

const matriz = require("./matriz.json")

let maiornumero = 0

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        if(matriz[i][j] > maiornumero) {
            maiornumero = matriz[i][j]
        }
    }
}

console.log(maiornumero)