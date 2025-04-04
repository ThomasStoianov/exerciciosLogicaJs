/*16. Verifique se uma matriz é simétrica
Uma matriz quadrada é simétrica se for igual à sua transposta.*/

const matriz = require("./matriz.json")

const rows = matriz.length
const cols = matriz[0].length

function matrizSimetrica() {
    for (let j = 0; j < cols; j++){
        for (let i = 0; i < rows; i++){
            if (matriz[i][j] != matriz[j][i]){
                return false
            }
        }
    }
    return true
}

if (matrizSimetrica()){
    console.log("Matriz simétrica")
} else {
    console.log("Matriz não simétrica")
}