class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = "Goku";
        this.idade = 25;
        this.tipo = "Guerreiro";
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido"; 
                break;
        }

        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi("Goku", 25, "guerreiro")

heroi1.atacar();