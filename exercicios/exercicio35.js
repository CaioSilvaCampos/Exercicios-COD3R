let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(vetor, adicionar) {
    for(let i = 0; i<adicionar.length; i++) {
        console.log(adicionar[i])
        vetor.push(adicionar[i])
    }
    console.log('Vetor adicionado' + adicionar)
    console.log('Resultado final' + vetor)
}

adicionarVetor(vetorPilha, vetorAdiciona)