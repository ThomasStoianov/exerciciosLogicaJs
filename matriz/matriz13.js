/*13.Diagonal principal
Dada uma matriz quadrada N x N, retorne os elementos da sua diagonal principal.*/

const matriz = require("./matriz.json")

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        if(i === j) {
            console.log(matriz[i][j])
        }
    }
}