function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

export function getEstilo(xMaximo,yMaximo){
    return {
        top: getRandomInt(0, xMaximo) + "px",
        left: getRandomInt(0, yMaximo) + "px",
        heigth: getRandomInt(10,500) + "px",
        width: getRandomInt(10,500) + "px"
    }

}