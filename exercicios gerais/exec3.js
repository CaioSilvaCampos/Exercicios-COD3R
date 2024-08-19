function calcularSalario(horasTrabalhadas, recebePorHora){
    return `Salario igual a R$ ${horasTrabalhadas * recebePorHora}`
}

console.log(calcularSalario(150, 40.5))