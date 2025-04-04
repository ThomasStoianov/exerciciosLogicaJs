/*Transposta de uma matriz
Dada uma matriz N x M, gere sua transposta (troque linhas por colunas).*/

const matriz = require("./matriz.json")

let linhas = matriz.length
let colunas = matriz[0].length

let transposta = []

for(let i = 0; i < colunas; i++) {
    transposta[i] = []
    for(let j = 0; j < linhas; j++) {
        transposta[i][j] = matriz[j][i]
    }
}

for(let i = 0; i < transposta.length; i++) {
    console.log(transposta[i])
}