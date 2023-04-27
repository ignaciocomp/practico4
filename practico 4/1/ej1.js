// document.querySelector("#btnCalcular").addEventListener("click", tomarValores)
// function tomarValores(){
// let base = document.querySelector("#txtBase")
// let exponente = document.querySelector("#txtExponente")
// }



function esMayor(n1,n2){
    if(n1>n2){
        let aux;
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    let contador = 0;
    for (let i = n1; i <= n2 ; i++) {
        if (i % 2 === 0){
            contador++;
        }
        
        
    }
    return contador;
}

console.log(esMayor(1,20));