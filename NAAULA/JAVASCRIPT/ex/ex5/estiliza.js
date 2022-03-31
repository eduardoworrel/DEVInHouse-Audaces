export function estiliza(elementoIndefinido, arrayDePropriedades){
    let elemento;
    console.log(elementoIndefinido)
    console.log(typeof elementoIndefinido)

    if(typeof elementoIndefinido == "string"){

        elemento = document.querySelector(elementoIndefinido)
    }


    if(typeof elementoIndefinido == "object"){
        elemento = elemento
    }
    console.log(elemento
        )
    for(let objetoContendoEstilo of arrayDePropriedades){
        
        for(let estilo in objetoContendoEstilo){
            elemento.style[estilo] = objetoContendoEstilo[estilo]
        }

    }

}