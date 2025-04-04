/*Soma de todos os elementos da matriz
Dada uma matriz N x M, retorne a soma de todos os seus elementos.*/

let matriz = require("./matriz.json")

let soma = 0

for (let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j]
    }
}

console.log(soma)