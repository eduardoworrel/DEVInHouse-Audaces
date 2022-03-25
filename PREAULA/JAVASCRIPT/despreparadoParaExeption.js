let estaCorrendo = true;

setInterval(() => {
    if(estaCorrendo == true){
        animacaoDoPersonagemCorrendo()
    }
}, 5)
setTimeout(() => {
    estaCorrendo = false;
    paraAnimacaoPersonagemCorrendo()   
}, 6000)

