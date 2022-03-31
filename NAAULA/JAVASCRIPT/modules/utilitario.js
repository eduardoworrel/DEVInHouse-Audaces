import {cresce,diminui,circula,enquadra,novo} from './manipulaElemento.js'

const config = {
    "#cresce": cresce,
    "#diminui": diminui,
    "#circular": circula,
    "#quadriculado": enquadra,
    "#novo": novo
}
export function associa(seletor, elementoAlvoDoComportamento){
    let funcaoCallback;
    funcaoCallback = config[seletor];

    const naoSeiMasSeiQueEElementoHTML = document.querySelector(seletor)
    naoSeiMasSeiQueEElementoHTML.addEventListener("click", ()=>{
        funcaoCallback(elementoAlvoDoComportamento)
    })
}
