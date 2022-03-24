let oi = function oi(){}
oi = function (){}

oi = (nome) => { return "olá " + nome}
oi = (nome) =>  "olá " + nome
oi = nome =>  "olá " + nome

let textoFormatado = oi("eduardo");



function processaTextoDepoisDe2Segundos(texto,callback){
    setTimeout(()=> callback(texto),2000)
}

processaTextoDepoisDe2Segundos("oi", (texto)=> alert(texto + "!"))

processaTextoDepoisDe2Segundos("oi", texto => alert(texto + "!"))




window.addEventListener("keypress", (e) => console.log(e.key))

function retorna2Numeros(callback){
    callback(2,6)
}
let resultado1 = retorna2Numeros((n1,n2)=> n1 * n2 )
let resultado2 = retorna2Numeros((n1,n2)=> n1 % n2 )
let resultado3 = retorna2Numeros((n1,n2)=> n1 ** n2 )



setInterval(()=>{console.log("bip")},1000)



function pegaItensDeMenu(tipoUsuario,callback){
    let itens = [];
    if(tipoUsuario == "cliente"){
        //[home,meus produtos, fazer orçamento]
        itens = buscaDoBancoDeClientes()
    }
    if(tipoUsuario == "admin"){
        //[home, gerenciar produtos, gerenciar usuários]
        itens = buscaDoBancoDeAdministadores()
    }
    callback(itens)
}

pegaItensDeMenu("admin", function(itens){
    for(let li in itens){
        document.body.append(li)
    }
})

pegaItensDeMenu("cliente", (itens) => {
    for(let li in itens){
        document.body.append(li)
    }
})



function AddEventNotSoListener(evento,callback){
    if(evento == "click"){
        callback()
    }
}


const element = document.body;

element.addEventListener("click", function(){
    alert("click")
})
element.addEventListener("click", () => {
    alert("click")
})


function calcula(){
    return 1 * 2;
}
const classica = calcula;

const moderna = () => 1 * 2;
//ou
const moderna2 = () => { return 1 * 2 }

