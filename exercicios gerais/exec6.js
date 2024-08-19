function inverso(valor){
    if(typeof(valor) == "boolean"){
        if(valor == true){
            return false
        } else{
            return true
        }
    }
    else if(typeof(valor) == "number"){
        return valor * -1
    }
    else{
        return 'Booleano ou numero esperado, mas o parâmetro é do tipo ' + typeof(valor)
    }
    
}

