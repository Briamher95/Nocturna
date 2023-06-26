/*              Ejercicio de la clase


const esVocal = (letra) => {
    
    return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra ==="u";} 

esVocal("a") */




/*====================== EJERCICIO 1 ===================== 

const sumaArray = (array) => {

    let resultado = 0
    for (let numero of array){
        resultado = resultado + numero 
    } return resultado
}*/


/*================== EJERCICIO 2 =====================

const arrayStrings = (array) =>{
    let resultado = ""
    for (let parte of array){
        resultado = resultado + parte
    }  return resultado
} */

/* ==================================EJERCICIO 3 

const arrayNum = (array) => {
    const resultado = []
    for ( const numeros of array){
        if (numeros > 10){
            resultado.push(numeros)
        }
    } return resultado
}  

console.log(arrayNum([1,11,22,3,25]))

*/

/* ==================================EJERCICIO 4 

const arrayNum = (array) => {
    let parcial = array.filter( num => num%2 === 0 )
    let resultado = 0
    for( let num of parcial){
        resultado = resultado + num
    } 
    return resultado
} 

console.log(arrayNum([1,2,4,3]))
*/

/* ==================================EJERCICIO 5 

const eliminarElemento = (array, stringAEliminar) => {
    const indice = array.indexOf(stringAEliminar);
    if (indice === -1) {
      return null; //
    } else {
        array.splice(indice, 1);
        return array;
    }
};

console.log(eliminarElemento(["hola","como","estas"],"como"))
*/

/* ==================================EJERCICIO 6 

const crearLista = (array, nombreDeLista) =>{
    let lista = `Lista de ${nombreDeLista}:\n\n`;
    
    for (let nombre of nombres) {
    lista += `${nombre}\n`;
    }
return lista;
}


const nombres = ["hola" , "juan" , "pepe"]

console.log(crearLista(nombres, "amigos"))

*/

/* =============EJERCICIO CON FOROFF Y   TEMPLATE STRING   

const alumnos = [

    {
        nombre: 'Maria',
        apellido: 'Rodriguez'
    },
    {
        nombre: 'Lucas', 
        apellido: 'Suarez'
    },
    {
        nombre: 'Milton',
        apellido: 'Jurgiel'
    }
]

for (const alumno of alumnos){
    console.log(`Hola me llamo ${alumno.nombre} y mi apellido es ${alumno.apellido}`)
}
 */

/* ======================EJERCICIO con .map: 

Dado un array de numero devolver otro array  multiplicado por 2 


const porDos = (array) => {
    return array.map((numero) => {
      return numero * 2;
    });
};

console.log(porDos([2,4,6]))
*/

/*  Mejorar la anterior funcion para que puedas multiplicar por cualquier numero que le pases 

const por = (multi,array) => {
    return array.map((numero) => {
      return numero * multi;
    });
};

console.log(por(3,[2,4,6]))
*/

/* 
==============================================
1) Dado un array de números, escribir una función que calcule la suma de todos los números del array.
            RESPUESTA


const total = (arrayNum) =>{
    let sumaTotal = 0
    arrayNum.forEach((numero) =>{
        sumaTotal = sumaTotal + numero    
    })
    return sumaTotal
}

console.log(total([2,5,6]))


=======================================================
4) Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

                RESPUESTA

const pares = (arrayNum) =>{
    let total = 0
    arrayNum.forEach ((numeroPar) => {
        if (numeroPar%2 === 0){
            total = total + numeroPar
        }
    })
    return total 
}

console.log(pares([2, 5, 6]));

==========================================================
26) Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud.

            RESPUESTA

const filtrarPorLongitud = (longitud, palabras) => {
    return palabras.filter((palabra) => {
        return palabra.length > longitud;
    });
};

console.log(filtrarPorLongitud(5, ["Hola", "como", "eestan", "ustedes"]));


==========================================================
32)definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.


            RESPUESTA

const longitudes = (array) =>{
    return array.map((frase)=>{
        return frase.length
    }) 
}

console.log(longitudes(["hola", "como" , "estas"]))

 */






