import { getEstilo } from "./posicionaAleatoriamente.module.js";

const larguraMaxima = 1000
const alturaMaxima = 300

for (let index = 0; index < 5; index++) {
    const div = document.createElement("div");
    
    let estilos = getEstilo(alturaMaxima,larguraMaxima)

    div.style.border = "5px solid black"; 

    div.style.left = estilos.left;
    div.style.top = estilos.top;
    div.style.height = estilos.heigth;
    div.style.width = estilos.width;

    document.body.append(div)
}