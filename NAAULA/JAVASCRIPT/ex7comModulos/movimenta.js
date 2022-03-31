export default {
    movimenta :  function (elemento,direcao,x,y){
        switch(direcao){
            case "desce":
                elemento.style.top = ++y  + "px";   
          
            case "sobe":
                elemento.style.top = --y  + "px";
           
            case "direita":
                elemento.style.left = ++x  + "px";
           
            case "esquerda":
                elemento.style.left = --x  + "px";
           
        }
        return {x:x, y:y}
    },
    captura : (teclaPressionada)=>{
        if(teclaPressionada == "ArrowDown"){
           return "desce"
        }

        if(teclaPressionada == "ArrowUp"){
            return "sobe"
        }

        if(teclaPressionada == "ArrowLeft"){
            return "esquerda"
        }

        if(teclaPressionada == "ArrowRight"){
            return "direita"
        }
    }
}