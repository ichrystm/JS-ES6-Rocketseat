//5.1 defina uma variável x que recebe a primeiraposição do vetor e outra variável y que recebe todo restante dos dados.
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

//console.log(x);
//console.log(y);

//Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function soma (...params){
    return params.reduce((total, next) => total + next);
}  

//console.log(soma(1,2,3));

//5.2 Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Chrys.

const usuario = {
    nome: 'Chrysler',
    idade: 20,
    endereco: {
        cidade: 'São Paulo',
        uf: 'SP',
        pais: 'Brasil',
    },
};

const usuario2 = {...usuario, nome: 'Chrys'};
//console.log(usuario2);

//Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras

const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
//console.log(usuario3);