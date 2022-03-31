let string = [0,1,2,3,4,5].reduce((ultimoValorRetornado, valorAtual)=>{
    return ultimoValorRetornado + "<div><b>"+ valorAtual +"</b></div>";
},"")

let array = [0,1,2,3,4,5].reduce((ultimoValorRetornado, valorAtual)=>{
    ultimoValorRetornado.push("<div><b>"+ valorAtual +"</b></div>");
    return ultimoValorRetornado;
},[])