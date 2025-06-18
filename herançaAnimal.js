class Animal{
    constructor(nome){
        this.nome = nome;
    }

    emitirSom(){
        return "som aleatório";
    }
}

class Cachorro extends Animal{
    constructor(nome){
        super(nome);
    }

    emitirSom(){
        return "Wooof Wooof Woof";
    }
    abanarRabo(){
        return `${this.nome} abanou o rabinho`
    }
}

const Matilda = new Cachorro("Matilda")
console.log(Matilda.abanarRabo());
console.log(Matilda.emitirSom());