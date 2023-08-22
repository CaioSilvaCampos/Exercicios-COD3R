function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2) {
        if(taxa1 > taxa2) {
            return 'A criança 1 ultrapassara a Criança 2 em 1 ano'
        } else if (taxa2 > taxa1) {
            return 'A criança 2 ultrapassara a Criança 1 em 1 ano'
        } else {
            return 'As crianças tem altura igual e crescimento igual'
        }
    } else {
        if(altura1 > altura2) {
            if(taxa1 >= taxa2) {
                return 'A criança menor não ultrapassara a maior'
            } else {
                return `A criança menor ultrapassara a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));
