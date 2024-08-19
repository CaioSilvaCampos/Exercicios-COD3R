let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor , multiplicador) {
    let resultado = []
    for(let i = 0; i<vetor.length; i++) {
        resultado.push(vetor[i] * multiplicador)
    }
  return resultado
}

function multiplicaVetorSeMaiorQue5(vetor, multiplicador) {
    let resultado = []
    for(let i = 0; i<vetor.length;i++) {
        if(vetor[i] <5){
            resultado.push(vetor[i] * multiplicador)
        }
    }
  return resultado
}

console.log(multiplicaVetor(vetor, 3))
console.log(multiplicaVetorSeMaiorQue5(vetor, 11))