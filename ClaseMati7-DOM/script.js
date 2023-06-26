/* COMO USAR DOM PARA CREAR UNA PLANTILLA EN HTML
1- "Creamos el array de objetos"
*/

const celulares = [
    {
        modelo: 'g8',
        precio: '300',
        stockDisponible: 1
    },
    {
        modelo: 's10',
        precio: '250',
        stockDisponible: 10
    },
    {
        modelo: 'f9',
        precio: '100',
        stockDisponible: 3250
    },
    {
        modelo: 'z10',
        precio: '1000',
        stockDisponible: 25
    }
]
/* 2do) Declaramos una Constante que nos permita seleccionar algun elemento/id/clase de HTML */
const containerHTML = document.querySelector('.container')

/* 3ero) Recorremos con un for nuestro array */
celulares.forEach((celus) =>{
    /* 4to) Acumulamos dentro de nuestrea constante las modificaciones que agregamos al HTML OJO CON LAS COMILLAS INVERTIDAS !!!!! */
    containerHTML.innerHTML = containerHTML.innerHTML +  `
    <div>
        <h2>${celus.modelo}</h2>
        <span>
            <b>Precio:</b>${celus.precio}
            <br>
            <b> Stock Disponible :</b> ${celus.stockDisponible}
            <button> "Ver detalles"</button>
        </span>
        <hr>
    </div>`
})