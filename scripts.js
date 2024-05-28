let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function ColocarNaTela (dados){
console.log(dados)

document.querySelector(".cidade").innerHTML = "Temperatura em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "ºC"
document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + " % "
}


async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
        "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())

    // AWAIT = ESPERE
    // FETCH -> Ferramenta do JavaScript para acessar servidores
    // THEN -> ENTÃO
    //JSON -> JAVASCRIPT OBJECT NOTATION (O FORMATO QUE O JAVASCRIPT ENTENDE)

    ColocarNaTela(dados)
}


function CliqueiNoBotao() {
    let cidade = document.querySelector(".local").value

    buscarCidade(cidade)
}

