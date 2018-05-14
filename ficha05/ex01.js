class Retangulo {   //definicao da classe
    constructor(largura = 1, altura = 1) {   //definicao dos valores padra0o
        this.largura = largura    //variavel tipo number
        this.altura = altura     //variavel tipo number
        this._cor = "branco"     //variavel tipo string com valor padrao especifico
    } 

    //propriedades largura
    get largura() {
        return this._largura
    }

    set largura(novaLargura) {
        this._largura = novaLargura
    }

    //propriedades altura
    get altura() {
        return this._altura
    }

    set altura(novaAltura) {
        this._altura = novaAltura
    }

    //propriedades cor
    get cor() {
        return this._cor
    }

    //cor nao tem set pois seu valor eh especifico, nao pode ser alterado

    getarea() {   //metodo
        return this._altura * this._largura
    }

    getperimetro() {    //metodo
        return (2 * this._altura) + (2 * this._largura)
    }

} 

let ret1 = new Retangulo()   // construtor/instancia que cria um retangulo com valores padrao
console.log(ret1)
console.log(ret1.largura)
console.log(ret1.altura)
console.log(ret1.getarea())
console.log(ret1.getperimetro())

let ret2 = new Retangulo(10, 5)   // construtor/instancia que cria um retangulo com valores especificados
console.log(ret2)
console.log(ret2.largura)
console.log(ret2.altura)
console.log(ret2.getarea())
console.log(ret2.getperimetro())
