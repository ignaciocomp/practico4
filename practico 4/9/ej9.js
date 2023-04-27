function esPositivo(num){
    if (num>=0) return true
    else return false
}


function salario(usuario,horas,dias){
let resultado
if (usuario="electricista"){ 
    
resultado= 200*horas
}
else resultado=150*horas

return resultado
}

function costoMateriales(costomat){

    return costomat*1.1
}

function presupuestoFinal(siAsistente,cantDias,cantHoras,costoMat)
{
let presupuesto=0
cantHoras=cantHoras*cantDias
if(siAsistente){

presupuesto = salario("asistente",cantHoras,cantDias)
}

presupuesto += salario("electricista",cantHoras,cantDias)

presupuesto += costoMateriales(costoMat)

return presupuesto
}



console.log(presupuestoFinal("electricista",3,4,100))