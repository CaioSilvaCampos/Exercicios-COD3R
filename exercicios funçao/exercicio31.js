function negativo(vetor) {
    let qntdNegativo = 0
     for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qntdNegativo++
        }
     }
    return qntdNegativo
}

vetor = [-1, 2, -10, 20, 30, -3]

console.log(negativo(vetor))