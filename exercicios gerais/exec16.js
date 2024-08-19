function checkAnoBissexto(ano){
    if(ano % 4 == 0){
        if(ano % 100 == 0 && ano % 400 == 0){
            return true
        }
        else if(ano % 100 == 0 && ano % 400 != 0){
            return false
        }
        else{
            return true
        }
    }
    else{
        return false
    }
}

console.log(checkAnoBissexto(2020))