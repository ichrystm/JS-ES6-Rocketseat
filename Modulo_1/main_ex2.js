const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'RocketSeat' },
    { nome: 'Chrysler', idade: 20, empresa: 'Tivit' },
    { nome: 'José', idade: 22, empresa: 'Itaú' },
    { nome: 'Roberta', idade: 28, empresa: 'StackOverflow' },
    { nome: 'Diego2', idade: 18, empresa: 'RocketSeat' }
];

//2.1 Utilizando map - Crie uma variável que contenha todas idades dos usuários.
const idades = usuarios.map(item => item.idade);
//console.log(idades);

//2.2 Utilizando filter - Crie uma variável que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos.
const usersrkt = usuarios.filter(item => item.empresa === 'RocketSeat' && item.idade >= 18);
//console.log(usersrkt);

//2.3 Utilizando find - Crie uma variável que procura por um usuário que trabalhe na empresa Google.
const usersgoogle = usuarios.find(item => item.empresa === 'Google');
//console.log(usersgoogle);

//2.4 Unindo operações - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos.
const arr2 = usuarios.map(item => ({...item, idade : item.idade * 2})).filter(item => item.idade <= 50);
//console.log(arr2);










