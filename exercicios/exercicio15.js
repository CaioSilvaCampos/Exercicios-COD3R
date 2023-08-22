let carro = 'Hatch'
switch(carro) {
    case 'Hatch': console.log('Compra efetuada com sucesso')
       break
    case 'Sedan': 
    case 'Motocicleta': 
    case 'Caminhonete': console.log('Tem certeza que prefere esse modelo?')
        break
    default: console.log("Nao trabalhamos com esse tipo de automovel aqui")
}