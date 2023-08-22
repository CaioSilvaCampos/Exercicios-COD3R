function vetorNumeros(vetor){
    let qntdImpares = 0
    let qntdPares = 0
    for(let i = 0; i<vetor.length; i++) {
        if(vetor[i] % 2 == 0) {
            qntdPares ++
        } else {
            qntdImpares ++
        }
    }
    console.log(`${qntdPares} números pares e ${qntdImpares} números ímpares.`)
} 

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
vetorNumeros(vetor)