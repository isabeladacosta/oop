class Circulo {   //definicao da classe
    constructor(raio) {   
        this.raio = raio   //variavel number
    }

    //propriedades get e set de raio
    get raio() {
        return this._raio
    }

    set raio(novoRaio) {
        this._raio = novoRaio
    }

    getArea() {
        return 3.14 * (this._raio * this._raio)
    }

    getCircunferencia() {
        return 2 * 3.14 * this._raio
    }

    aumentaRaio(num1) {   //quando vem de fora, colocar entre parenteses o valor 
        return (num1 / 100) * this._raio
    }
}


let num2 = parseInt(prompt("digite um numero para o raio"))
let circ1 = new Circulo(num2)  // construtor/instancia que recebe o valor do raio como argumento
console.log(circ1.raio)
console.log(circ1.getArea())
console.log(circ1.getCircunferencia())

let num1 = parseInt(prompt("digite um numero para porcentagem"))
console.log(circ1.aumentaRaio(num1))

