const btnrestar = document.querySelector(".restar")
const contador = document.querySelector(".aqui")
const btnsumar = document.querySelector(".sumar")
const btnconf = document.querySelector(".confirmar")
const span = document.querySelector(".vacio")

let numero = 0
btnrestar.addEventListener("click",() => {
    if (numero > 1 ) {
    numero = numero - 1
    contador.innerHTML = numero
}
})

btnsumar.addEventListener("click",() => {
    if (numero < 10 ) {
    numero = numero + 1
    contador.innerHTML = numero
    }
})

btnconf.addEventListener("click",()=> {
    span.innerHTML = "El numero es " + numero
})

/*  REQUISITO 2 

El button '+' debera incrementar el contador en 1 cuando se le de click pero no podra incrementar mas de 10

El button '-' debera decrementar el contador en 1 cuando se le de click Pero no podra decrementar menos de 1

El button confirmar debera hacer que se muestre un span en el html diciendo 'El numero confirmado es 'numeroConfirmado'
*/