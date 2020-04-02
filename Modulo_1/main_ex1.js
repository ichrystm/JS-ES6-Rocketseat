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