const person = {
    firstName: 'Eveline',
    lastName: 'Vieira',
    idade: 19,
    hobbies: ['Pintar', 'Tocar Ukulele', 'Colorir'],
    dog: {
        name: 'baby',
        age: '12'
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const idade = person.idade;
// const hobbies = person.hobbies;

//Mesma coisa que o que escrito acima
const {firstName, lastName, idade, hobbies,dog} = person


console.log(firstName);
console.log(lastName);
console.log(idade);
console.log(hobbies[0]);


console.log(person);
console.log(dog);

//Lista de objetos
const tdos = [
    {
        id: '1',
        descricao: 'Estudar',
        feito: false
    },
    {
        id: '2',
        descricao: 'Limpar quarto',
        feito: true
    }
];
//acessando a descrição do ultimo TO-DO
const ultimo = tdos[1].descricao;
console.log(ultimo);

//escrevendo a lista em JSON
const todosJSON = JSON.stringify(tdos);

const todoList = JSON.parse(todosJSON); //de JSON para lista
