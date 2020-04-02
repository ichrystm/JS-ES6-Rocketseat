import { resolve } from "upath";

//Transforme as funções para arrow functions

// 3.1
const arr = [1, 2, 3, 4, 5];

const arr10 = arr.map(item => item + 10);
//console.log(arr10);

//3.2
const usuario = { nome: 'Chrysler', idade: 20 };

const mostraIdade = usuario => usuario.idade;
//console.log(mostraIdade(usuario));

//3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome, idade) => ({nome, idade}); //commit joaooliveiradev
//console.log(mostraUsuario(nome, idade));

//3.4 
const promise = () => new Promise (resolve, reject => resolve());

