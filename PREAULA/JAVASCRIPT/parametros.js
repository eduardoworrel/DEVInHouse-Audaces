function TransformarIniciaisEmMaisculo(nomeCompleto) {
    let render = [];
    let arrayDeNomes = nomeCompleto.split(" ");
    for (nome of arrayDeNomes) {
        render.push(nome[0].toUpperCase() + nome.slice(1));
    }
    return render.join(" ");
}

const n1 = TransformarIniciaisEmMaisculo("eduardo worrel")
const n2 = TransformarIniciaisEmMaisculo("eduardo lima de almeida worrel")

console.log(n1)
console.log(n2)



