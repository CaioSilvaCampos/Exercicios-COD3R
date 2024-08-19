function funcaodaSorte (numero){
    numeroSorteado = Math.random().toFixed(1)*10
    if(numero == numeroSorteado){
        return `Parabéns! o Número sorteado foi o ${numeroSorteado}`
    }
    else{
        return `Que pena! o numeero sorteado foi o ${numeroSorteado}`
    }
}

console.log(funcaodaSorte(5))