class Pais {
    constructor(nome,pop,area) {
        this.nome = nome
        this.pop = pop
        this.area = area
    }

    //propriedades nome
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

    //propriedades populacao
    get pop() {
        return this._pop
    }

    set pop(novaPop) {
        this._pop = novaPop
    }

    //propriedades area
    get area() {
        return this._area
    }

    set area(novaArea) {
        this._area = novaArea
    }


    // Método estatico que calcula o pais com maior area
    static maiorArea() {
        let nomePais = ""
        var maior = 0

        for (let i = 0; i < arrayPaises.length; i++) {
            if (arrayPaises[i].area > maior) {
                maior = arrayPaises[i].area
                nomePais = arrayPaises[i].nome
            }
        } return nomePais
    }


    // Método estatico que calcula o pais com maior populacao
    static maiorPop() {
        let nomePais = ""
        var maior = 0

        for (let i = 0; i < arrayPaises.length; i++) {
            if (arrayPaises[i].pop > maior) {
                maior = arrayPaises[i].pop
                nomePais = arrayPaises[i].nome
            }
        } return nomePais
    }


    // Método estatico que calcula o pais com maior densidade
    static maiorDen() {
        let maior = 0
        let nomePais = ""    
        for(let i = 0; i < arrayPaises.length; i++) {
            let densidade = arrayPaises[i].pop / arrayPaises[i].area
            if (densidade > maior) {
                maior = densidade
                nomePais = arrayPaises[i].nome
            }
        }
        return nomePais
    }


    // Método estatico que vai comparar nomes de países e ordená-los
    static comparar(p1, p2) {
        if (p1.nome > p2.nome) {
            return 1
        } else if (p1.nome < p2.nome) {
            return -1
        } else {
            return 0
        }
    }
}

//criacao de instancias/construtores
let pais1 = new Pais("brasil", 700, 50)
let pais2 = new Pais("australia", 700, 70)
let pais3 = new Pais("eua", 900, 80)
let pais4 = new Pais("cabo verde", 100, 10)
let pais5 = new Pais("africa do sul", 400, 30)

let arrayPaises = []   //criacao do array Paises
arrayPaises.push(pais1, pais2, pais3, pais4, pais5)  //insere as instancias no array paises

// Listar países
for(let i=0; i< arrayPaises.length; i++) {
    console.log(arrayPaises[i].nome)
}

// Ordenar pelo nome do país
arrayPaises.sort(Pais.comparar)

// Listar países ordenados
for(let i=0; i< arrayPaises.length; i++) {
    console.log(arrayPaises[i].nome)
}


