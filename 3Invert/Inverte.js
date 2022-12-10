/** 
 * Escreva uma funcao que recebe um array
 * e retorne um novo array com dotas as posicoes invertidas 
 * do original sem atera-lo. Nao utilize os métodos do objeto global Array do Javascript (reverse, map, forEach, ect)
*/


function reverse(arr){
    const reversedArray = []

    for (let i=0; i < arr.length; i++)[
        reversedArray[i] = arr[arr.length - 1 -i]
    ]

    return reversedArray
}

console.log(reverse([0,1,2,3,4,5,6,7,8,9,10]))