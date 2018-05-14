const Faces = 6  //variavel constante

class Dado {
    constructor(valorFace) {
        this.valorFace = valorFace   //variavel number que guarda o valor atual
    }

    get valorFace() {
        return this._valorFace
    }

    // garante que o valor fornecido como argumento esteja dentro da gama de valores esperada.
    set valorFace(novoValorface) {
        if ((novoValorface >= 1) && (novoValorface <= 6)) {
            return this._valorFace = novoValorface
        } else {
            return "Valor inválido para a face do dado"
        }
    }

    //"rola" o dado e guardar o resultado na variável valorFace
    rolar() {
       let num = Math.floor((Math.random() * 6) + 1)
       return this._valorFace = num
    }

    //retorna um number representando a quantidade de faces do dado
    getQuantidadeFaces() {
        return Faces
    }

}

let dado1 = new Dado()   //construtor/instancia sem argumentos
dado1.valorFace = 1  //define o valor da variável valorFace como 1
console.log(dado1)
console.log(dado1.rolar())
console.log(dado1)
