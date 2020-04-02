/*
Exercício 1:

Crie uma classe com nome "Admin", essa classe deveextender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-losem propriedades da classe.
A classe "Admin" por sua vez não recebe parâmetros mas deverepassar os parâmetros de e-mail e senha à classe pai e marcar
uma propriedade "admin" como true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin queretorna se o usuário é 
administrador ou não baseado na propriedade admin ser true ou não.
*/

class usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class admin extends usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const user1 = new usuario('ichrystm@gmail.com','12345678');
const admin1 = new admin('admin1@admin.com','87654321');
const user2 = new usuario('teste@teste.com', 'senha');
const admin2 = new admin('admin2@admin.com', 'admin');

console.log(`O usuário user1 é admin? ${user1.isAdmin()}`);
console.log(`O usuário admin1 é admin? ${admin1.isAdmin()}`);
console.log(`O usuário user2 é admin? ${user2.isAdmin()}`);
console.log(`O usuário admin2 é admin? ${admin2.isAdmin()}`);