import { estiliza } from "./estiliza.js";



const personagem = document.querySelector("#personagem")
let move = false;
let vaiPraCima = false;
let vaiPraBaixo= false;

let distanciaDaEsquerda = 0
let distanciaDeCima = 500

setInterval(()=>{
    if(move == true){
        distanciaDaEsquerda = distanciaDaEsquerda + 1;
        estiliza(personagem,[{ left : distanciaDaEsquerda + "px"}])
      
        if(vaiPraCima == true){
            distanciaDeCima = distanciaDeCima - 1
            personagem.style.top = distanciaDeCima + "px"
        }
        if(vaiPraBaixo == true){
            distanciaDeCima = distanciaDeCima + 1
            personagem.style.top = distanciaDeCima + "px"
        }
        
    }
},3)

//cronologia
setTimeout(()=>{

    iniciaAnimacao()

    setTimeout(()=>{
        vaiPraCima = true;
    },1300)

    setTimeout(()=>{
        vaiPraCima = false;
        vaiPraBaixo = true;
    },3000)

    setTimeout(()=>{
        vaiPraBaixo = false;
    },4700)


    setTimeout(()=>{
        paraAnimacao()
       
    },6000)


},1000)

function paraAnimacao(){
    move = false;
    personagem.src = "parado.png"
   
  
}
function iniciaAnimacao(){
    move = true;
    personagem.src = "running.gif"
}