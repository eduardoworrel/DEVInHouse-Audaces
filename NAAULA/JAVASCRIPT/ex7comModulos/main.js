        import modulo from './movimenta.js'
        let x = 0;
        let y = 0;

        const coordenadas = localStorage.getItem("coordenadas"); 
        if(coordenadas != null){
            const obj = JSON.parse(coordenadas)
            console.log(obj)
            x = obj.x;
            y = obj.y;
        }

        let move = {"ArrowDown": false,esquerda:false,cima:false,baixo:false}

        const personagem = document.querySelector("#personagem");
        
        personagem.style.top = y + "px";
        personagem.style.left = x + "px";

        setInterval(()=>{
            let obj = modulo.movimenta(personagem,move,x,y)
            x = obj.x;
            y = obj.y;
            
        },1)
        
        function salvaPosicaoNoLocalStorage(){
            localStorage.setItem("coordenadas",JSON.stringify({x:x,y:y}))
        }
        function stop(){
            move = false
        }

        window.addEventListener("keyup",(e)=>{
            stop()
            salvaPosicaoNoLocalStorage()
        })

        window.addEventListener("keydown",(e)=>{

            move = modulo.captura(e.key)
        })