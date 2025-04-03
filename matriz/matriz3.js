/*Soma de cada linha
Dada uma matriz, calcule a soma dos elementos de cada linha e exiba os
resultados.*/

const matriz = require("./matriz.json")

for(let i = 0; i< matriz.length; i++) {
    let soma = 0
    for(let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j]
    }

    console.log(soma)
}