//Strings

const message = 'Hello World';

console.log(message.length);

const firstName = 'Maria';
const lastName = 'Vieira';

console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()}`); //Template String

const names = 'Maria, João, Rafaela';
console.log(names.split(',')) // cria lista 

//numeros
const number = 10;
console.log(number.toString());
console.log(typeof number.toString());

//Booleans

false 
true

console.log(2==2);

const x = null; //nulo, sem valor
const y = undefined; //não definido

//lista
const Listanames = ['Maria', 'Gabi', 10, 'João', 'Danilo', 'Guilherme', false,  'Gabriel', 'Eveline'];

const joao = Listanames[3]; //filtra pelo indíce de posição dentro da lista
console.log(joao);
Listanames.push('Allana'); //add ao final da lista

console.log(Listanames);
Listanames.unshift(19); //add ao inicio da lista
console.log(Listanames);

Listanames.pop(); //remove o valor final da lista
console.log(Listanames);

Listanames[5] = 'Vitória'; //reescreve um item da lista
console.log(Listanames);

console.log(Listanames.indexOf('Danilo')) //saber o index de um elemento da lista;

const ordemNames = Listanames.sort(); //ordena em ordem alfabética os itens da lista

const quantNames = Listanames.length; //saber o tamanho da lista

const namesIsArray = Array.isArray(Listanames); //comprova se é uma lista ou não
console.log(namesIsArray);

// map
const numeros = [1, 2, 3, 4, 5];
const numerosMultiplicadosPorDois = numeros.map(function(num) {
    return num * 2;
}); //a função é executada em cada numero da lista e o map é responsável por colocar os numeros multiplicados em uma nova lista.

console.log(numerosMultiplicadosPorDois);

//filter
const idades = [10, 19, 23, 40, 58];
const idadesPares = idades.filter(function(id) {
    return id % 2 === 0;
}) //filter executa e se a condição for true ele armazena em uma nova lista com a condição aplicada.
console.log(idadesPares);

//reduce
const somaIdadades = idades.reduce(function(age, accumulator) {
    return accumulator + age;
}, 0);

console.log(somaIdadades);

const t = ''; //FALSO
const c = 0; //FALSO
const a = null; //FALSO
const b = undefined; //FALSO


const list = []; //TRUE
const object = {} //TRUE
console.log(!!object) //Diz se é true ou false 
console.log(!object) //inverte o booleano da const  