function calcularAumento (salario, plano) {
    switch(plano) {
        case 'A': console.log((salario * 0.10) + salario)
            break
        case 'B': console.log((salario * 0.15) + salario)
            break
        case 'C': console.log((salario * 0.20) + salario)
            break
        default: console.log('Plano invalido')
    }
}

calcularAumento(1200, 'C')