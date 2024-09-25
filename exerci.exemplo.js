Classe

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}



Objeto

const pessoa1 = new Pessoa('João', 30);



Atributo

console.log(pessoa1.nome); // Saída: João
console.log(pessoa1.idade); // Saída: 30



Método


class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

const pessoa2 = new Pessoa('Maria', 25);
console.log(pessoa2.saudacao()); // Saída: Olá, meu nome é Maria e eu tenho 25 anos.



Herança

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    saudacao() {
        return `Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
}

const funcionario1 = new Funcionario('Carlos', 28, 'Desenvolvedor');
console.log(funcionario1.saudacao()); // Saída: Olá, meu nome é Carlos, eu tenho 28 anos e sou Desenvolvedor.



Polimorfismo

const pessoa3 = new Pessoa('Ana', 22);
const funcionario2 = new Funcionario('Pedro', 35, 'Gerente');

function apresentar(pessoa) {
    console.log(pessoa.saudacao());
}

apresentar(pessoa3); // Saída: Olá, meu nome é Ana e eu tenho 22 anos.
apresentar(funcionario2); // Saída: Olá, meu nome é Pedro, eu tenho 35 anos e sou Gerente.