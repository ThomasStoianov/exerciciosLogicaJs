/*Soma de cada coluna
Dada uma matriz, calcule a soma dos elementos de cada coluna e exiba os
resultados.*/

const matriz = require("./matriz.json")

let numeroColunas = matriz[0].length

for(let i = 0; i < numeroColunas; i++) {
    let somaColunas = 0
    for(let j = 0; j < matriz.length; j++) {
        somaColunas += matriz[j][i]
    }

    console.log(somaColunas)
}