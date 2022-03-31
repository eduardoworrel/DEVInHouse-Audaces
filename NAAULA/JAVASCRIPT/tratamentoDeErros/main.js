function aplicaEstilos(seletor,objetoDeEstilos){
    const elemento = document.querySelector(seletor)
    for(let estilo in objetoDeEstilos){
        elemento.style[estilo] = objetoDeEstilos[estilo]
    }
}

aplicaEstilos("body",
    {
        backgroundColor:"red",
        color:"blue"
    }
)
try{
    const res = await fetch("https://images.dog.ceo/breeds/saluki/n02091831_55.jpg");
    const body = await res.blob()
    const tempImage = URL.createObjectURL(body);
    
    const spanDeFeedbackProUsuario = document.createElement("");
    spanDeFeedbackProUsuario.style.backgroundImage =  `url('${tempImage}')`
    spanDeFeedbackProUsuario.style.width =  `100vw`
    spanDeFeedbackProUsuario.style.height =  `100vh`
    spanDeFeedbackProUsuario.style.backgroundSize =  `50%`
    document.body.append(spanDeFeedbackProUsuario);
}catch(erro){
   const spanDeFeedbackProUsuario = document.createElement("div");
   spanDeFeedbackProUsuario.innerText = `
                    A url falhou, contacte o administrador 
                    do sistema<br> ERRO:<br>
                    ${erro}
                `;

    document.body.append(spanDeFeedbackProUsuario);
    spanDeFeedbackProUsuario.style.backgroundColor = "red";
    spanDeFeedbackProUsuario.style.color = "white";
    spanDeFeedbackProUsuario.style.padding = "5px";
}
