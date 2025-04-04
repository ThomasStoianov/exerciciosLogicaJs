/*14.Diagonal secundária
Dada uma matriz quadrada N x N, retorne os elementos da sua diagonal
secundária.*/

let matriz = require("./matriz.json")

matriz = matriz.slice(-matriz[0].length)

// Percorre cada linha da matriz
matriz.forEach((row, i) => {
    // Imprime o elemento da diagonal secundária
    console.log(row[row.length - 1 - i]);
});

/*
     0  1  2
0   [1, 2, 3]
1   [4, 5, 6]
2   [7, 8, 9]

*/