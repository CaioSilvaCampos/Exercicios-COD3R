function lerNotas (nota1, nota2, nota3) {
    let mediaPonderada

      if(nota1 > nota2 && nota1  > nota3) {
       mediaPonderada = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10
       
      } else if(nota2 > nota1 && nota2 > nota3) {
        mediaPonderada = (nota1 * 3 + nota2 * 4 + nota3 * 3) / 10
      } else if(nota3 > nota2 && nota3 > nota1) {
        mediaPonderada = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10
      } else {
        return 'Insira 3 notas diferentes'
      }
     if(mediaPonderada >= 5 ) {
        console.log('Aprovado')
     } else{
        console.log('Reprovado')
     }
     console.log(mediaPonderada)
    }
lerNotas(2.8, 6, 3.5)