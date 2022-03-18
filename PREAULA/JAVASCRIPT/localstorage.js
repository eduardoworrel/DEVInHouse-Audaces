//declara elementos em variaveis para utilizarmos a qualquer momento no futuro;
const $input = document.querySelector("#texto")
const $adicionar = document.querySelector(".enviar")

//cria uma variavel que comportará a lista de informações enviadas pelo usuário e também salvas no storage
const RepositorioEmVariavelEspelhoDoStorage = [];

//adiciona ação de clique ao botão
$adicionar.addEventListener("click", function () {
    if ($input.value) {
        
        RepositorioEmVariavelEspelhoDoStorage.push(input.value)
        localStorage.setItem("array", JSON.stringify(RepositorioEmVariavelEspelhoDoStorage))
    }
});

if (localStorage.getItem("array")) {
    RepositorioEmVariavelEspelhoDoStorage = JSON.parse(localStorage.getItem("array"));
}

