document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)//(evento a escutar, funçao a executar)
document.querySelector("#js").addEventListener("change", atualizarPreco)//(evento a escutar, funçao a executar)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)//(evento a escutar, funçao a executar)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)//(evento a escutar, funçao a executar)
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})//(evento a escutar, funçao a executar)




function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

  
    let preco = qtde * 20;
    if (temJS) preco *= 1.1 
    if (incluiLayout) preco += 100
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia;
   
    document.querySelector("#preco").innerHTML = ` ${preco.toFixed(2) } Euros`
}