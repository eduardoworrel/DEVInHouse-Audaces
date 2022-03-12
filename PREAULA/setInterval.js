function desligaOuLigaLanterna(){
    if(document.body.style.backgroundColor != "black"){
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "yellow"
    }
}

setInterval(desligaOuLigaLanterna, 1000)


