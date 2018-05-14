class Filme {
    constructor(nome, ano, genero) {
        this.nome = nome
        this.ano = ano
        this.genero = genero
    }

    //prorpeidades
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

    get ano() {
        return this._ano
    }

    set ano(novoAno) {
        this._ano = novoAno
    }

    get genero() {
        return this._genero
    }

    set genero(novoGenero) {
        this._genero = novoGenero
    }
}

let arrayFilmes = []

window.onload = function() {

    

    let form = document.getElementById("meuform")
form.addEventListener("submit", function(event) {

    let nome = document.getElementById("nome")
    let genero = document.getElementById("genero")
    let ano = document.getElementById("ano")


//cria objeto
let film = new Filme(nome.value, ano.value, genero.value)
//guarda no array
arrayFilmes.push(film)
//renderiya a tabela
renderTable()
//previne de enviar o form
event.preventDefault()

})

}

function renderTable() {
    let tabela = document.getElementById("tabela")
////////////////////// RENDERIZACAO DA TABELA ////////////////////
    //cabecalho da tabela
    let strHtml = "<thead><tr><th >#</th>" +
          "<th>Filme</th>" +
          "<th>Genero</th>" +
          "<th>Ano</th>"+
          "<th>Acoes</th>"+
          "</tr>" + 
          "</thead><tbody>"

        //conteudo da tabela
        //percorre o array jogos e os lista por ordem mais recente
        for (var i = 0; i < arrayFilmes.length; i++) {
            strHtml += "<tr>" + 
            "<th>" + (i+1) + "</th>" +
            "<td>" + arrayFilmes[i].nome + "</td>" +
            "<td>" + arrayFilmes[i].genero + "</td>" +
            "<td>" + arrayFilmes[i].ano + "</td>" +
            "<td>" +    //##### adiciona icones para novas acoes na tabela
                
                "<a id='" + arrayFilmes[i].id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                
            "</td>" +     
            "</tr>"            
        }  
        strHtml += "</tbody>"
        
        tabela.innerHTML = strHtml

//////////////////////////////////////////////////////////////////

////////////////////// REMOVE JOGO PELO ICONE ////////////////////

    // Pega tudo que tem remove na tabela
    let tdremove = document.getElementsByClassName("remove")

    // For each link, add a listener to listen the click event
    for (let i = 0; i < tdremove.length; i++) {
        tdremove[i].addEventListener("click", function() {

            // By clicking in a specific game, remove it from the array
            let jogoID = tdremove[i].getAttribute("id")
            removeJogoporID(jogoID)
            renderTable()
        })        
    }

}

function removeJogoporID(id) {

    arrayFilmes = []
    tabela.innerHTML = ""

  }
