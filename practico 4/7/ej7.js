// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }



function calcular(farenheit, unidad){
    let resultado
switch(unidad){
    case "Celsius":
        resultado = ((farenheit - 32)/1.8)
    break;
    case "Kelvin":
        resultado = ((farenheit - 459.67)/1.8)
    break;
    case "Rankine":
        resultado = farenheit + 459.67
    break;
    case "Reaumur":
        resultado = ((farenheit - 32)/2.25)
    break;

    }
    return resultado
}

console.log(calcular(10,"Celsius"))