let inputs = document.querySelectorAll("input")

const numerosFiltrados = inputs
.filter(estaNafaixa())

const numerosFormatados = numerosFiltrados.map(function(elementoEmQuestao){
        const span = document.createElement("span")
        span.innerText = elementoEmQuestao;
        return span;
})

const inputsComErro = inputs
.filter(naoEstaNafaixa())
.forEach(function(input){
    input.style.border = "3px solid red"
})