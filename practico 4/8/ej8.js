// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }

function exponenciar(base, exponente){
    let resultado = base
    for (let i = 1; i < exponente; i++) {
        resultado *= base
    }
    return resultado
}

console.log(exponenciar(2,4))