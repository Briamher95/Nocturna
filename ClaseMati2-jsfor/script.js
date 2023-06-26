/* 1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
5)Imprime los números del 1 al 10, pero se detiene al llegar al 5
6)Imprime los números del 1 al 10, pero salta el 5 */

/* 
for (let i=1; i<=10; i= i+1){
    console.log(i)
}
 */

/* Crear una calculadora:
Solicitaremos al usuario una decision 'Si desea usar la calculadora escriba SI'
Luego si se presiono SI, se solcitara una operacion y 2 numeros, y se resolvera segun la operacion correspondiente (+ o -)
Si la operacion no existe entonces se dira 'ERROR: operacion no valida'
Al finalizar el programa de la calculadora se volvera a solictar una decision que dira 'Escriba SI si desea usar la calculadora
OPCIONAL: Agregar las operaciones * y /
OPCIONAL: La operacion ademas de ser + debera funcionar con su formato texto "sumar", lo mismo con el resto de operaciones
MERITORIO: Se validara que los numeros ingresados sean numeros previo al if de las oepraciones
 */

let decision= prompt('Si desea usar la calculadora escriba "Si"')

while (decision === "Si"){
    let operacion = prompt("ingrese la operacion a realizar ")
    let num1 = Number(prompt("Ingrese un numero"))
    let num2 = Number(prompt("Ingrese segundo numero"))

    if (operacion == "+"){
        console.log( (num1+num2))
    }else if (operacion == "-") {
        console.log == ( (num1-num2) )
    }else{
        console.log("operacion no valida")
    }
    decision=prompt("se desea usar nuevamente la calculadora ?")
}
alert("La calculadora a finalizado")
