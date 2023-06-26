




/* const subirHTML = document.querySelectorAll(".btn-subir")
const bajarHTML = document.querySelectorAll(".btn-bajar")
const listaNumeradaHTML = document.querySelector(".listaNumerada")


subirHTML.forEach((boton) => {
    boton.addEventListener("click",(event) => {
        const actual = event.target.parentElement;
        const anterior = actual.previousElementSibling
        if(anterior){
            listaNumeradaHTML.insertBefore(anterior,actual)
        }

    })
})

bajarHTML.forEach((boton) =>{
    boton.addEventListener("click",(event) => {
        const actual = event.target.parentElement;
        const siguiente = actual.nextElementSibling
        if(siguiente){
            listaNumeradaHTML.insertBefore(siguiente,actual)
        }

    })
}) */


    const subirHTML = document.querySelectorAll(".btn-subir");
    const bajarHTML = document.querySelectorAll(".btn-bajar");
    const listaNumeradaHTML = document.querySelector(".listaNumerada");

    subirHTML.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const actual = event.target.parentElement;
            const anterior = actual.previousElementSibling;
            if (anterior) {
                listaNumeradaHTML.insertBefore(actual, anterior);
            }
        });
    });

    bajarHTML.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const actual = event.target.parentElement;
            const siguiente = actual.nextElementSibling;
            if (siguiente) {
                listaNumeradaHTML.insertBefore(siguiente, siguiente);
            }
        });
    })
