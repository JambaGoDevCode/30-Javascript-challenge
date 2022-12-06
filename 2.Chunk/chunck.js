 /** 
  * Escreva uma funcao que recebe um número e retorna uma quantidade
  * equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma
  * estrutura de repeticao (while, dowhile, for, etc).
  * 
  */


 function chunks(num){
    if(num === 0){
        return ''
    }

    if(num === 1){
        return 'chunks'
    }else{
        return 'chunks-' + chunks(num - 1)
    }
 }


 
 console.log(chunks(4))