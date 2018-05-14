const Velo = {    //definicao de uma constante com 3 variaveis
    baixa: 1,
    media: 2,
    alta: 3
}

class Ventoinha {   //definicao da classe
    constructor(velocidade = Velo.baixa, onoff = false) {  //definicao dos valores padrao
        this.velocidade = velocidade   //variavel number
        this.onoff = onoff    //variavel booleana
    }

    //propriedades get e set de velocidade
    get velocidade() {
        return this._velocidade
    }

    set velocidade(novaVelocidade) {
        this._velocidade = novaVelocidade
    }

    //propriedades get e set de onoff
    get onoff() {
        return this._onoff
    }

    set onoff(novoOnoff) {
        this._onoff = novoOnoff
    }

    toString() {
        if (this._onoff) {
        return "a ventoinha esta ligada, na velocidade: " + this._velocidade
        } else {
        return  "a ventoinha esta desligada" }
    }

}

let vento1 = new Ventoinha()   //instancia da classe ventoinha
let vento2 = new Ventoinha()   //instancia da classe ventoinha

console.log(vento1.velocidade)
console.log(vento1.onoff)
console.log(vento1.toString())

vento2.onoff = true                 //altera valores da instancia
vento2.velocidade = Velo.alta        //altera valores da instancia

console.log(vento2.velocidade)
console.log(vento2.onoff)
console.log(vento2.toString())
