/* const alumnos = [
    {
        nombre:'maria',
        apellido: 'juana'
    }, 
    {
        nombre: 'lucas',
        apellido: 'Suarez'
    },
    {
        nombre: 'Ivana',
        apellido: 'suarez'
    }
]
 */
/* const numeros = [2, 8, 9, 5 ]

const porDos = (arrayDeNumeros) => {
    return arrayDeNumeros.map((numero))
}
 */
/* Recorrer el array y por cada elemento decir: USAR TEMPLATE STRINGS */
/* Hola me llamo nombre apellido */

/*        Como yo lo Hubiese Hecho



for ( let i = 0; i < alumnos.length; i++) {
console.log(
    `
    Hola ${alumnos[i].nombre} ${alumnos[i].apellido}
    `
)
} */

/* Como tendria que haberlo hecho si hubiese ido a clases 
for(const alumno of alumnos){console.log(`hola ${alumno.nombre} ${alumno.apellido}`)
}
*/

/* 
1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

4)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

26)Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

//filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
//['remolacha', 'sorpresa', 'verde']

32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

 */

/* Sirve para recorrer un array 
alumnos.forEach((alumno, index, array)=> {
    console.log(`${index +1}) Hola me llamo ${alumno.nombre} ${alumno.apellido}`) 

})
*/
/* Sirve para recorrer el array y generar un nuevo array en base al recorrido 
const nombresCompletos = alumnos.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
})*/

/*  Ejercicio 1
const sumatoria = ( arrayDeNumeros ) =>{
    let total = 0
    arrayDeNumeros.forEach((numero) => {
        total = total + numero
    })
    return total
}

console.log(sumatoria([8, 8, 8]) */


/* Crear un Ecommerce

Generar una lista de productos (almenos 5 ) con los campos precio, nombre, categoria, stock

Generar una funcion llamada renderizarLista que recibira un array y devolvera un string en el sig formato
`
Lista de productos disponibles: \n
1- nombre primer producto \n
2- nombre segundo producto \n
3- ...
`


Generar un array vacio llamado carrito

Solicitar al usuario que escriba "SI" si desea comprar
En caso de escribir SI se solicitara el numero del producto de la sig lista  (usar la funcion renderizar lista)
Una vez obtengamos el numero, buscar el producto en el array, y preguntar cuanta cantidad se desea comprar, si la cantidad supera el stock disponible de ese producto decir por alerta 'No tenemos el suficiente stock'
Si no, se procedera agregar el producto con un nuevo campo llamado cantidad (con la cantidad comprada ) al array carrito

Se volvera a preguntar si desea comprar para repetir el proceso
*/


/* const productos = [
    {
        nombre:'sachet',
        precio: '10',
        categoria : "lacteos",
        stock : "si"
    }, 
    {
        nombre:'oreos',
        precio: '15',
        categoria : "galletitas",
        stock : "si"
    },
    {
        nombre:'tang',
        precio: '5',
        categoria : "jugos",
        stock : "si",
    },
    {
        nombre:'lechuga',
        precio: '3',
        categoria : "verduras",
        stock : "no",
    },
    {
        nombre:'papa',
        precio: '4',
        categoria : "verduras",
        stock : "si",
    }
]

const carrito = []

const renderizarLista = (arrayObjetos) => {
    let lista = "Lista de productos disponibles : \n"

    arrayObjetos.forEach((element,index) => {
        lista = lista + (index+1) +"- "+ element.nombre + "\n";
        
    })   
    return lista
}

console.log(renderizarLista(productos));

let desicion = prompt ("Escriba SI si desea Comprar")

while (desicion === "SI"){
    const producto = 
} */



/*let decision = prompt("Escriba SI si desea comprar")
while (decision === 'SI'){
    const producto = productos[prompt(renderizarLista(productos)) - 1]
    console.log(producto)
    let cantidad = prompt('Cuántos' + producto.nombre + 'desea comprar?')
    if(cantidad <= producto.stock){
        producto.cantidad = cantidad
        carrito.push(producto)
    }else{
        alert("Error: stock insuficiente")
    }
    decision = prompt("Escriba SI si desea hacer otra compra")
} */


/* const listaDeJugadores = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga']

let jugadorEliminado = listaDeJugadores.indexOf("Neymar")

console.log(jugadorEliminado)

listaDeJugadores.splice(jugadorEliminado,1)

console.log(listaDeJugadores.unshift("Neymar"))

 */

/*  ACUMULADOR PRUEBA let palabra = "pepe"
let nuevaPalabra = ""
for (letra of palabra){
    console.log(letra)
    nuevaPalabra= nuevaPalabra + letra
}

console.log(nuevaPalabra) */


