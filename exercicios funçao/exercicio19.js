function calcularPedido (codigo, quantidade) {
    switch(codigo){
        case 100: console.log(3 * quantidade)
           break
        case 200: console.log(4 * quantidade)
           break
        case 300: console.log(5.50 * quantidade)
           break
        case 400: console.log(7.50 * quantidade)
           break
        case 500: console.log(3.50 * quantidade)
           break
        case 600: console.log(2.50 * quantidade)
           break
        default: console.log('Produto nao existente')
    }
}

calcularPedido(100, 5)