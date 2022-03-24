
export function criaMenu(targetSelector, itens){
    const target = document.querySelector(targetSelector)
    itens.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        target.append(li);
    });
}

