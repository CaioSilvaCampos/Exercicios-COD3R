function valorASerPago(idade) {
    let valor = 100
    if(idade < 10) {
        valor += 80
        
    } else if(idade > 10 && idade < 30) {
        valor += 50
        
    } else if(idade > 30 && idade <=60) {
        valor += 95
        
    } else if(idade > 60) {
        valor += 130
    } else {
        return 'Idade invalida'
    }
  return valor
}

console.log(valorASerPago('oi'))