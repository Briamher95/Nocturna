fetch('./db.json')
.then((respuesta) =>{
    return respuesta.json()
})
.then((personas) =>{
    renderizarPersonas(personas)
})


const containerHTML = document.querySelector('.container')


renderizarPersonas = (personas) =>{

    personas.forEach((persona) =>{
        containerHTML.innerHTML = containerHTML.innerHTML +  `
            <div>
                <h2>${persona.nombre}</h2>
                <h2>${persona.apellido}</h2>
                <hr>
            </div>`
        })
}


