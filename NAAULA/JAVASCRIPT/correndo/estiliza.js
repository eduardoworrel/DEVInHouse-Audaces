export function estiliza(elementoIndefinido, propriedades){
    let elemento;
  
    if(typeof elementoIndefinido == "string"){

        elemento = document.querySelector(elementoIndefinido)
    }


    if(typeof elementoIndefinido == "object"){
        elemento = elementoIndefinido
    }
   
    for(let objetoContendoEstilo of arrayDePropriedades){
        
        console.log(objetoContendoEstilo)
        for(let estilo in objetoContendoEstilo){
            elemento.style[estilo] = objetoContendoEstilo[estilo]
        }

    }

}