/* ==============================CREAR un Ecommerce



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

const productos = [
    {
    nombre: "Tv",
    precio: 10.99,
    categoria: "Electrónica",
    stock: 5
    },
    {
    nombre: "Remeras",
    precio: 25.99,
    categoria: "Ropa",
    stock: 8
    },
    {
    nombre: "Mueble",
    precio: 7.99,
    categoria: "Hogar",
    stock: 3
    },
    {
    nombre: "PC Gamer",
    precio: 49.99,
    categoria: "Electrónica",
    stock: 2
    },
    {
    nombre: "Calcetines",
    precio: 12.99,
    categoria: "Ropa",
    stock: 10
    }
];

const carrito = []
const renderizarLista = (array) =>{
    let lista = " Lista de productos \n"

    array.forEach((elemento, index) =>{
        lista = lista + `
        ${(index+1)}) ${elemento.nombre}

        `

    })
    return lista
}

console.log(renderizarLista(productos))


let decision = prompt("Escriba ¨SI¨si desea comprar").toLowerCase()

while (decision === "si"){

    Aca vamos a guardar el Objeto en el indice que se eligio del producto que quiere la persona  
    
    const producto = productos[prompt(renderizarLista(productos)) -1]

    console.log(producto) 

    let cantidad = prompt("Cuantas unidades desea comprar?")
    if (cantidad < producto.stock){
        producto.cantidad = cantidad
        carrito.push(producto)
    }else{
        alert("Error: Stock Insuficiente")
    }
    Usamos la misma variable "decision" para preguntar si queremos seguir comprando (que se siga repitiendo el while) o que la respuesta sea distinta y la condicion del while se deje de cumplir (salga del bucle)

    decision = prompt("Desea seguir comprando escriba si o no ")
} 

*/


/*  EJERCICIOS ALITO ===================================



const estudiantes = [
        { id: 1,
        nombre: "Juan",
        edad: 18,
        promedio: 85
        },


    { id: 2, nombre: "María", edad: 20, promedio: 90 },
    { id: 3, nombre: "Pedro", edad: 19, promedio: 95 },
    { id: 4, nombre: "Laura", edad: 21, promedio: 88 },
    { id: 5, nombre: "Carlos", edad: 18, promedio: 92 }
]; */
    // Mostrar empleados con salarios superiores a 4000
    //incrementar el salario de todos los empleados en un 10%
    //encontrar el empleado con el ID 3

/*  console.log(empleados.filter(empleado=> empleado.salario > 4000))

    empleados.forEach(empleado => {
        empleado.salario = ((empleado.salario * 10)/100) + empleado.salario
    })

    console.log(empleados)

    console.log(empleados.find(empleado => empleado.id === 3))

 */

    // encontrar el promedio de los estudiantes menores de 20 años
    // Generar un array de nombres de los estudiantes con promedio mayor o igual a 90

/*     const alrevez = (texto) =>{
        const resultado = []
    
        const palabraEnArray = texto.split("")
    
        for (let i = palabraEnArray.length - 1 ; i >=0 ; i--){
            resultado.push(palabraEnArray[i])
            
        } 
        return resultado.join("")
    }
    
    console.log(alrevez("Bryan")) */


/* const calculadora = (num1,num2) =>{
    const resultado = {
        suma: num1+num2,
        resta : num1-num2,
        division : num1*num2,
        multiplicacion : num1/num2,
    }
    return resultado
} 

console.log(calculadora(5,6)) */

/* const personas = [{
    nombre: "Juan",
    edad: 18,
    ciudad: "CABA",
},
{
    nombre: "Rocio",
    edad: 21,
    ciudad: "Cordoba",
},
{
    nombre: "Alex",
    edad: 32,
    ciudad: "Neuquen",
},
]

const crearMensajesDePresentacion = (personas) =>{ 
    const mensajes = []

    personas.forEach(persona => {

        mensajes.push(`Mi nombre es ${persona.nombre}, tengo ${persona.edad} años y vivo en ${persona.ciudad}`)

    }) 
    return mensajes
}

console.log(crearMensajesDePresentacion(personas))

 */

