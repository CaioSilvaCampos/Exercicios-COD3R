function estaNoIntervalo(vetor) {
    let qntdNoIntervalo = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qntdNoIntervalo++
        }
    }
  return qntdNoIntervalo
}

vetor = [12,22,43,10,11,19]

console.log(estaNoIntervalo(vetor))