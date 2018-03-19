# poo
execicios da ficha 3

/*
    Variável global que referencia uma função anónima reponsável por apresentar um determinado valor na TextArea
*/
let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}

/* A -  Escreva uma função que receba uma string e que devolva o número de
caracteres da string */

function funcA(str) {
    let resultado = AAA(str)
    show("A -> " + resultado)
}

function AAA(str) {

   // let str = "Vermelho"
    let tamanho = str.length

    return(tamanho)    
} 

/* Escreva uma função que receba duas strings (nome e apelido) e escreva
o nome completo no formato: APELIDO, NOME */

function funcB() {
    let resultado = B()
    show("B -> " + resultado)
}

function B() {

    let str1 = "Isabela"
    let str2 = "da Costa" 

    return(str2.toLocaleUpperCase() + ", " + str1.toLocaleUpperCase()) 

}  


/* Escreva uma função que receba uma string e retorne o nº de vogais
dessa string (minúsculas e maiúsculas) */

function funcC() {
    let resultado = C()
    show("C -> " + resultado)
}

function C() {

    let vogais =  ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]
    let str1 = "Isabela"
    let contador = 0
   
   
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
          if (str1[i] == vogais[j])
           {
              contador++

          } } }   

    return(contador) 

     // let b = (str1.match(/[aeiou]/ig)||[]).length      TBM FUNCIONA

}  


/* Escreva uma função que receba uma string e retorne o nº de palavras
dessa string */

function funcD() {
    let resultado = D()
    show("D -> " + resultado)
}

function D() {

    let str = "vermelho preto azul amarelo";
    let numeroPalavras = (str.split(" ").length);  //coloca as palavras dentro de um array a as conta

    // let numeroPalavras = (str.split(" ").length -1);    //conta quantos espacos tem na string

    return(numeroPalavras) 

}  

/* Escreva uma função que receba uma string e retorne a mesma string
invertida */

function funcE() {
    let resultado = E()
    show("E -> " + resultado)
}

function E() {

    let str = prompt("digite uma alguma coisa")
    let newString = ""
    
    for (let i = str.length - 1; i >= 0; i--) {
        newString =  newString +  str[i]
    }
    
   return(newString)

}  

/* Escreva uma função que receba uma string e um caracter e que retorne
a mesma string sem a ocorrência desse caracter */

function funcF() {
    let resultado = F()
    show("F -> " + resultado)
}

function F() {

    let str = "Isabela"
    let crt = prompt("digite uma alguma coisa")
    let mystring = str.split(crt).join('')

    // let mystring = str.replace(/[a]/g, '')  TBM FUNCIONA

   return(mystring)

}  

/* Escreva uma função que receba um determinado número (em segundos) e
que retorne o número de horas, minutos e segundos correspondentes.
Conforme o seguinte exemplo: 8053s = 2h + 14m + 13s */

function funcG() {
    let resultado = G()
    show("G -> " + resultado)
}

function G() {

    var totalNumberOfSeconds = 8053
    var hours = parseInt( totalNumberOfSeconds / 3600 )
    var minutes = parseInt( (totalNumberOfSeconds - (hours * 3600)) / 60 )
    var seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))))
    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds)
    
    return(result)

}  


/* Cifra de César */

function funcH() {
    let resultado = H()
    show("H -> " + resultado)
}

function H() {

   //return()

}  

