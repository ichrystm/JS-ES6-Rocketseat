/*
4.1 Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis,
*/
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

/*
4.2 Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuárioseparadamente
 */
const mostraInfo = (nomeusu, idade) => (console.log(`O ${nomeusu} tem ${idade} anos`));
mostraInfo('Chrysler', 20);

