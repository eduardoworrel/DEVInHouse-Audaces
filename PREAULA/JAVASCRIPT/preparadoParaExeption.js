let estaCorrendo = true;
setInterval(() => {
    if(estaCorrendo == true){
        animacaoDoPersonagemCorrendo()
    }
}, 5)
try{
    setTimeout(() => {
       throw "pedra"; 
    }, 3000)

    setTimeout(() => {
        estaCorrendo = false;
        paraAnimacaoPersonagemCorrendo()   
    }, 6000)

}catch(exception){
    if(exception == "pedra"){
        animacaoDeDesvio()
        animacaoDeRetorno()
    }else{
        move = false;
        alert("algo deu errado na aplicação")
    }
}

