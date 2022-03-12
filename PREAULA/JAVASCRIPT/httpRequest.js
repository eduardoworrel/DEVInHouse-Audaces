
const API = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/"

fetch(API).then(function (naoFormatado){
    return naoFormatado.json();
}).then(function (json){
    console.log(json)
});

