import * as CALCULADORA from './calculadora.js'

let tamanho = 500;
let arredondamentoOriginal = 0;
const main = document.querySelector("main");

export function diminui(elementoAlvoDoComportamento) {

    tamanho = CALCULADORA.subtrai(tamanho,70);

    let valorJaNoFormatoAdequado = tamanho + "px";

    elementoAlvoDoComportamento.style.height = valorJaNoFormatoAdequado
    elementoAlvoDoComportamento.style.width = valorJaNoFormatoAdequado

}

export function cresce(elementoAlvoDoComportamento) {
    tamanho = CALCULADORA.soma(tamanho,70)
    let valorJaNoFormatoAdequado = tamanho + "px";
    elementoAlvoDoComportamento.style.height = valorJaNoFormatoAdequado
    elementoAlvoDoComportamento.style.width = valorJaNoFormatoAdequado
}

export function circula(evento) {
    console.log(evento)
    arredondamentoOriginal = CALCULADORA.soma(arredondamentoOriginal, 5);
    elementoCentral.style.borderRadius = arredondamentoOriginal + "px";
}

export function enquadra() {
  
    arredondamentoOriginal = CALCULADORA.subtrai(arredondamentoOriginal, 5);
    elementoCentral.style.borderRadius = arredondamentoOriginal + "px";
}

export function novo(){
    const div = document.createElement("div");
    div.classList.add("novoElemento")
    main.append(div);
}