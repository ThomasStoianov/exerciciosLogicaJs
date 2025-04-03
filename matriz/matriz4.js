/*Soma de cada coluna
Dada uma matriz, calcule a soma dos elementos de cada coluna e exiba os
resultados.*/

const matriz = require("./matriz.json")

let numeroColunas = matriz[0].length

for(let j = 0; j < numeroColunas; j++) {
    let somaColunas = 0
    for(let i = 0; i < matriz.length; i++) {
        somaColunas += matriz[i][j]
    }

    console.log(somaColunas)
}